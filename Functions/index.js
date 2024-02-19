//FUNCTIONS>>>>>>>>>>>>>

// Rest parameters

// function mulAll(...args){
//   let sum = 0;

//   for(let arg of args) sum * arg;

//   return sum;

// }

// console.log(mulAll(1,2))
// console.log(mulAll(1,2,3))
// console.log(mulAll(1,2,3,4))
// console.log(mulAll(1,2,3,4,5))

//---------------------------------------------------------------------------------------

// function showName(firstName, lastName, ...titles){
//   console.log(firstName + ' ' + lastName);

// console.log(titles[0])
// console.log(titles[1])
// console.log(titles.length)
// }
//  showName ("Vishal", "Pandey", "Ashutosh", "Mohit")

//---------------------------------------------------------------------------------------

// function showAnimal(firstAnimal, secondAnimal, ...allAnimals){
//   console.log("The firstAnimal is " + firstAnimal + " & the secondAnimal is " + secondAnimal)

//   console.log(allAnimals)
//   console.log(allAnimals[0])
//   console.log(allAnimals[1])
//   console.log(allAnimals[2])
//   console.log(allAnimals[3])
//   console.log(allAnimals.length)
// }

// showAnimal("Lion", "Tiger", "Elephant", "Giraf", "Dog", "Cow", "Buffelo")

// Spread Syntax>>>>>>>>>>

// console.log(Math.max(1,2,3,4,5,6,70,8,9)) // returns the greatest number from list.

// e.g

// let arr = [1,2,3,4,5,6,7,8,9,10];

// console.log(Math.max(arr)); // this gives "NaN"

// let arr = [1,2,3,4,5,6,7,8,9,10]

// console.log(Math.max(...arr)) // here we use spreat operator.

// we can also pass multiple iterables.

// let arr1 = [1,5,7,6,8]
// let arr2 = [2,3,4,9]

// console.log(Math.max(...arr1, ...arr2))

// we can even combine the spread syntax with normal values

// let arr1 = [1,5,7,6,8]
// let arr2 = [2,3,4,9]

// console.log(Math.max(0, ...arr1, 25, ...arr2))  // output is 25 (the normal value.)

// Also the spread syntax can be used to  merge arrays.

// let arr1 = [1, 5, 7, 6, 8];
// let arr2 = [2, 3, 4, 9];

// let merged = [0, ...arr1, 10, ...arr2];

// console.log(merged);

//use the spread syntax to turn the string into array of characters

// let str = "Hello";

// console.log([...str]);

//--------------------------------------------------------------------------------------

// function sayHiBye(firstName, lastName) {
//   function getFullName() {
//     return firstName + " " + lastName;
//   }

//   console.log("hello" + " " + getFullName());
//   console.log("Goodbye" + " " + getFullName());
// }
//  sayHiBye("Vishal", "Pandey")

// e..g.same-->>>>>

// function sayHiBye(firstName, lastName) {
//   function getFullName() {
//     return firstName + " " + lastName;
//   }

//   console.log("Hiii" + " " + getFullName());
//   console.log("Byeee" + " " + getFullName());
// }
//  sayHiBye("Mohit", "Pandey");

//--------------------------------------------------------------------------------------

//Below, makeCounter creates the “counter” function that returns the next number on each invocation:

// function makeCounter(){
//   let count = 0;

//   return function(){
//     return count++
//   }
// };

// let counter = makeCounter();

// console.log( counter())
// console.log( counter())
// console.log( counter())

//------------------------------------------------------------------------

// write a function sum that works like sum(a)(b) = a+b.

// function sum(a){
//   return function(b){
//     return  a + b;
//   }
// }

// console.log(sum(4)(5));
// console.log(sum(3)(5));

//------------------------------------------------------------------------

// Task ------ filter values between given value.

// function inBetween(a, b) {
//   return function (x) {
//     return x >= a && x <= b;
//   };
// }

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr1.filter(inBetween(2, 8)));

//------------------------------------------------------------------------------

// get the similar value given by you

// function inArray(arr) {
//   return function (x) {
//     return arr.includes(x);
//   };
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.filter(inArray([1, 2, 5, 55])));

//----------------------------------------------------------------------------------

// setTimeout / setInterval

// setTimeout :

// function sayHi(){
//   console.log("Hello Vishal")
// }

// setTimeout(sayHi, 4000);

// with arguments>>>>>>>>>>>>>

// function sayHi(phrase, who){
//   console.log(phrase + ", " + who)

// }

// setTimeout(sayHi, 2000, "Hello", "Aashutosh")

// setInterval

// let timerId = setInterval(() => console.log("tick", 2000));
// setTimeout(() => {
//   clearInterval(timerId);
//   console.log("stop");
// }, 5000);


