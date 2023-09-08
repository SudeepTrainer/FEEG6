// let fullname = "Elon Musk";
// let age = 45;
// let skills = ["Enterpreneur","Founder","Developer"];
// let country = "SA";

let elonObject = {
    // property:value
    fullname: "Elon Musk",
    age: 45,
    skills: ["Enterpreneur", "Founder", "Developer"],
    country: "SA"
}

console.log(elonObject.fullname);
console.log(elonObject.skills[2]);

//create an object ShoppingCart with few properties 

let product = {}
product.name = "Keyboard";
product.price = 12334;
console.log(product);

// product.getDetails = function(){
//     console.log(`Name: ${name}`);
//     console.log(`Price: ${price}`);
// }

// console.log(product.getDetails());

let person = {}
person.firstName = "Elon";
person.lastName = "Musk";
person.age = 23;
person.greet = function () {
    console.log(`HI this is ${this.firstName}`);
}
person.getFullName = function () {
    console.log(`First Name: ${this.firstName} Last Name: ${this.lastName}`);
}

person.getFullName()
person.greet()

// // function instantiation
// function Person(fname, lname, age) {
//     let person = {};
//     person.firstName = fname;
//     person.lastName = lname;
//     person.age = age;
//     person.greet = function () {
//         console.log(`HI this is ${this.firstName}`);
//     }
//     person.getFullName = function () {
//         console.log(`First Name: ${this.firstName} Last Name: ${this.lastName}`);
//     }
//     return person;
// }
// let elonPerson = Person("Elon", "Musk", 23);
// elonPerson.getFullName();
// let billPerson = Person("Bill", "Gates", 24);
// billPerson.greet();

let personMethods = {
    greet: function () {
        console.log(`HI this is ${this.firstName}`);
    },
    getFullName: function () {
        console.log(`First Name: ${this.firstName} Last Name: ${this.lastName}`);
    }
}
// function instantiation
function Person(fname, lname, age) {
    // let person = {};
    // let person = Object.create(Person.prototype);
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    // return person;
}

Person.prototype.greet = function () {
    console.log(`HI this is ${this.firstName}`);
}
Person.prototype.getFullName = function () {
    console.log(`First Name: ${this.firstName} Last Name: ${this.lastName}`);
}

let elonPerson = new Person("Elon", "Musk", 23);
elonPerson.getFullName();
let billPerson = new Person("Bill", "Gates", 24);
billPerson.greet();

let parent = {
    firstname: "Mark",
    lastName: "Zuck",
    country: "USA"
}

let child = Object.create(parent);
child.age = 12;

console.log(child.country);

//Object.create
let animalPrototype = {
    makeNoise() {
        console.log(`${this.name} making noise`);
    }
}

let animal = Object.create(animalPrototype);
animal.name = "Simba";
animal.makeNoise();

console.log(Array.prototype);
console.log(String.prototype);
console.log("mark".toUpperCase());
// let aStr = new String("Mark");
// let aStr1 = "Mark";
let anArray = [];
// let anArray1 = new Array();
anArray.push(3); // Array.prototype.push()

class Person1 {
    constructor(fname, lname, age) {
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
    }
    greet() {
        console.log(`HI this is ${this.firstName}`);
    }
    getFullName() {
        console.log(`First Name: ${this.firstName} Last Name: ${this.lastName}`);
    }
}