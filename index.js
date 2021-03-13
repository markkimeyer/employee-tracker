const connection = require('./config/connection');
const inquirer = require('inquirer');
const create = require('./lib/create');
const update = require('./lib/update');
const view = require('./lib/read');


connection.connect((err) => {
    if (err) throw err;
    init();
});

const init = function () {
    inquirer.prompt({
        name: 'menu',
        type: 'list',
        choices: [
            'Create Employee',
            'View Employees',
            'View Roles',
            'View Departments',
            // 'Update Employee Role',
            // 'Delete Employee'
        ]
    })
        .then((res) => {
            switch (res.menu) {
                case ('Create Employee'):
                   create.createEmployee();
                    break;
                case ('Update Employee Role'):
                    update.updateEmployeeRole();
                    break;
                case ('View Employees'):
                    view.viewEmployeeRole();
                    break;
                default:
                    console.log('Error');
                    break;
            }
        });


            };

