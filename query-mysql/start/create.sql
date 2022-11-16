-- 스키마 생성
CREATE SCHEMA model_db;

use model_db;

-- 테이블 생성
CREATE TABLE user_tb(
	user_nm char(4) not null,
	birth_yy INT,
	addr char(2),
	mobile CHAR(13)
);

CREATE TABLE buy_tb(
	user_nm char(4) not null,
	prod_nm char(4) not null,
	price INT,
	amount INT
);



commit;

rollback;