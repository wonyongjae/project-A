import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from './board-status.enum';

// typeORM 으로 postgres 와 통신할 board entity
@Entity()
export class Board extends BaseEntity {
  // 기본키로 입력이 없어도 값이 채워지는 컬럼
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;
}
