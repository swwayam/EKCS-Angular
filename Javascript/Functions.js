// function add(a , b ){
//     return a + b
// }

// add(10,11)

// // Arrow functions 

// const add = (a, b) => {
//     return a + b
// }

// add(2,4)

// Methods - toUpperCase, toLowerCase, split, join, push, pop, shift , unshift

// map , filter

let arr = ["annop", "sudhir", "rahul", "naushad"]

let newArr = []

for(let i = 0; i < arr.length; i++){
    let name = arr[i].split("")
    name.shift()
    name = name.join("")
    newArr.push(name);
}

console.log(newArr);

 
const newArr1 = arr.map((name) => {
    let temp = name.split("")
    temp.shift()
    return temp.join("")
})

console.log("new", newArr1)

var arr1 = [1,2,53,2,53,23,5,3]

let sum = 0;

//const arrnew = 
arr1.map((number) => {
    //return 
    sum += number;
})
//arrnew = [1,3,56]
console.log(sum);

// element // index // array
let values = [1,2,4,5,6,5,7,8,5,6] // new array should not 5 in it

const newValues = values.map(function(number) {
    if (number !== 5) {
        return number
    }

})

console.log(newValues);

// const newValues1 = values.filter(function(number){
//     return number !== 5
// })

// to simplify
const newValues1 = values.filter(number => number !== 5)

console.log(newValues1);


// Given an array of values [1,22,22,22,22,22,1,23,43,2,4,2]
// using map method multiply all the element with 5
// using map method count the number of times 1 and 2 are repeated
// using filter method remove all the 2's from the array.