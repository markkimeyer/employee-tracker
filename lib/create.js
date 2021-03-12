const inquirer = require('inquirer');
const index = require('../index');
const connection = require('../config/connection');




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



    module.exports = createEmployee();


