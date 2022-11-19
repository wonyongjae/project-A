import { Injectable } from '@nestjs/common';

// nest g s boards --no-spec
@Injectable()
export class BoardsService {
  private boards = [];

  getAllBoards() {
    return this.boards;
  }
}
