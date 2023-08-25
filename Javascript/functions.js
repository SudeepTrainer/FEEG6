function add(a,b){
    // let a = 10;
    // let b = 20;
    return (a+b);
}

console.log(add(4,5));

// functions are first class citizens

// function expression

// let product = function multiply(a,b){
//     return a * b;
// }

// console.log(product(4,5));
// console.log(multiply(4,5));

//anomymous function
// let product = function (a,b){
//     return a * b;
// }
// console.log(product(4,5));

let sum = function (a,b){
    return a + b;
}
console.log(sum(40,5));

// Arrow function

// let square = function square(a){
//     return a * a;
// }
// console.log(square(5));
// Step 1: make it an anonymous function
// let square = function(a){
//     return a * a;
// }
// console.log(square(5));
// Step 2: Remove the function keyword and add =>
// let square = (a) =>{
//     return a * a;
// }
// console.log(square(5));
// Step 3: Remove the return keyword and curly braces
//          only if there is just the return statement
// let square = (a) => a * a;
// Step 4: Remove the paranthesis if there is a single parameter
let square = a => a * a;
console.log(square(5));
// function square(a){
//     return a * a;
// }
// let product = function (a,b){
//     return a * b;
// }
// console.log(product(4,5));

// let product = (a,b) =>{
//     return a * b;
// }
// console.log(product(4,5));
let product = (a,b) =>a * b;
console.log(product(4,5));

let makeAPerson =  (name,age,gender) =>({name:name,age:age,gender:gender})

console.log(makeAPerson("Mark","21","male"));