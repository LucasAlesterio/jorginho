import { IRoom } from "./IRoom";

export interface IJogoDaVelha {
  rooms: IRoom[],
  removeRoom: (room: IRoom) => void;
  addRoom: (room: IRoom) => void;
  findRoomById(roomId: string): IRoom | undefined;
  findRoomByPlayerId(playerId: string): IRoom | undefined;
}