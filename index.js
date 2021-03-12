const connection = require('./config/connection');
const inquirer = require('inquirer');
// const create = require('./lib/create');
// const {createEmployee} = require('./config/inquirer');

connection.connect((err) => {
    if (err) throw err;
    init();
});

const init = function() {
    inquirer.prompt({
        name: 'menu',
        type: 'list',
        choices: [
            'Create Employee',
            'View Employees',
        ]
    })
    .then((res) => {
        switch (res.menu) {
            case ('Create Employee'):
               createEmployee();
                break;
            default: 
                console.log('Error');
                break;
        }
    });


    const createEmployee = () => 
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
      choices: [
        "Analyst",
        "Implementation Specialist",
        "Developer",
      ],
    },
    { type: "list",
      name: "manager",
      message: "Who is the Employees manager?",
      choices: [
        "Debbie Donovan",
        "Eileen Gregory",
        "Mark Smith",
      ],
}
])
    .then((res) => {
        console.log(res);
});


};
