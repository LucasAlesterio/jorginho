import { IGameServer } from "./interfaces/IGameServer";
import { IPlayer } from "./interfaces/IPlayer";


export class GameServer implements IGameServer {
  private Players: IPlayer[];

  constructor() {
    this.Players = [];
  }

  get players() {
    return this.Players;
  }

  findPlayerById(id: string) {
    return this.Players.find((player) => player.id === id);
  }

  addPlayer(player: IPlayer) {
    this.Players.push(player);
  }

  removePlayer(player: IPlayer) {
    const finalPlayers = this.players.filter((currentPlayer) => currentPlayer.id != player.id);
    this.Players = finalPlayers;
  }
}