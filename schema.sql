DROP DATABASE IF EXISTS test;

CREATE DATABASE test;

USE test;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(20) NOT NULL,
  balance int NOT NULL,
  sent int NOT NULL,
  received int NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

INSERT INTO users (username, balance) VALUES ('Airyque', 100, 0, 0);
INSERT INTO users (username, balance) VALUES ('Alex', 100, 0, 0);
INSERT INTO users (username, balance) VALUES ('Allen', 100, 0, 0);
INSERT INTO users (username, balance) VALUES ('Anna', 100, 0, 0);
INSERT INTO users (username, balance) VALUES ('Calvin', 100, 0, 0);
INSERT INTO users (username, balance) VALUES ('Daphne', 100, 0, 0);
INSERT INTO users (username, balance) VALUES ('David', 100, 0, 0);
INSERT INTO users (username, balance) VALUES ('Illya', 100, 0, 0);
INSERT INTO users (username, balance) VALUES ('Kenneth', 100, 0, 0);
INSERT INTO users (username, balance) VALUES ('Lam', 100, 0, 0);
INSERT INTO users (username, balance) VALUES ('Lara', 100, 0, 0);
INSERT INTO users (username, balance) VALUES ('Lory', 100, 0, 0);
INSERT INTO users (username, balance) VALUES ('Matt', 100, 0, 0);
INSERT INTO users (username, balance) VALUES ('Mishall', 100, 0, 0);
INSERT INTO users (username, balance) VALUES ('Mishula', 100, 0, 0);
INSERT INTO users (username, balance) VALUES ('Stephan', 100, 0, 0);
INSERT INTO users (username, balance) VALUES ('Thomas', 100, 0, 0);
INSERT INTO users (username, balance) VALUES ('Victor', 100, 0, 0);
INSERT INTO users (username, balance) VALUES ('Angel', 100, 0, 0);
INSERT INTO users (username, balance) VALUES ('Angela', 100, 0, 0);
INSERT INTO users (username, balance) VALUES ('Archana', 100, 0, 0);
INSERT INTO users (username, balance) VALUES ('Doug', 100, 0, 0);
INSERT INTO users (username, balance) VALUES ('Dustin', 100, 0, 0);
INSERT INTO users (username, balance) VALUES ('Gil', 100, 0, 0);
INSERT INTO users (username, balance) VALUES ('Hayden', 100, 0, 0);
INSERT INTO users (username, balance) VALUES ('Suhail', 100, 0, 0);
INSERT INTO users (username, balance) VALUES ('Tiffany', 100, 0, 0);