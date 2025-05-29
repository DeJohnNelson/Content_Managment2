import inquirer from "inquirer";

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
departmentPrompt()