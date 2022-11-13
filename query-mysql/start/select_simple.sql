-- 사용할 DB 선택 
use shopdb;

SELECT * FROM member_tb;

SELECT member_nm, member_addr FROM member_tb;

SELECT * FROM member_tb WHERE member_nm = '상달이';

-- ? 갑자기?
CREATE TABLE my_tb(id int);