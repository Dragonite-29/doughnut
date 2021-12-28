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

*/