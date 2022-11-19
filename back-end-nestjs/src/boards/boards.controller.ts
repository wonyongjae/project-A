import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

// nest g co boards --no-spec
@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  getAllBoard() {
    return this.boardsService.getAllBoards();
  }
}
