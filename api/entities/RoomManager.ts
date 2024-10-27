import { IRoom } from "../interfaces/IRoom";
import { IRoomManager } from "../interfaces/IRoomManager";

export class RoomManager implements IRoomManager {
  _rooms: IRoom[];

  get rooms() {
    return this._rooms;
  }

  addRoom(newRoom: IRoom) {
    this._rooms.push(newRoom);
  }

  removeRoom(room: IRoom) {
    const finalRooms = this._rooms.filter((currentRoom) => currentRoom.id != room.id);
    this._rooms = finalRooms;
  }

  findRoomById(id: string) {
    return this._rooms.find((room) => room.id === id);
  }

  findRoomByPlayerId(id: string) {
    return this._rooms.find((room) => room.players.some(player => player.id === id));
  }
}