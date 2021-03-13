const inquirer = require('inquirer');
const connection = require('../config/connection');
const index = require('../index')


const viewEmployeeRole = () => {
connection.query(`SELECT * FROM employee`, function(err, res) {
    if (err) throw err;
    console.table(res);
});
}

const viewEmployeeRoleByRole = () => {
    connection.query(`SELECT * FROM role`, function(err, res) {
        if (err) throw err;
        console.table(res);
    });
    }

    const viewEmployeeRoleByDept = () => {
        connection.query(`SELECT * FROM role`, function(err, res) {
            if (err) throw err;
            console.table(res);
        });
        }

module.exports.viewEmployeeRole = viewEmployeeRole;