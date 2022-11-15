use shopdb;

-- test record insert
INSERT INTO member_tb VALUES ('salmon', '연어', '노르웨이');

-- 잘 들어갔는지 확인 
SELECT * FROM member_tb;

-- 심심하니까 한번 수정 
UPDATE member_tb SET member_addr = '일본' WHERE member_nm = '연어';

-- 수정 확인 
SELECT * FROM member_tb;

-- 재미없으니까 걍 삭제 
DELETE FROM member_tb WHERE member_nm = '연어';

-- 삭제 확인 
SELECT * FROM member_tb;

-- 삭제 데이터 트리거로 입력시킬 테이블 생성 
CREATE TABLE deleted_memeber_tb (
	member_id char(8),
	member_nm char(5),
	member_addr char(20),
	deleted_dt date
);

-- trigger create 
DELIMITER $$
-- DROP PROCEDURE IF EXISTS myProc$$
CREATE TRIGGER trg_deleted_member_tb
	AFTER DELETE -- 삭제 후에 실행될 것이기 때문에 명시 (이벤트 발생 시점)
	ON member_tb -- 대상 테이블 또는 (이벤트 발생 대상)
	FOR EACH ROW -- 각 행마다 적용 
BEGIN
	-- OLD : 예약 
	-- OLD 테이블의 내용을 백업 테이블에 삽입
	INSERT INTO deleted_memeber_tb VALUES (
		OLD.member_id,
		OLD.member_nm,
		OLD.member_addr,
		CURDATE()
	);
END $$
DELIMITER ;

-- 삭제 하기 전 확인 
SELECT * FROM member_tb;

-- 삭제 
DELETE FROM member_tb WHERE member_nm = '당탕이';

-- 삭제 트리거 결과 확인 
SELECT * FROM deleted_memeber_tb;

commit;
