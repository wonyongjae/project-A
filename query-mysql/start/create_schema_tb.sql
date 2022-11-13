CREATE SCHEMA shopdb;

CREATE TABLE shopdb.member_tb(
	member_id char(8) not null,
	member_nm char(5) not null,
	member_addr char(20),
	PRIMARY KEY(member_id)
);

CREATE TABLE shopdb.product_tb(
	product_nm char(4) not null,
	cost int not null,
	make_dt date,
	company char(5),
	amount int not null,
	PRIMARY KEY(product_nm)
);



commit;

rollback;