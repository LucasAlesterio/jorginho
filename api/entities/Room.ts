import { Player } from "./Player";

export class Room {
  private _id: string;
  private _players: Player[];

  constructor(creatorPlayer: Player) {
    this._id = crypto.randomUUID();
    this._players = [creatorPlayer];
  }

  get id() {
    return this._id;
  }

  get players() {
    return this._players;
  }

  findPlayerById(id: string) {
    return this._players.find((player) => player.id === id);
  }

  addPlayer(player: Player) {
    this._players.push(player);
  }

  removePlayer(player: Player) {
    const finalPlayers = this.players.filter((currentPlayer) => currentPlayer.id != player.id);
    this._players = finalPlayers;
  }
}