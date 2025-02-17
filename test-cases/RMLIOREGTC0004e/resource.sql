USE test;
DROP TABLE IF EXISTS test.Person;

CREATE TABLE Person (
ID integer,
Name varchar(50),
DateOfBirth varchar(50),
PRIMARY KEY (ID)
);
INSERT INTO Person (ID, Name, DateOfBirth) VALUES (1,'Alice', 'September, 2021');
INSERT INTO Person (ID, Name, DateOfBirth) VALUES (2,'Bob', 'September, 2010');

