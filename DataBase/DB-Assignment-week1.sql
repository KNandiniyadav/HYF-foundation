--Count the tasks
SELECT COUNT(*) FROM  task;

--Count tasks without valid due dates
SELECT count(*) FROM task where due_date IS NULL;

--Done tasks
SELECT * FROM task where status_id =3;

--Tasks not done
SELECT * FROM task where status_id !=3;

--Tasks by creation date
SELECT * FROM task ORDER BY created DESC;

--Most recently created task
SELECT * FROM task ORDER BY created DESC LIMIT 1;

--Tasks mentioning database
SELECT title, due_date FROM task WHERE  title LIKE '%database%' OR description LIKE '%database%';

--Task titles and IDs
SELECT  id, title FROM  task ORDER by id ASC;

--Tasks in progress
SELECT id,title FROM task WHERE status_id= 2 ORDER BY id ASC;

--Tasks without due dates
SELECT id,title FROM task WHERE due_date IS NULL ORDER BY id ASC;

--Tasks alphabetically
SELECT id, title FROM task ORDER BY title ASC;

--Five highest task IDs
SELECT id,title FROM task ORDER BY id DESC LIMIT 5;

--Unassigned tasks
SELECT id,title FROM task WHERE user_id IS NULL ORDER BY id ASC;

--RENAME TASK
SELECT title FROM task WHERE id=1;
UPDATE task SET title='Wash the laundry' WHERE id=1;
SELECT title FROM task WHERE id=1;

--MARK A TEST DONE
SELECT status_id  FROM task where id=22;
UPDATE task set status_id = 3 WHERE id=22;
SELECT status_id FROM task where id=22;

--Assign an unassigned task
SELECT user_id FROM task WHERE id=23;
UPDATE task SET user_id = 11 WHERE id=23;
SELECT user_id FROM task WHERE id=23;

--Set unassigned task status
SELECT status_id from task WHERE user_id IS NULL;
UPDATE task set status_id = 1 WHERE user_id IS NULL;
SELECT status_id from task WHERE user_id IS NULL;

--Delete one task
SELECT * FROM task WHERE id=35;
DELETE FROM task WHERE id=35;
SELECT * FROM task WHERE id=35;

--Remove one task tag
SELECT * FROM task_tag;
DELETE FROM task_tag WHERE task_id = 1 AND tag_id = 2;
SELECT * FROM task_tag;

--Create task notes table
CREATE TABLE task_note(id INTEGER PRIMARY KEY, task_id INTEGER NOT NULL, note TEXT NOT NULL, FOREIGN KEY (task_id) REFERENCES task(id));
SELECT * FROM task_note;