// Introduction to ARRAY
// how to create array

// let fruit = ["Apple"]
// console.log(fruit)

// let fruit = ["Apple", "Banana", "Orange", "Strawberry"] // put multiple collection of data
// console.log(fruit)
// console.log(fruit[2]) // to find perticular data

// let numbers = [1,2,3,4,5,6,7,8,9]; // can put numbers also
// console.log(numbers)

// let mixed = [1,2,3,4,"apple", "string", null,undefined]; // can put any data types in array (even we can put array in array )
// console.log(mixed)

// how to change index in array.------>

// let fruit = ["Apple", "Banana", "Orange", "Strawberry", "Mango"]
// fruit[2] = "Watermelon";
// console.log(fruit) // Output ['Apple', 'Banana', 'Watermelon', 'Strawberry', 'Mango']

//-----------------------------------------------------------------------------------------------------------------------------------------

// the push/pop , shift/unshift method.

//1st. push/pop.

// let cars = ["Hyundat", "Tata", "Bmw", "Mercedes"]
// console.log(cars)

// cars.push("Mahindra") // to add elemeny at the end.

// console.log(cars)

// cars.pop() // to remove the last element.
// console.log(cars)

// //2nd shift/unshift.

// let bike =["Royal-enfield", "Honda", "Heero", "KTM"]
// console.log(bike)

// bike.unshift("Bajaj") // add element at first and update the list
// console.log(bike)

// bike.shift() // remove first element and update the list.
// console.log(bike)

// // copy by the refrence in array.

// let user = ["user1", "user2", "user3", "user4"]
// console.log(user)

// let users = user; // this is called coppy by the refrence.

// alert(users === user); // output(true)

// users.push("user5")
// console.log(users)

// Loops in array

//1. For loop in array.

// let team = ["team1", "team2", "team3", "team4"]
// for(let i = 0; i < team.length; i++){
//     alert( team[i]);
// }

//2. for ... of loop

// let shows = ["Show1", "Show2", "Show3", "Show4"]
// for(let show of shows){
//     alert(show)
// }

//3. for...in loop

// let movie = ["Movie1", "Movie2", "Movie3", "Movie4"]
// for (let key in movie){
//     alert(movie[key])
// }

// Length in array.

// let fruit = ["Apple", "Banana", "Chiku", "Pineapple"]
// alert(fruit.length)

//-----------------------------------------------------------------------------------------------------------------------------------------

// TASK.

//1. What is this code going to show.

// let fruits = ["Apple", "Banana", "Chiku"]

// let shoppingcart = fruits;

// shoppingcart.push("Pineapple")
// console.log(fruits.length) // 4

//2. Array operations. (let's try 5 array operation)

// 1. create a array "Style" with items "jazz" and "blues"
// let style = ["Jazz", "Blue"];
// // 2. Append rock-n-roll to the end.
// style.push("Rock-N-Roll");
// // 3. Replace the value in the middle withb"Classic". Your code for finding the middle value should work for any arrays with odd length.
// style[Math.floor((style.length - 1) / 2)] = "Classics";
// // 4. Strip of the first value of the array and show it.
// style.shift();
// // 5. Prepend Rap and Raggae to the array.
// style.unshift("Rap", "Raggae");
// console.log(style);

//3. Callling in an array context.(What is the result? Why?)

// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// })

// arr[2]();.// ERROR!

//4.

// function sumInput() {
//   let numbers = [];
//   while (true) {
//     let value = prompt("What is the number?", 0);

//     if (value === "" || value === null || !isFinite(value)) break;
//     numbers.push(+value);
//   }
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// alert(sumInput());

//-----------------------------------------------------------------------------------------------------------------------------------------

// Splice in array----->

// the syntax is ---> arr.splice(start[, deleteCount, elem1, ..., elemN])
//e.g.1

// let word = ["I", "am", "Studying"]

// word.splice(1,1) // From index 1, remove 1 element
// alert(word)// output = "I", "Studying"

//e.g.2
//  let text = ["I", "study", "javascript", "right", "now"];

//  text.splice(0,3,"Let's", "dance") // you can also replace element.

// alert(text);

//e.g.3
// how we can see that splice returns the array of removed elements.

// let arr = ["I","study", "jascript","right", "now"]

// let remove = arr.splice(0,2) // to see the removed value we create one remove variable and alert that variable.

// alert(remove)

//e.g.4

// let arr = ["I", "study", "jascript"];
// //from index 2
// // delete 0
// // then insert "complex" and "language"
// arr.splice(2, 0, "complex", "language"); // to insert the element woithout any removal.

// alert(arr);

//----------------------------------------------------------------------------------------------------------------------------------------

// Slice in array.

// the syntax is----> arr.slice([start], [end])

//  let arr = ["apple", "banana", "cherry", "almond"]

//  alert(arr.slice(1,3))// copy from 1 to  3.

//A cheat sheet of array methods:

// To add/remove elements:----------

// push(...items) – adds items to the end,
// pop() – extracts an item from the end,
// shift() – extracts an item from the beginning,
// unshift(...items) – adds items to the beginning.
// splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
// slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
// concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.

//To search among elements:--------------

// indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
// includes(value) – returns true if the array has value, otherwise false.
// find/filter(func) – filter elements through the function, return first/all values that make it return true.
// findIndex is like find, but returns the index instead of a value.

//To iterate over elements:--------

// forEach(func) – calls func for every element, does not return anything.

//To transform the array:-------------

// map(func) – creates a new array from results of calling func for every element.
// sort(func) – sorts the array in-place, then returns it.
// reverse() – reverses the array in-place, then returns it.
// split/join – convert a string to array and back.
// reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.

//----------------------------------------------------------------------------------------------------------------------------------------

//Task
//1.

// function camelize(str){
//     return str
//     .split('-')
//     .map((word,index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//     .join('')
// }

// console.log(camelize("Vishal-pandey-ramesh-bhai"))
// alert(camelize("Vishal-pandey-ramesh-bhai"))

//2.

// function filterRange(arr, a, b) {

//     arr.filter((item) => {
//         if(a <= item && b <= item) {
//             console.log('item',item)
//         }
//     })
// //   return arr.filter(item =>( a <= item && item <= b));
// }

// let arr = [5,3,9,10,11];

// let filtered = filterRange(arr, 6, 8);
// console.log(filtered)
// function filterElements(arr, fn) {
//     const filteredArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (fn(arr[i], i)) {
//         filteredArr.push(arr[i]);
//       }
//     }
//     return filteredArr;
//   }

//   // Example usage:
//   let arr = [1, 2, 3, 4, 5];
//   let fn = function greaterThan5s(n) { return n > 5; } // Filtering even numbers with even indices
//   let filteredArr = filterElements(arr, fn);
//   console.log(filteredArr); // Output: [2, 4]

//   //

//   let options = {
//     title: "Menu",
//     width: 100,
//     height: 200,
//   }

//   let { title } = options;

//   console.log(title)

//   let now = new Date();
// console.log( now );

// let newDate = new Date(2012, 1, 20, 3, 12, 21);
// alert(newDate);
//---------------------------------------------------------------------------
// function getWeekDay(date) {
//   let day = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

//   return day[date.getDay()];
// }
// let date = new Date(2024, 1, 15);

// console.log(getWeekDay(date));
//-----------------------------------------------------------------------------

// function getLocalDay(date){
//   let day = date.getDay()
// if (day == 0){
//   day = 7
// }

// return day;



// }

// let date = new Date(2024,1,15)
// alert(getLocalDay(date))

// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// console.log( pow(2, 5) );



//-------------------------------------------------------------------------------------------------