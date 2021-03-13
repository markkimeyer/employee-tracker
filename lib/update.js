//UPDATE EMPLOYEE ROLE AND TABLE
const inquirer = require('inquirer');
const connection = require('../config/connection');
const index = require('../index')


const updateEmployeeRole = () => {
    const avail_emp = [];

connection.query(`SELECT empid, first_name, last_name, role FROM employee`, function(err, res) {
    if (err) throw err;
    console.table(res);
    //could maybe make variables and push into the array
    //or use MAP/FILTER

    
    // console.log(res);
    


//   inquirer.prompt({
                 
//                     type: "list",
//                     name: "current_employees",
//                     message: "Which Employee needs to change roles?",
//                     choices: 
//                     [
//                         avail_emp
//                     ]
    });
  

        
}
    




    // .then((res) => {
    //     inquirer.prompt(
    //         [
    //             {
    //                 type: "list",
    //                 name: "new_role",
    //                 message: "What is the employee's new role?",
    //                 choices:
    //                     [
    //                         "Analyst",
    //                         "Implementation Specialist",
    //                         "Developer",
    //                     ],
    //             }
    //         ])
        // console.log("The new role is " + res.new_role);
    






        // update part
        connection.query(
            'UPDATE employee SET ? WHERE ?'),
        {
            role: res.new_role,
        },
            {
                first_name: res.first_name,
                last_name: res.last_name,
            },
            function (err, res) {
                if (err) throw err;
            }
    
    // );


// });
    
        module.exports.updateEmployeeRole = updateEmployeeRole;