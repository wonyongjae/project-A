import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
// npm i uuid --save
// 유니크한 id 값을 만들어주는 라이브러리
// uuid 에서 v1 을 사용 => 가독성을 위해 as uuid
import { v1 as uuid } from 'uuid';

// nest g s boards --no-spec
@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(title: string, description: string) {
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    // 새로 만든 board 를 boards 배열에 추가 후 생성된 게시물 리턴
    this.boards.push(board);
    return board;
  }
}
