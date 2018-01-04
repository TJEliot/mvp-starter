DROP DATABASE IF EXISTS test;

CREATE DATABASE test;

USE test;

CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(20) NOT NULL,
  balance int NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
