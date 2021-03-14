const connection = require('./config/connection');
const inquirer = require('inquirer');
const create = require('./lib/create');
// const update = require('./lib/update');
const view = require('./lib/read');


connection.connect((err) => {
    if (err) throw err;
    init();
});

const init = () => {
    inquirer.prompt({
        name: 'menu',
        type: 'list',
        choices: [
            'Add Employee',
            'Add Role',
            'Add Department',
            'View Employees',
            'View Roles',
            'View Departments',
            // 'Update Employee Role',
            // 'Delete Employee'
        ]
    })
        .then((res) => {
            switch (res.menu) {
                case ('Add Employee'):
                   create.createEmployee();
                //    setTimeout(init, 1000);
                    break;
                case ('Add Role'):
                     create.addRole();
                    //  setTimeout(init, 2000)
                    break;
                 case ('Add Department'):
                    create.addDept();
                       //  setTimeout(init, 2000)
                       break;
                case ('View Employees'):
                    view.viewEmployeeRole();
                    setTimeout(init, 2000);
                    break;
                case ('View Roles'):
                    view.viewEmployeeRoleByRole();
                    setTimeout(init, 2000);
                    break;
                case ('View Departments'):
                    view.viewEmployeeRoleByDept();
                    setTimeout(init, 2000);
                    break;
                default:
                    console.log('Error');
                    break;
            }
        });


            };

