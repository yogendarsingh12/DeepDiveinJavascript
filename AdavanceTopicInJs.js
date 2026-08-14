//there is summaray of advance js concetps which we will revise 
// [1] Closures in Javascript
//[2]Currying
//[3]Destructuring
//[4]This behvior
//[5]Call,bind,apply (we will pratice with example)
//[6]Debouncing
//[7]Throttling
//[8]ShallowCopy
//[9]DeepCopy
//[10]Prototypes
//[11]Event Loop Working
//[12]ops Concepts in JavaScript
//[13]Promies in javascript
//[14]callback functions
//[15]high-orderFunctions
//[16]callback Hell



//[1]*********************************Closures******************************************

//->a closure is created when an inner function remembers the lexical scope and variables of the outer function even though the outer function has returned, 
// ->and some real-life examples are timers, React components, higher-order functions, Promises, etc

// function Outer() {
//   const name = "Yogendar Singh Rajawat";

//   // Lowercase 'function'
//   return function Inner() {
//     console.log("Name is accessible in function:", name);
//   };
// }

// // Uppercase 'O' to match the function definition
// let result = Outer(); 

// result(); // Logs: "Name is accessible in function: Yogendar Singh Rajawat"


//[2]++++++++++++++++++++++++++++++++++++++Currying