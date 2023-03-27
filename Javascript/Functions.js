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

console.log("new", newArr1);