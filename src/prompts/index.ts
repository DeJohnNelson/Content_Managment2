import inquirer from "inquirer";
import { Pool } from "pg";

const pool = new Pool({
});
export async function departmentPrompt(){
  const { department } = await inquirer.prompt({
    type: "list",
    name: "department",
    message: "What would you like to do?",
    choices: [
      "View all Employees",
      "Add Employee",
      "Update Employee Role",
      "View all Roles",
      "Add Role",
      "View all Departments",
      "Add Department",
      "Quit"
  ]});
  return department;
}
function loadPrompts() {
  inquirer.prompt({
    type: "list",
    name: "choice",
    message: "What would you like to do?",
    choices: [
      {
        name: "View all Employees",
        value: "view_employees"
      },
      {
        name: "Add Employee",
        value: "add_employee"
      },
      {
        name: "Update Employee Role",
        value: "update_employee_role"
      },
      {
        name: "View all Roles",
        value: "view_roles"
      },
      {
        name: "Add Role",
        value: "add_role"
      },
      {
        name: "View all Departments",
        value: "view_departments"
      },
      {
        name: "Add Department",
        value: "add_department"
      },
      {
        name: "Quit",
        value: "quit"
      }
    ]
  }).then((answers) => {
    const choice = answers.choice
    if (choice === "view_employees") {
      // Call the function to view all employees
      viewAllEmployees();
    }
  })
}


departmentPrompt()

function viewAllEmployees(){
pool.query("SELECT * FROM employee", (err, res) => {
  if (err) {
    console.log("err");
    return;
  }
  console.table(res.rows);
});
}