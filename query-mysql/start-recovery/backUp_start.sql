use shopdb;

-- 백업받을 데이터 확인 ! 
SELECT * FROM product_tb;

-- 스키마 우클릭 -> 도구 -> drump database -> 스키마 & 테이블 선택 -> 다음 & start

-- 덤프를 받은 뒤에 백업을 실행하기 위해 테이브 삭제 
DELETE FROM product_tb;

-- 이후 백업을 위해선 다른 스키마로 옮겨야 됨
-- 백업받을 스키마가 연결되어 있으면 실행 X
use sys;

-- 스키마 우클릭 -> 도구 -> restore database -> 백업받은 sql 파일 선택 -> start

use shopdb;

SELECT * FROM product_tb;