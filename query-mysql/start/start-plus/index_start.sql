-- 테이블 생성 
CREATE TABLE index_tb (first_nm varchar(14), last_nm varchar(16), hire_dt date);

-- 위에 생성한 테이블에 데이터를 집어 넣을건데, 데이터는 employees에서 500개를 집어 넣는다.
INSERT INTO index_tb 
	SELECT first_name, last_name, hire_date 
	FROM employees.employees 
	LIMIT 500;

-- 500개의 데이터가 들어간 index 테이블 전체조
SELECT * FROM index_tb;

explain
SELECT  * FROM index_tb WHERE first_nm  = 'Mary';


-- index 테이블 생성 
CREATE INDEX idx_indextb_firstnm ON index_tb(first_nm);