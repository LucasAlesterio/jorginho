import { createServer } from "http";
import next from "next";
import { SocketServer } from "./api/SocketServer";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer(handle);

  const socketServer = new SocketServer(server);
  socketServer.start();

  server.listen(port, () => {
    console.log(
      `> 🔥 Server listening at http://localhost:${port} as ${dev ? "development" : process.env.NODE_ENV
      }`,
    );
  });

});
