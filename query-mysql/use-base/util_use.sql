use sys;

use employees;

SELECT
	*
FROM
	titles
ORDER BY
	to_date DESC
LIMIT      -- 조회 데이터 갯수 제한 
	0, 10;
	
-- AND 각종 설정 및 유틸 활용 

SELECT * FROM employees WHERE first_name = 'Mary';