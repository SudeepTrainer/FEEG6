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

let markPerson = {
    firstName: "Mark",
    lastName: "Zuck",
    // fullname:function fullname(){
    //     console.log(`${this.firstName} ${this.lastName}`);
    // }
    // fullname:function (){
    //     console.log(`${this.firstName} ${this.lastName}`);
    // }
    fullname() {
        console.log(`${this.firstName} ${this.lastName}`);
    },
    hello() {
        console.log(`Hi ${this.firstName}`);
    }
}
console.log(markPerson.hello());

function Person(fname, lname, age) {
    let person = {};
    person.firstName = fname;
    person.lastName = lname;
    person.age = age;
    person.greet = function () {
        console.log(`HI this is ${this.firstName}`);
    }
    person.getFullName = function () {
        console.log(`Firstname:${this.firstName} LastName:${this.lastName}`);
    }
    return person;
}

let bill = Person("Bill", "Gates", 32);
console.log(bill);
console.log(bill.greet());
let elon = Person("Elon", "Musk", 25)
console.log(elon);
