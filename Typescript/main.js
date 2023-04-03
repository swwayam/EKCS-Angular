"use strict";
// Main topics 
exports.__esModule = true;
// 1. Data Types - 
// Number -> 1,2,434,2,2.51
// String -> "sflassjd" / 'sadfasd'
// Boolean -> true / false
// 17 > 18 -> Boolean 
// number = 1 // Number
// number = "one" // String
// Array's // Objects // Classes  || OOP's -> Object Oriented Programming
// Creating an object
// let emp1 = {
//     name: "Rahul",
//     empId: 1232,
//     booldGroup: "B"
// }
// // Accessing Objects values
// // emp1.name
// let emp2 = {
//     name: "Anoop",
//     empId: 1232322,
//     booldGroup: "A"
// }
// let emp3 = {
//     name: "Sudhir",
//     empId: 1112,
//     booldGroup: "A"
// }
// let emp4 = {
//     name: "Naushad",
//     empId: 12323,
//     booldGroup: "O"
// }
// To optimise this we use classes
var Employee = /** @class */ (function () {
    function Employee(name, empId, bloodGroup, postition) {
        this.name = name;
        this.empId = empId;
        this.bloodGroup = bloodGroup;
        this.position = postition;
    }
    Employee.prototype.login = function () {
        if (this.empId == 2) {
            return true;
        }
        return false;
    };
    return Employee;
}());
var emp1 = new Employee("Rahul", 1, "A", "Manager");
var emp2 = new Employee("Sudhir", 2, "AB", "Manager");
console.log(emp1.login());
