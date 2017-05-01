CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT(11) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(50) NOT NULL,
  devoured BOOL DEFAULT 0,
  date TIMESTAMP, 
  PRIMARY KEY (id)
);