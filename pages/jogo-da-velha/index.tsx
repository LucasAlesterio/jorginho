import { useCallback, useEffect, useRef, useState } from "react";
import { Socket } from "socket.io-client";
import { SocketClient } from "../../utils/socket-client";
import { Button } from "../../components/button";
import { Input } from "../../components/input";

export default function JogoDaVelha() {
  const emptyBoard = Array(9).fill(null);
  const [isConnected, setIsConnected] = useState(false);
  const board = useRef<string[]>([...emptyBoard]);
  const socket = useRef<Socket>();
  const [room, setRoom] = useState<string>("test");
  const [_, setUpdateBoard] = useState(true);
  const isXNext = useRef(true);
  const typePiece = useRef<boolean>();
  const myTurn =
    typePiece.current === isXNext.current || typePiece.current === undefined;

  useEffect(() => {
    socket.current = SocketClient.start("jogo-da-velha");
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.current.on("connect", onConnect);
    socket.current.on("move", onMove);
    socket.current.on("disconnect", onDisconnect);
    socket.current.on("playerJoined", playerJoined);
    socket.current.on("reset", onReset);

    return () => {
      socket.current?.off("connect");
      socket.current?.off("disconnect");
      socket.current?.off("move");
      socket.current?.off("playerJoined");
      socket.current?.off("reset");
    };
  }, []);

  function playerJoined(message: string) {
    alert(message);
  }

  function joinRoom() {
    socket.current?.emit("joinGame", room);
  }

  function onMove(index: number, isMe = false) {
    if (isMe && typePiece.current === undefined) {
      typePiece.current = isXNext.current;
    }
    board.current[index] = isXNext.current ? "X" : "O";
    isXNext.current = !isXNext.current;
    updateBoard();
  }

  function updateBoard() {
    setUpdateBoard((prev) => !prev);
  }

  function onReset() {
    board.current = [...emptyBoard];
    updateBoard();
  }

  function handleMove(index: number) {
    if (board.current[index] || !myTurn) return;
    socket.current?.emit("move", { roomId: room, move: index });
    onMove(index, true);
  }

  function handleReset() {
    socket.current?.emit("reset", { roomId: room });
    onReset();
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <div className="flex items-end">
        <Input
          label="Sala:"
          className="text-gray-900"
          value={room}
          onChange={({ target }) => setRoom(target.value)}
        />
        <Button onClick={() => joinRoom()}>Entrar</Button>
      </div>
      <Button onClick={() => handleReset()}>Reiniciar</Button>
      <section className="grid grid-cols-3 gap-1">
        {board.current?.map((value, index) => (
          <button
            key={index}
            onClick={() => handleMove(index)}
            className="w-20 h-20 text-3xl font-bold flex items-center justify-center border border-pink-900 text-pink-700 hover:text-pink-500"
          >
            {value}
          </button>
        ))}
      </section>
    </div>
  );
}
