DROP DATABASE if exists company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
    depid INT AUTO_INCREMENT NOT NULL,
    dept_name VARCHAR(30) NOT NULL,
    PRIMARY KEY(depid)
);

CREATE TABLE role(
    roleid INT AUTO_INCREMENT,
    title VARCHAR(30),
    salary DEC (10,2),
    dept_id INT,
PRIMARY KEY (roleid),
FOREIGN KEY (dept_id) REFERENCES department(depid)
);

CREATE TABLE employee(
    empid INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY (empid),
    FOREIGN KEY (role_id) REFERENCES role(roleid)
);
