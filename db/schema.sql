CREATE DATABASE entrees_db;
USE entrees_db;

CREATE TABLE entrees
(
id int NOT NULL AUTO_INCREMENT,
entree_name varchar(255),
devoured BOOLEAN default false,
`date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);