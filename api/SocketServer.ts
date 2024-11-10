import { Server } from "socket.io";
import { Server as HttpServer } from 'http';
import jogoDaVelha from "../games/jogoDaVelha";

export class SocketServer {
  private io: Server

  constructor(server: HttpServer) {
    this.io = new Server(server, { cors: { origin: '*' } });
  }

  start() {
    const jogoDaVelhaNamespace = this.io.of('/jogo-da-velha');
    jogoDaVelha(jogoDaVelhaNamespace);
  }
}