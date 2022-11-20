import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';

// nest g co boards --no-spec
@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  createBoard(
    @Body('title') title: string,
    @Body('description') description: string,
    // 리턴 값은 Board[] 가 아닌 Board 단일 객체이기 때문
  ): Board {
    return this.boardsService.createBoard(title, description);
  }
}
