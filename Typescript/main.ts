import { User } from "./interface";

// Main topics 

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

class Employee{
    name: string;
    empId: number;
    bloodGroup: string;
    position: string;

    constructor(name, empId, bloodGroup, postition){
        this.name = name;
        this.empId = empId;
        this.bloodGroup = bloodGroup;
        this.position = postition;
    }

    login(): boolean{
        if (this.empId == 1) {
            return true
        }
        return false
    }

}

const emp1 = new Employee("Rahul", 23432342345, "A", "Manager");


console.log(emp1.login());

// emp = [
//     {

//     },
//     {

//     }
// ]


const user : User ={
    name: "swayam",
    id: 1,
    email: "2@gmail.com"
}

class Animals{
    noOfLegs: number;
    name: string;
    isVeg: boolean;
    constructor(noOfLegs, name, isVeg){
        this.noOfLegs = noOfLegs;
        this.name = name;
        this.isVeg = isVeg;
    }
}

class Dog extends Animals{
    isPet: boolean;
    constructor( noOfLegs, name, isVeg, isPet){
        super(noOfLegs, name, isVeg)
        this.isPet = isPet;
    }
}

const animal = new Animals(4, "xyz", true);
const dog = new Dog(4, "xyz", true, true);


export {}