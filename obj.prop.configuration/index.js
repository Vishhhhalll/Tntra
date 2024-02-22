// Property flags and descriptor----------->>>>>>>>>>>>>>>

// Property flags:-
// writable: if true, the value can be changed, otherwise it's read only.
// enumerable:- if true, then listed in lopps otherwise not listed.
// configurable:- if true, the property can be deleted and these attributes can be modified, otherwise not.

// The method object.getOwnPropertyDescriptor allows to query the full information about a property.

// The syntax is:  let descriptor = object.getOwnPropertyDescriptor(obj, propertyName);
"use strict";
// let user = {
//     name: "John"
// }

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name')

// console.log(JSON.stringify(descriptor, null, 2))

// OUTPUT:
// {
//     "value": "John",
//     "writable": true,
//     "enumerable": true,
//     "configurable": true
//   }

// to change the flags , we can use object.defineProperty.

// The syntax is: Object.defineProperty(obj, propertyName, descriptor)

// let user = {};

// Object.defineProperty(user, "name", {
//   value: "John",
// });

// let descriptor = Object.getOwnPropertyDescriptor(user , 'name');

// console.log(JSON.stringify(descriptor, null, 2))

//OUTPUT :
// {
//     "value": "John",
//     "writable": false,
//     "enumerable": false,
//     "configurable": false
//   }

// non-writable

//let's make user.name non-writable(can't be reassigned) by changing writable flag:

// let user = {
//   name: "John",
// };

// Object.defineProperty(user, "name", {
//   writable: false,
// });

// user.name = "pete";
// console.log(user.name)// error(only in strict mode) Cannot assigned to read only property 'name'

//Here's the same example but the property is created from scratch.

// let user = {};

// let descriptor = Object.defineProperty(user, "name", {
//     value: "john",
//     enumerable: true,
//     configurable: true
// });

// console.log(user.name);// John

// user.name = "Pete";

// console.log(user.name)// Error

// Non-enumerable

// Normally, a built-in toString for objects is non-enumerable, it does not show up in for..in. But if we add a toString of our own, then by default it shows up in for..in, like this:

// let user = {
//     name : "John",
//     toString(){
//         return this.name;
//     }
// };

// for (let key in user )
// console.log(key);// name, tostring

// if we don't like it we can set enumerable: false. then it won't appear in a for...in loop, just like the built-in one:

// let user = {
//     name : "John",
//     toString(){
//         return this.name;
//     }
// };

// Object.defineProperty(user, "toString", {
//     enumerable:false
// });

// for (let key in user )
// console.log(key);

// Non-configurable

// The non configurable flag (configurable:flase) is sometimes preset for built-in objects and properties.
// A non-configurable property can't be deleted , it's attributes can't be modified.

// let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

// alert( JSON.stringify(descriptor, null, 2 ) );

// OUTPUT
// {
//   "value": 3.141592653589793,
//   "writable": false,
//   "enumerable": false,
//   "configurable": false
// }

// let age = prompt("age?", 18);

// let meessage =
//   age < 3
//     ? "Hii baby!"
//     : age < 18
//     ? "Hello"
//     : age < 100
//     ? "Greetings!"
//     : "What an unusual age!";

// console.log(meessage);
