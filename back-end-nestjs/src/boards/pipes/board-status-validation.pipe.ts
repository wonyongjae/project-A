import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../board.model';

// 커스텀 파이프 생성해서 사용
// board status 값을 변경하려 할 때, status를 검증하는 파이프 라인
export class BoardStatusValidationPipe implements PipeTransform {
  // board.status 에 담길 수 있는 값은 PUBLIC 또는 PRIVATE 이기 때문에
  // 두 값만 들어갈 수 있도록 제한하는 로직
  readonly StatusOptions = [BoardStatus.PUBLIC, BoardStatus.PRIVATE];

  transform(value: any) {
    // value 값을 대문자로 바꿔줌
    value = value.toUpperCase();

    // 먼저 value 가 위에 StatusOptions 중에서 선택된 건지 검증하는 메서드 isStatusValid 호출
    if (!this.isStatusValid(value)) {
      // -1, false 를 받았다면 value 값이 잘못되었다는 메세지 출력
      throw new BadRequestException(`${value} isn't in the status options.`);
    }
    return value;
  }

  private isStatusValid(status: any) {
    // status 값이 StatusOptions 안에 있는 값인지 체크
    // StatusOptions 배열 안에 있다면 indexOf 는 값을 정상적으로 리턴
    // 그렇지 않으면 -1 을 리턴
    const index = this.StatusOptions.indexOf(status);
    // index 에 할당된 값이 -1 이 아니라면 => true or false
    return index !== -1;
  }
}
