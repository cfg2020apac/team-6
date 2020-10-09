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
    caseManagerID INT Not NULL,
    name VARCHAR(128) NOT NULL,
    contact_number VARCHAR(20) NOT NULL,
    client_email VARCHAR(128) NOT NULL,
    marital_status VARCHAR(128) NOT NULL,
    employment_status VARCHAR(128) NOT NULL,
    income INT NOT NULL,
    disability VARCHAR(500) NOT NULL,
    race VARCHAR(128) NOT NULL,
    religion VARCHAR(128) NOT NULL,
    age INT NOT NULL,
    nationality VARCHAR(128) NOT NULL,
    allergies VARCHAR(500) NOT NULL,
    blood_type VARCHAR(500) NOT NULL,
    birth_date DATE NOT NULL,
    previous_conviction VARCHAR(500) NOT NULL,
    emergency_contact_name VARCHAR(128) NOT NULL,
    emergency_contact_number VARCHAR(20) NOT NULL,
    emergency_relation VARCHAR(128) NOT NULL,
    PRIMARY KEY (clientID)
);

INSERT INTO `client` (`caseManagerID`, `name`, `contact_number`, `client_email`, `marital_status`,`employment_status`,`income`,`disability`,`race`,`religion`, `age`,`nationality`,`allergies`,`blood_type`,`birth_date`,`previous_conviction`,`emergency_contact_name`,`emergency_contact_number`,`emergency_relation`)
VALUES 
(1, 'clientA', '91234567', 'clientA@gmail.com', 'Married', 'Unemployed', 0, 'NIL', 'Chinese', 'Christian','34','Singaporean','NA', 'A+', '1990-10-9', 'NA', 'Mary Tan', '90876543', 'Friend');


CREATE TABLE entry (
    entryID INT AUTO_INCREMENT,
    clientID INT Not NULL,
    stakeholderID INT NOT NULL,
    category VARCHAR(128) NOT NULL,
    status VARCHAR(128) NOT NULL,
    description VARCHAR(2000) NOT NULL,
    case_note VARCHAR(200) NULL,
    date DATETIME NOT NULL,
    PRIMARY KEY (entryID)
);

INSERT INTO `entry` (`clientID`, `stakeholderID`, `category`, `status`, `description`, `date`) 
VALUES 
(1, 2, 'Employment', 'Initial engagement with client completed', 'The client is keen in the F&B industry.', '2020-9-1 18:00'),
(1, 2, 'Housing', 'Client Eligible', 'The client is keen in staying in Chua Chu Kang area', '2020-9-2 18:00'),
(1, 2, 'Housing', 'Client approval pending supporting docs', 'Waiting for income statement', '2020-10-5 18:00'),
(1, 2, 'Counselling', 'Completed first session with notes emailed to Case Mgr', 'The client has a positive attitude', '2020-9-28 16:00'),
(1, 2, 'Counselling', '2nd Session Completed', 'The client is eager in improving', '2020-10-1 10:00')
;

