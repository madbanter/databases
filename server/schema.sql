CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */

CREATE TABLE rooms (
  /* Describe your table here.*/
  id int AUTO_INCREMENT,
  name text NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  /* Describe your table here.*/
  id int AUTO_INCREMENT,
  name text NOT NULL,
  isFriend BOOL DEFAULT 0,
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  /* Describe your table here. */
  id int AUTO_INCREMENT,
  text text NOT NULL,
  user_id int,
  room_id int,
  createdAt datetime,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (room_id) REFERENCES rooms(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

