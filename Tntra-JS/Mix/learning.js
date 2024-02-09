// 1. OR operator || :- In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are "true", it returns "true", otherwise it returns "false". ( In Javascript, The followinf values are considered falsy. Null,Undefined,""(empty value.),false,0 And NAN. (Also same in OR || operator.) )

// e.g.1 - 
//         alert( true || true );   // Output = true
//         alert( false || true );  // Output = true
//         alert( true || false );  // Output = true
//         alert( false || false ); // Output = false

         
// e.g.2 -

//    let hour = 9;

//    if (hour < 10 || hour > 18) {
//      alert( 'The office is closed.' );
//    }        

//  2. Nullish coalescing operator '??' :- It treats null and undefined similarly, we’ll use a special term here, in this article. For brevity, we’ll say that a value is “defined” when it’s neither "null nor undefined".

// e.g.1 - if a is "defined" then a.
//      - if a isn't "defined" then b.

// e.g.2
//    (    let user;

// alert(user ?? "Anonymous"); // Output = Anonymous. (bcz user is undefined)
//     )

// e.g.3
//    (  let user = "john"

// alert (user ?? "Anonymous"); // Output = "john". (bcz user is defined)
// )

//   3. AND operator '&&'  :- In classical programming, AND returns true if both operands are truthy and false otherwise:

//   e.g.1 - alert( true && true );   // Output = true
//           alert( false && true );  // Output = false
//           alert( true && false );  // Output = false
//           alert( false && false ); // Output = false

//   e.g.2 - 
//         let hour = 12;
//         let minute = 30;

//         if (hour == 12 && minute == 30) {
//         alert( 'The time is 12:30' );
//         }        

//    4. NOT operator '!' 


      //obj practice.

      
      let user = {}
          name : "john";
          surname : "smith";

      user.name = "pete"
       delete user.name;

     
        let fees = {
          Vishal : 1000,
          Mohit : 1000,
          Aashutosh : 5000,
        }

        let total = 0;

      for (let key in fees){
          total += fees[key]
      }

      alert(total);

      let calculator = {
        sum(){
            return this.a + this.b;
        },

        mul(){
            return this.a * this.b;
        },

        read(){
            this.a = +prompt("a?", '0')
            this.b = +prompt("b?", '0')
        }
      };

      calculator.read();
      alert(calculator.sum())
      alert(calculator.mul());

      let user = {
        name : "john",
        age : 30,
      }

      user.sayHi =  function(){
        alert("HEllo!")
      }
      user.sayHi();

      alert( 0xff );

      let p = +prompt("Enter the number!", '0')
      let v = +prompt("Enter one more number!", '1')

      alert(p + v);

      //OR operator (||).

      
          alert(true || false);
          alert(true || true);
          alert(false || false);
          alert(false || true);

     

        let hour = 9;

        if (hour < 10 || hour > 18) {
          alert( 'The office is closed.' );
        }

      //Nullish coelscing operator (??).

      
      let hours = null;
      let days = false;

      alert(hours ?? days)

      let a = +prompt("Enter a number!", '0')
      let b = +prompt("Enter one more number!", '0')

      alert(a + b)

      function random(min, max){
        return min + Math.random() * (max - min)
      }

      alert(random(1, 8))
      alert(random(1, 8))
      alert(random(1, 8))

      function randomInteger(min, max) {
        let rand = min + Math.random() * (max - min);
        return Math.round(rand);
      }

      alert(randomInteger(1, 5));
      alert(randomInteger(1, 5));
      alert(randomInteger(1, 5));