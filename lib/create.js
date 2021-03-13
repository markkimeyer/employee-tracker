const inquirer = require('inquirer');
const index = require('../index');
const connection = require('../config/connection');




//CREATE EMPLOYEE AND INSERT INTO TABLE
createEmployee = () => {
    const rolesQuery = 'SELECT roleid, title FROM role';
    const managersQuery = 'SELECT empid, first_name, last_name FROM employee';
    let roles = [];
    let managers = [];


    connection.query(rolesQuery, (err, res) => {
        if (err) throw err;
        roles = res.map(({ roleid, title }) => ({
            name: title,
            value: roleid,
        }));
        connection.query(managersQuery, (err, res) => {
            if (err) throw err;
            managers = res.map(({ empid, first_name, last_name }) => ({
                name: [first_name + ' ' + last_name],
                value: empid,
            }));
            addInquirer (roles, managers);
        });
    });
};

        //CREATE ROLES 
        let addInquirer = (roles, managers) => {
            inquirer.prompt(
                [
                    {
                        type: "input",
                        name: "first_name",
                        message: "What is employee's first name?",
                    },
                    {
                        type: "input",
                        name: "last_name",
                        message: "What is employee's last name?",
                    },
                    {
                        type: "list",
                        name: "role",
                        message: "What is employee's role?",
                        choices: roles,
                    },
                    {
                        type: "list",
                        name: "manager",
                        message: "Who is the Employees manager?",
                        choices: managers
                    }
                ])
                .then((res) => {
                    console.log(res);
                    connection.query(
                        'INSERT INTO employee SET ?',
                        {
                            first_name: res.first_name,
                            last_name: res.last_name,
                            role_id: res.role,
                            manager_id: res.manager
                        },
                        function (err, res) {
                            if (err) throw err;
                            console.log("Employee Inserted");
                        }
                        );
                    });
            };


            //CREATE DEPARTMENTS

            module.exports.createEmployee = createEmployee;
