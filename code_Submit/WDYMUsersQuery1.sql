DROP DATABASE IF EXISTS WDYMUsers;

CREATE DATABASE WDYMUsers;

USE WDYMUsers;

CREATE TABLE Login(
	userID INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);

INSERT INTO Login(username, password)
	VALUES ('Puneet','Cheema'),
			('Rupali', 'Bahl'),
            ('Nicole', 'Su');
