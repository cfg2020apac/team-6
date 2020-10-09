create database if not exists codeforgood;
use codeforgood;

drop table if exists account;

CREATE TABLE account (
    customerID INT AUTO_INCREMENT,
    username VARCHAR(128) NOT NULL UNIQUE,
    name VARCHAR(128) NOT NULL,
    password VARCHAR(128) NOT NULL,
    customer_email VARCHAR(128) NOT NULL UNIQUE,
    PRIMARY KEY (customerID)
);
INSERT INTO `account` (`username`, `name`, `password`, `customer_email`) 
VALUES 
('jeremyong', 'Jeremy Ong', 'password', 'jeremy@gmail.com');