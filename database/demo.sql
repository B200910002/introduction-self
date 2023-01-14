DROP DATABASE IF EXISTS demo;
CREATE DATABASE IF NOT EXISTS demo
default character set utf8
collate utf8_general_ci;

show databases;
use demo;

select *from user;
select * from user_seq;

drop table user;
drop table user_seq;



