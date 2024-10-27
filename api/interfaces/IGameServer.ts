import { IPlayer } from "./IPlayer";


export interface IGameServer {
  findPlayerById(playerId: string): IPlayer | undefined;
  addPlayer(player: IPlayer): void;
  removePlayer(player: IPlayer): void;
}
