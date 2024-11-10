import { Server } from "socket.io";
import { Server as HttpServer } from 'http';
import { CreatePlayerUseCase } from "./useCases/game/CreatePlayer/CreatePlayerUserCase";
import { GameServer } from "./GameServer";
import { RemovePlayerUseCase } from "./useCases/game/RemovePlayer/RemovePlayerUseCase";
import { CreateRoomUseCase } from "./useCases/game/CreateRoom/CreateRoomUseCase";
import { JoinRoomUseCase } from "./useCases/game/JoinRoom/JoinRoomUseCase";
import { DisconnectUseCase } from "./useCases/game/Disconnect/DisconnectUseCase";
import jogoDaVelha from "./games/jogoDaVelha";

export class SocketServer {
  private io: Server

  constructor(server: HttpServer) {
    this.io = new Server(server, { cors: { origin: '*' } });
  }

  start() {
    const jogoDaVelhaNamespace = this.io.of('/jogo-da-velha');
    jogoDaVelha(jogoDaVelhaNamespace);

    // const game = new GameServer();
    // const createPlayerUseCase = new CreatePlayerUseCase(game);
    // const removePlayerUseCase = new RemovePlayerUseCase(game);
    // const createRoomUseCase = new CreateRoomUseCase(game);
    // const joinRoomUseCase = new JoinRoomUseCase(game);
    // const disconnectUseCase = new DisconnectUseCase(game);

    // this.io.on("connection", (socket) => {
    //   console.log('🎮 Player connected! 🎮');
    //   // jogoDaVelha(socket);
    //   socket.on('createPlayer', (name: string) => {
    //     try {
    //       createPlayerUseCase.execute({ name, id: socket.id });
    //       socket.emit("playerCreated", { name, id: socket.id })
    //       console.log(`Player created: ${socket.id}`);
    //     } catch (error) {
    //       const parsedError = error as Error;
    //       socket.emit("error", parsedError?.message || "ERROR_CREATE_PLAYER");
    //     }
    //   });

    //   socket.on('removePlayer', () => {
    //     try {
    //       removePlayerUseCase.execute({ playerId: socket.id });
    //       socket.emit("playerRemoved", { id: socket.id })
    //       console.log(`Player removed: ${socket.id}`);
    //     } catch (error) {
    //       const parsedError = error as Error;
    //       socket.emit("error", parsedError?.message || "ERROR_REMOVE_PLAYER");
    //     }
    //   });

    //   socket.on('createRoom', () => {
    //     try {
    //       const room = createRoomUseCase.execute({ id: socket.id });
    //       socket.join(room.id);
    //       socket.emit('roomCreated', room.id);
    //       console.log(`Room created: ${room.id}`);
    //     } catch (error) {
    //       const parsedError = error as Error;
    //       socket.emit("error", parsedError.message || "ERROR_CREATE_ROOM");
    //     }
    //   });

    //   socket.on('joinRoom', (roomId: string) => {
    //     try {
    //       const { room, player } = joinRoomUseCase.execute({ playerId: socket.id, roomId });
    //       socket.join(roomId);
    //       this.io.to(room.id).emit('playerJoined', player);
    //       console.log(`Player ${player.id} entered room ${room.id}`);
    //     } catch (error) {
    //       const parsedError = error as Error;
    //       socket.emit("error", parsedError.message || "ERROR_JOIN_ROOM");
    //     }
    //   });

    //   socket.on('disconnect', () => {
    //     try {
    //       const { room } = disconnectUseCase.execute({ playerId: socket.id });
    //       if (room) {
    //         this.io.to(room.id).emit('playerLeft', socket.id);
    //       }
    //       console.log(`Player ${socket.id} left room ${room?.id}`);
    //     } catch (error) {
    //       const parsedError = error as Error;
    //       socket.emit('error', parsedError?.message || "ERROR_DISCONNECT");
    //     }
    //   });
    // });
  }
}