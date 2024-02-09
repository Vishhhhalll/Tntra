//-----------------------------------------------------------------------------------------------------------------------------------------
// const person = {
//   name: "Janvii",
//   age: 22,
//   hobbies: ["Coding", "Basket-ball", "Sleeping", "Learning"],
// };
// console.log(person);

// How to access data from an object---------->

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);

// console.log(typeof person) to check the type of person.

// How to add key value pair in objects------>

// person.gender = "male";
// console.log(person)

// ----------------------------------------------------------------------------------------------------------------------------------------

// difference between dot notation and bracket notation------>

// const key = "Surname"; // new key
// const detail = {
//   myName: "Vishal",
//   myAge: 22,
//   "School Name": "Urmi",
// };

// detail[key] = "Pandey"; // "add new key in object method"
// console.log(detail);

// console.log(detail["School Name"]);  // this method called bracket notation. if we use dot here then it gives an error , that's why we use  bracket notation (because of "school name").
// console.log(detail.myAge); // this method called dot notation. cause we use dot and get the value.
//_________________________________________________________________________________________________________________________________________

// how to add another key in object.----->
//e.g. const key = "surname" // how to add this key in object? ""see line No.25 & 32.""

//-----------------------------------------------------------------------------------------------------------------------------------------

// how to iterate object---->
// let's see!

// const paint = {
//   color: "white",
//   brand: "Assian-Paints",
//   category: "Royale",
// };

// using for in ... loop------>
// for (let key in paint) {
//   // console.log(key); // only get "key"
//   // console.log(paint.key) it gives an ERROR!!
//   console.log(paint[key]); // to get value.
//   //console.log(`${key} : ${paint[key]}`) // to get both key and value.
//   //console.log(key, " : ", paint[key]) // this is also work "but not good practice".
// }

// using for of... loop----->

// for (let key of Object.keys(paint)){
//     console.log(paint[key])
// }

//-----------------------------------------------------------------------------------------------------------------------------------------

// Computed properties-------->

// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const obj = {
//   [key1]: value1,
//   [key2]: value2,
// };

// console.log(obj);

// const obj = {};
// obj[key1] = value1;
// obj[key2] = value2;

// console.log(obj);  // "SECOND WAY"

//-----------------------------------------------------------------------------------------------------------------------------------------

// Spread operator in objects----->

// const obj1 = {
//   key1: "value1",
//   key2: "value2",
// };

// const obj2 = {
//   key3: "value3",
//   key4: "value4",
// };

// const newObject = { ...obj1  };
// //const newObject = { ...obj1, ...obj2 }; // you can also clone  both objects (obj1 & obj2)

// console.log(newObject);

//-----------------------------------------------------------------------------------------------------------------------------------------

// Object Destructuring---->

// const band ={
//     bandName: "led zeppelin",
//     famousSong: "Stairway to heaven", // how to make these "keys" a Variable?
// }

// const bandName = band.bandName;
// const famousSong = band.famousSong; // line no. 126-129 is also correct

// console.log(bandName, famousSong) // this is the common and lengthy way to create a variable from key

// const var1 = band.bandName;
// const var2 = band.famousSong;

// console.log(var1, var2) // "you can also change the variable name while you create the variable from key"

// you can also change the name of variabe (e.g. const bandName = band.bandName & const Var1 = band.bandName ---> both are correct)

// now short-cut or you can say the ""object destructuring""

// const band ={
//     bandName: "Bharat band",
//     famousSong: "Mera Desh",
//     ownerName: "Raja Hindustani",
//     City: "Nagpur",
// }

// const  {bandName,famousSong} = band; // this is called destructuring same code in one line.

// console.log(bandName)

// now if you want to change the variable name

// const {bandName: var1, famousSong: var2} = band; // simply gives a collon after main variable name(bandName, famousSong) and after write whatever you want to give a name to the variable.
// console.log(var1, var2);

// now if you want to show rest keys in console without destructure.(use spread operator)
// const {bandName, famousSong, ...ressstt} = band;

//console.log(ressstt);

//-----------------------------------------------------------------------------------------------------------------------------------------

// Objects inside array----->

// const users = [
//     {userId: 1, userName: "Abhishek", age: 22},
//     {userId: 2, userName: "Rinki", age: 23},
//     {userId: 3, userName: "Yash", age: 22},
//     {userId: 4, userName: "Mayur", age: 21},
// ]

// for(let user of users){
//     //console.log(user)
//     //console.log(user.userId) // for perticular value
// }

//-----------------------------------------------------------------------------------------------------------------------------------------

// Nested Distructuring----->
// const client = [
//   { clientId: 1, clientName: "Abhishek", clientAge: 22 },
//   { clientId: 2, clientName: "Rinki", clientAge: 23 },
//   { clientId: 3, clientName: "Yash", clientAge: 22 },
//   { clientId: 4, clientName: "Mayur", clientAge: 21 },
// ];

// // const [client1, client2, client3, client4] = client;
// // console.log(client1) // ---- nested destructuring.

// // const [{clientName}, client2, client3, {clientAge}] = client // for perticular key value
// // console.log(clientName, clientAge)

// const [{ clientName: firstName }, client2, client3, { clientAge: Age }] =
//   client; // change the variable name and destructure.
// console.log(firstName);
// console.log(Age);

// this is called nested destructuring ---^---

//-----------------------------------------------------------------------------------------------------------------------------------------

// Objects refrencing and coppying.------->

// let user ={
//     name: "Vishal"
// }

// let Admin = user;  // this is called refrence

// console.log(user)

//---------------------------------

// let a = {};
// let b = {};

// alert(a == b);
//---------------------------------------------------------------------------------------------

// To copy an object in javscript. we have 2 significant options. Let's see them one by one.

// ""1st"".The Oject.assign method. (The Object.assign() method copies all the properties from one or more source objects to a target object. It returns the modified target object. This method will help us fix the problem we saw in the basic approach given above.)

// let obj = {
//   name: "Vaishnavi",
// };

// let obj2 = Object.assign({}, obj);

// console.log(obj);
// console.log(obj2);

// obj2.name = "Janviiee";

// console.log(obj);
// console.log(obj2);

//""2nd."" The Spread Operator(...) (We can perform object copying by using the spread operator introduced in ES6. Let’s see with the help of an example.)

// let obj = {
//   name: "Vishal",
// };

// let obj2 = { ...obj };

// console.log(obj);
// console.log(obj2);

// obj2.name = "Akshat";

// console.log(obj);
// console.log(obj2);


//-----------------------------------------------------------------------------------------------------------------------------------------