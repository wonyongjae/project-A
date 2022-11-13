
-- member
INSERT INTO shopdb.member_tb(member_id, member_nm, member_addr)VALUES('wyj', '원용재', '전라북도 익산시 영등동');
INSERT INTO shopdb.member_tb(member_id, member_nm, member_addr)VALUES('Dang', '당탕이', '경기도 부천시 중동');
INSERT INTO shopdb.member_tb(member_id, member_nm, member_addr)VALUES('Jee', '지훈이', '서울 은평구 중산도');
INSERT INTO shopdb.member_tb(member_id, member_nm, member_addr)VALUES('Han', '한주연', '인천 남구 주안동');
INSERT INTO shopdb.member_tb(member_id, member_nm, member_addr)VALUES('Sang', '상달이', '경기도 성남시 분당구');

rollback;

commit;

--product
INSERT INTO shopdb.product_tb(product_nm, cost, make_dt, company, amount) VALUES('냉장고', 5, '2023-02-01', '대우', 22);
INSERT INTO shopdb.product_tb(product_nm, cost, make_dt, company, amount) VALUES('세탁기', 20, '2022-09-01', 'LG', 3);
INSERT INTO shopdb.product_tb(product_nm, cost, make_dt, company, amount) VALUES('컴퓨터', 10, '2020-01-01', '삼성', 17);
