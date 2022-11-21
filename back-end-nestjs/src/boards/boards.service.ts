import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
// npm i uuid --save
// 유니크한 id 값을 만들어주는 라이브러리
// uuid 에서 v1 을 사용 => 가독성을 위해 as uuid
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

// nest g s boards --no-spec
@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  // id 로 해당 id를 가진 게실물 찾기
  getBoardById(id: string): Board {
    const found = this.boards.find((board) => board.id === id);
    // id 값으로 찾은 게시물이 없을 경우
    if (!found) {
      // 찾는 게시물이 없음을 알려주는 예외처리 메세지 발생
      throw new NotFoundException(`Not Found Board With ID : ${id}`);
    }
    return found;
  }

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
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

  deleteBoard(id: string): void {
    // id 로 찾은 값으로만 처리하기 위해 먼저 id 가 있는지 찾는 로직 추가
    const found = this.getBoardById(id);
    this.boards = this.boards.filter((board) => board.id !== found.id);
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    // status를 수정할 게시물을 id로 먼저 찾아옴
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }
}
