SELECT COUNT(*) FROM  task;

SELECT count(*) FROM task where due_date IS NULL;

SELECT * FROM task where status_id =3;

SELECT * FROM task where status_id !=3;

SELECT * FROM task ORDER BY created DESC;

SELECT * FROM task ORDER BY created DESC LIMIT 1;

SELECT title, due_date FROM task WHERE  title LIKE '%database%' OR description LIKE '%database%';

SELECT  id, title FROM  task ORDER by id ASC;

SELECT id,title FROM task WHERE status_id= 2 ORDER BY id ASC;

SELECT id,title FROM task WHERE due_date IS NULL ORDER BY id ASC;

SELECT id, title FROM task ORDER BY title ASC;

SELECT id,title FROM task ORDER BY id DESC LIMIT 5;

SELECT id,title FROM task WHERE user_id IS NULL ORDER BY id ASC;

SELECT title FROM task WHERE id=1;
UPDATE task SET title='Wash the laundry' WHERE id=1;
SELECT title FROM task WHERE id=1;

SELECT status_id  FROM task where id=22;
UPDATE task set status_id = 3 WHERE id=22;
SELECT status_id FROM task where id=22;

SELECT user_id FROM task WHERE id=23;
UPDATE task SET user_id = 11 WHERE id=23;
SELECT user_id FROM task WHERE id=23;

SELECT status_id from task WHERE user_id IS NULL;
UPDATE task set status_id = 1 WHERE user_id IS NULL;
SELECT status_id from task WHERE user_id IS NULL;

SELECT * FROM task WHERE id=35;
DELETE FROM task WHERE id=35;
SELECT * FROM task WHERE id=35;

SELECT * FROM task_tag;
DELETE FROM task_tag WHERE task_id = 1 AND tag_id = 2;
SELECT * FROM task_tag;

CREATE TABLE task_note(id INTEGER PRIMARY KEY, task_id INTEGER NOT NULL, note TEXT NOT NULL, FOREIGN KEY (task_id) REFERENCES task(id));
SELECT * FROM task_note;