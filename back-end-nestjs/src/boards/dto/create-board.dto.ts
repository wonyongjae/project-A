import { IsNotEmpty } from 'class-validator';

export class CreateBoardDto {
  // 해당 프로퍼티값에 대한 validator를 지정
  // 핸들러나 파라미터에서 UsePipes 데코레이터를 붙여주면 validator가 지정된 프로퍼티에 대한 검증을 수행
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
