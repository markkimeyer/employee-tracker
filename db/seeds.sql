INSERT INTO department (depid, dept_name) 
VALUES 
(1,'Support'),
(2,'Services'),
(3, 'QA & Development');


INSERT INTO role (roleid, title, salary, dept_id)
VALUES
(1, 'Support Analyst', 40000,1),
(2, 'Support Specialist', 50000,1)
(3, 'Implementation Specialist', 60000,2),
(4, 'Developer', 85000,3),
(5, 'Quality Assurance Analyst', 70000,3);

INSERT INTO employee (empid, first_name, last_name, role_id, manager_id)
VALUES 
(1, 'Markie', 'Mayer',1,2),
(2, 'Bri', 'Larken',2,2),
(3, 'Bob', 'Biggle',3,2),
(4, 'Clark', 'Buffalo', 4,2);