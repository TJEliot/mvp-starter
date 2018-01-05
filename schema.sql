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

INSERT INTO users (id, username, balance, sent, received) VALUES (null, 'Airyque', 100, 0, 0);
INSERT INTO users (username, balance, sent, received) VALUES ('Alex', 100, 0, 0);
INSERT INTO users (id, username, balance, sent, received) VALUES (null, 'Allen', 100, 0, 0);
INSERT INTO users (id, username, balance, sent, received) VALUES (null, 'Anna', 100, 0, 0);
INSERT INTO users (id, username, balance, sent, received) VALUES (null, 'Calvin', 100, 0, 0);
INSERT INTO users (id, username, balance, sent, received) VALUES (null, 'Daphne', 100, 0, 0);
INSERT INTO users (id, username, balance, sent, received) VALUES (null, 'David', 100, 0, 0);
INSERT INTO users (id, username, balance, sent, received) VALUES (null, 'Illya', 100, 0, 0);
INSERT INTO users (id, username, balance, sent, received) VALUES (null, 'Kenneth', 100, 0, 0);
INSERT INTO users (id, username, balance, sent, received) VALUES (null, 'Lam', 100, 0, 0);
INSERT INTO users (id, username, balance, sent, received) VALUES (null, 'Lara', 100, 0, 0);
INSERT INTO users (id, username, balance, sent, received) VALUES (null, 'Lory', 100, 0, 0);
INSERT INTO users (id, username, balance, sent, received) VALUES (null, 'Matt', 100, 0, 0);
INSERT INTO users (id, username, balance, sent, received) VALUES (null, 'Mishall', 100, 0, 0);
INSERT INTO users (id, username, balance, sent, received) VALUES (null, 'Mishula', 100, 0, 0);
INSERT INTO users (id, username, balance, sent, received) VALUES (null, 'Stephan', 100, 0, 0);
INSERT INTO users (id, username, balance, sent, received) VALUES (null, 'Thomas', 100, 0, 0);
INSERT INTO users (username, balance, sent, received) VALUES ('Victor', 100, 0, 0);
INSERT INTO users (username, balance, sent, received) VALUES ('Angel', 100, 0, 0);
INSERT INTO users (username, balance, sent, received) VALUES ('Angela', 100, 0, 0);
INSERT INTO users (username, balance, sent, received) VALUES ('Archana', 100, 0, 0);
INSERT INTO users (username, balance, sent, received) VALUES ('Doug', 100, 0, 0);
INSERT INTO users (username, balance, sent, received) VALUES ('Dustin', 100, 0, 0);
INSERT INTO users (username, balance, sent, received) VALUES ('Gil', 100, 0, 0);
INSERT INTO users (username, balance, sent, received) VALUES ('Hayden', 100, 0, 0);
INSERT INTO users (username, balance, sent, received) VALUES ('Suhail', 100, 0, 0);
INSERT INTO users (username, balance, sent, received) VALUES ('Tiffany', 100, 0, 0);