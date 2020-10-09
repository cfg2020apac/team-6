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


CREATE TABLE client (
    clientID INT AUTO_INCREMENT,
    customerID INT Not NULL,
    name VARCHAR(128) NOT NULL,
    contact_number VARCHAR(8) NOT NULL,
    client_email VARCHAR(128) NOT NULL UNIQUE,
    PRIMARY KEY (clientID)
);

INSERT INTO `client` (`customerID`, `name`, `contact_number`, `client_email`) 
VALUES 
(1, 'clientA', '91234567', 'clientA@gmail.com');