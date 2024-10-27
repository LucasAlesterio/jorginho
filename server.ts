import { createServer } from "http";
import { parse } from "url";
import next from "next";
import { SocketServer } from "./api/SocketServer";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url!, true);
    handle(req, res, parsedUrl);
  }).listen(port);
  const socketServer = new SocketServer(server);
  socketServer.start();

  console.log(
    `> 🔥 Server listening at http://localhost:${port} as ${dev ? "development" : process.env.NODE_ENV
    }`,
  );
});
