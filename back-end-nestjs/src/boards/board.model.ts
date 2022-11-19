export interface Board {
  id: string;
  title: string;
  description: string;
  // 공개글인지 비공개 글인지 게시물의 '상태'를 나타내는 프로퍼티
  status: BoardStatus;
}

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
