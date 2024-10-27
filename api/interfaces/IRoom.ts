import { IPlayer } from "./IPlayer";


export interface IRoom {
  id: string;
  players: IPlayer[];
  addPlayer(player: IPlayer): void;
  removePlayer(player: IPlayer): void;
  findPlayerById(playerId: number): IPlayer | undefined;
}
