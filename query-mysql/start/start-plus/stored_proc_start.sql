-- before proc
SELECT * FROM shopdb.member_tb WHERE member_nm = '당탕이';
SELECT * FROM shopdb.product_tb WHERE product_nm = '냉장고';

commit;

-- 위 조회문을 실행하는 proc
DELIMITER $$
-- DROP PROCEDURE IF EXISTS myProc$$
CREATE PROCEDURE myProc()
BEGIN
	SELECT * FROM shopdb.member_tb WHERE member_nm = '당탕이';
	SELECT * FROM shopdb.product_tb WHERE product_nm = '냉장고';
END $$
DELIMITER ;

-- proc 호출
CALL myProc();