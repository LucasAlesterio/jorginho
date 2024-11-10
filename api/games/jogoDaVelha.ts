import { Namespace } from "socket.io";

export default function jogoDaVelha(namespace: Namespace) {
  namespace.on("connection", (socket) => {
    console.log('🤶 Jogador conectado ao Jogo da Velha:', socket.id);

    socket.on('joinGame', (roomId) => {
      socket.join(roomId);
      console.log(`🚪 Jogador ${socket.id} entrou na partida ${roomId}`);

      socket.to(roomId).emit('playerJoined', `🚪 Jogador ${socket.id} entrou na partida.`);
    });

    socket.on('move', ({ roomId, move }) => {
      console.log("🕹️ Jogada feita", roomId, move)
      socket.to(roomId).emit('move', move);
    });

    socket.on('reset', ({ roomId }) => {
      socket.to(roomId).emit('reset');
    });
  });
}