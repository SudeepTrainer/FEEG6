let numbers = [12,20,4,50]
let reverseArray = numbers.reverse();
console.log(reverseArray);

let anotherArray = [20,10,34,24];
let reversedArray = anotherArray.toReversed();
console.log(reversedArray);
console.log(anotherArray);

let immutableReverseArray = [...anotherArray].reverse();
console.log(immutableReverseArray);
console.log(anotherArray)

anotherArray.push(12);
console.log(anotherArray);
anotherArray.pop();
console.log(anotherArray);

// let pushedNewElementArray = [...anotherArray].push(10);
let pushedNewElementArray = [...anotherArray,10];
console.log(pushedNewElementArray);
console.log(anotherArray);

// let mappedArray = numbers.map(function(item){
//     return item * 10;
// })
let mappedArray = numbers.map(item => item * 10);
console.log(numbers);
console.log(mappedArray);

let filteredArray = numbers.filter(item => item > 18);
console.log(numbers);
console.log(filteredArray);

let reducedArray = numbers.reduce((acc,num)=> acc + num);
console.log(numbers);
console.log(reducedArray);
