import { Socket } from "socket.io-client";
import { io } from "socket.io-client";

export class SocketClient {
  static start(namespace: string): Socket {
    const URL = process.env.NODE_ENV === "production"
      ? `https://${window.location.host}`
      : "http://localhost:3000";
    const socket = io(`${URL}/${namespace}`, {
      path: "/socket.io/",
    });
    return socket;
  }
}
