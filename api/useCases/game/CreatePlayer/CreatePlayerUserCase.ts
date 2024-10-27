
import { Player } from "../../../entities/Player";
import { IGameServer } from "../../../interfaces/IGameServer";
import { CreatePlayerDto } from "./CreatePlayerDto";

export class CreatePlayerUseCase {
  private gameRepository: IGameServer;

  constructor(gameRepository: IGameServer) {
    this.gameRepository = gameRepository;
  }

  execute(createPlayerDto: CreatePlayerDto): void {
    const { name, id } = createPlayerDto;
    const player = new Player(name, id);
    this.gameRepository.addPlayer(player);
  }
}