console.log("Testing");
// String Number Boolean Null Undefined Object Symbol

//String data type

var firstName = "Mark";
var age = 10;

// ES6 2015  --> major release

let fname = "Mark";
let lname = "Zuck";
const country = "USA";
// console.log(country);
// country = "INDIA"
// console.log(country);
// var is global scoped
// let and const is block scoped

for (var i = 0; i < 10; i++) {
    // console.log(i);
}

console.log(i);

for (let j = 0; j < 10; j++) {
    // console.log(j);
}
// console.log(j);

let msg1 = 'Your\'s truly';
let msg2 = "This is a \"quote\"";
let msg3 = `Your's truly.This is a "quote"`;

let msg4 = `${2 + 3}kg`;
let myName = "FirstName:" + " " + firstName + "LastName:" + " "
    + lname;
let fullname = `FirstName: ${firstName.toUpperCase()} 
LastName: ${lname}`;
console.log(fullname);

//Numbers
let age1 = 10;
let price = 12.23;
console.log(100 ** 1000);
console.log(Math.pow(100, 1000));
console.log(1 / 0);
console.log(-1 / 0);
console.log(0 / 0);
console.log(1 / "Mark");
console.log(Math.floor(2.3456));
console.log(Math.ceil(2.3456));
console.log("2" + 2);
console.log(parseInt("2"));
console.log(parseInt("2.1234"));
console.log(parseFloat("2.1234"));
console.log(parseFloat("2.1234").toFixed(2));

// Boolean

let flag = false;
let isAdult = age > 17;

console.log(10 == 10);
console.log("10" == 10);
console.log("10" == "10");

console.log(10 === 10);
console.log("10" === 10);
console.log("10" === "10");

// undefined and null

let aVar;
console.log(aVar);

var anotherVar = null;
console.log(anotherVar);

let myFirstName = "Sudeep";
let myLastName = "Jha";

myLastName = null;
