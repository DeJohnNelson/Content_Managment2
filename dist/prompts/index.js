"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.departmentPrompt = departmentPrompt;
const inquirer_1 = __importDefault(require("inquirer"));
function departmentPrompt() {
    return __awaiter(this, void 0, void 0, function* () {
        const { department } = yield inquirer_1.default.prompt({
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
            ]
        });
        return department;
    });
}
departmentPrompt();
