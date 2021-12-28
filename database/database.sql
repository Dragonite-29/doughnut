-- Put all of our SQL queries here 
-- URL: postgres://uriopwhg:OCX1frU-A_ry4hyeec1kgxLnOpJAcKnj@castor.db.elephantsql.com/uriopwhg
-- Host name/Address: castor.db.elephantsql.com (castor-01)
-- Maintenance database: 
-- Username: uriopwhg
-- PW: OCX1frU-A_ry4hyeec1kgxLnOpJAcKnj

CREATE TABLE USERS (
  "_id" serial PRIMARY KEY,
  "username" varchar NOT NULL,
  "password" varchar NOT NULL,
  "name_first" varchar NOT NULL,
  "name_last" varchar NOT NULL
);

CREATE TABLE SUBSCRIBERS (
  "_id" serial PRIMARY KEY,
  "user_id" serial references USERS (_id),
  "phone" varchar NOT NULL
);

CREATE TABLE JOB_TRACKER (
  "_id" serial PRIMARY KEY,
  "user_id" serial references USERS (_id),
  "company_name" varchar,
  "job_posting" varchar,
  "role" varchar,
  "date_submitted" varchar,
  "app_status" varchar,
  "notes" varchar
);

CREATE TABLE ALGO_PATTERNS (
  "_id" serial PRIMARY KEY,
  "user_id" serial references USERS (_id),
  "name" varchar,
  "notes" varchar,
  "percent_complete" varchar
);

CREATE TABLE ALGO_PROBLEMS (
  "_id" serial PRIMARY KEY,
  "user_id" serial references USERS (_id),
  "pattern_id" serial references ALGO_PATTERNS (_id),
  "name" varchar,
  "link" varchar,
  "difficulty" varchar,
  "date_completed" varchar,
  "notes" varchar
);





--Command to run our database.sql file
--psql -d <url from elephantSQL> -f database.sql
--psql -d postgres://uriopwhg:OCX1frU-A_ry4hyeec1kgxLnOpJAcKnj@castor.db.elephantsql.com/uriopwhg -f database/database.sql

/* 

***** EXAMPLE QUERIES ***** 

--USERS--
SELECT * FROM USERS
DELETE FROM USERS *
INSERT INTO USERS (username, password, name_first, name_last)
VALUES ('dragonite', 'password', 'Dragonite', 'Doughnut');

--SUBSCRIBERS--
INSERT INTO SUBSCRIBERS (user_id, phone)
VALUES ('2', '8881450894');

--JOB_TRACKER--
DROP TABLE JOB_TRACKER;
INSERT INTO JOB_TRACKER (user_id, company_name, job_posting, role, date_submitted, app_status, notes)
VALUES (2, 'Amazon', 'https://www.linkedin.com/jobs/view/software-development-engineer-at-amazon-2844220187/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic', 'Software Development Engineer', '2021-12-28', 'Applied', 'Dream Job');
DELETE FROM JOB_TRACKER WHERE _id > 1 

--ALGO_PATTERNS--
INSERT INTO ALGO_PATTERNS (user_id, name, notes, percent_complete)
VALUES (2, 'Two Pointer', 'Feeling Confident', '80%');

--ALGO_PROBLEMS--
INSERT INTO ALGO_PROBLEMS (user_id, pattern_id, name, link, difficulty, date_completed, notes)
VALUES (2, 1, 'Container with Most Water', 'https://leetcode.com/problems/container-with-most-water/', 'Medium', 'December 3rd 2021', 'Remember note about slanting container');

*/