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






--Command to run our database.sql file
--psql -d <url from elephantSQL> -f database.sql
--psql -d postgres://uriopwhg:OCX1frU-A_ry4hyeec1kgxLnOpJAcKnj@castor.db.elephantsql.com/uriopwhg -f database/database.sql


--USEFUL QUERIES. DELETE BEFORE MERGE

--SELECT * FROM USERS

--INSERT INTO USERS (username, password, name_first, name_last)
--VALUES ('testUser', 'hty', 'First', 'Last');