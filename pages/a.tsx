import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { socket } from "../utils/socket-client";

export default function A() {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  function emitLifeCheck() {
    socket.emit("life-check", "UHUUUL!");
  }

  return (
    <div>
      <button onClick={() => emitLifeCheck()}>Emit event</button>
    </div>
  );
}
