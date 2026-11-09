select name,phone from user;
select * from user order by name asc;
select name from user where id = 10;
select * from task order by created asc limit 3;
select * from task where description is null;
select * from user where email like '%.com';
select title from task where status_id = 1;
select * from task where status_id = 2 and user_id = 1;
select * from task where title like '%database%';
select name from user where phone is null;
SELECT title, created from task order by created desc limit 5;
SELECT * from task where status_id = 1 or status_id =2 order by title;

-------------------------------------------------------------------------------
select * from task where id = 1;
UPDATE task set status_id = 3 where id =1;
SELECT *
FROM task
WHERE id = 1;

select * from task where id=2;
update task set description = "How to become a billionaire" where id = 2;
select * from task where id=2;

select * from task where id=3;
update task set title = 'Practice' where id=3;
select * from task where id=3;

select * from task where id=4;
update task set due_date = '2031-01-15' where id=4;
select * from task where id=4;

select * from user where id=1;
update user set phone = 123456 where id=1;
select * from user where id=1;

select * from tag where id=1;
update tag set name = 'practice' where id=1;
select * from tag where id=1;

----------------------------------------------------------------------

select * from task;
insert into task (title, created,updated, status_id,user_id) VALUES ('Practice 1: Read SQL','2026-11-08', '2026-11-09', 1, 1);
select * from task where title = 'Practice 1: Read SQL';

select * from task;
insert into task (title, created,updated, status_id,user_id) VALUES ('Practice 2: write queries','2026-11-08', '2026-11-09', 1, 1);
select * from task where title like 'Practice 2%';

select * from task;
insert into task (title, created,updated, status_id,user_id) VALUES ('Practice 3: review results','2026-11-08', '2026-11-09', 1, 1);
select * from task where title like 'Practice 3%';

select * from task;
insert into task (title, created,updated, status_id,user_id) VALUES ('Practice 4: plan a project','2026-11-08', '2026-11-09', 1, 1);
select * from task where title like 'Practice  4%';

select * from user;
insert into user (name,email) values('Bob', 'bob@gmail.com');
select * from user where name='Bob';

select * from tag;
insert into tag (name) values('School');
select * from tag;

--------------------------------------------------------------------------------------

select * from task where title like 'Practice 1%';
DELETE from task where title like 'Practice 1%';
SELECT * from task where title like 'Practice 1%';


SELECT * from user where name = 'Bob';
DELETE from user where name = 'Bob';
select * from user where name = 'Bob';

select * from tag where name = 'School';
DELETE from tag where name = 'School';
select * from tag where name = 'School';

--------------------------------------------------------------------------------
select * from user;
insert into user (name,email,phone) VALUES ('Jack', 'jack03@gmail.com', '33914239');
select * from user;


select id from user where name = 'Jack';


select * from task;
insert into task (title, created, updated, status_id, user_id) values('Learn SQL', '2019-07-09', '2020-09-01', 3, 13);
select * from task where user_id = 13;

select * from task;
insert into task (title, created, updated, status_id, user_id) values('Learn JavaScript', '2019-07-09', '2020-09-01', 3, 13);
select * from task where user_id = 13;

select * from task;
insert into task (title, created, updated, status_id, user_id) values('Learn HTML & CSS', '2019-07-09', '2020-09-01', 3, 13);
select * from task where user_id = 13;

update task set status_id= 2 where user_id=13;
select * from task where user_id=13;

delete from task where title = 'Learn JavaScript';
select * from task where title = 'Learn JavaScript';

create table practice_book (id integer PRIMARY KEY, title text NOT NULL , author text);
select * from practice_book;
insert into practice_book(title, author) values('Harry Potter', 'JK Rowling');
insert into practice_book(title, author) values('you vs World', 'Bear gryls');
select * from practice_book;