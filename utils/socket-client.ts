import { Socket } from "socket.io-client";
import { io } from "socket.io-client";

export class SocketClient {
  static start(namespace: string): Socket {
    const socket = io(`/${namespace}`, {
      path: "/socket.io/",
    });
    return socket;
  }
}
