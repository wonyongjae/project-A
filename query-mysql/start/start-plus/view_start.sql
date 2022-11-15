-- view 만들기 전에 테이블 확인 
SELECT member_id, member_addr FROM member_tb;
SELECT * FROM member_tb;

-- view 생성 
CREATE VIEW uv_membertb
	AS 
	SELECT member_id, member_addr FROM member_tb;

-- view 조회 
SELECT * FROM uv_membertb;