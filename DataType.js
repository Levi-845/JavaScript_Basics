// (A) - Primitive Data Types
// 1. String
let str = "Hello, World!";      // Declared using single ('), double ("),quotes or template literals (`).
let greeting = `Hi, ${name}!`;

// 2.Number
let num = 42;     //  Represents numeric values, including integers and floating-point numbers.
let pi = 3.14159;   // Numbers doesn't required Single (''), Double("") quotes.

// 3.BigInt
let bigNum = 123456789012345678901234567890n;  // Represents integers larger than the safe integer limit (2^53 - 1).
console.log(bigNum);  //Denoted by appending n to the number. 

// 4. Boolean
let isFun1 = true;  // Represents logical values: true or false. if we use use ("") or ('') then it become (String)
let isFun2 = false;  // true and false is (Boolean) so doesn't required single or double quates. 

// 5. Undefined
let notAssigned;  // A variable declared but not initialized has the value undefined.
console.log(notAssigned);  // undefined

// 6. Null
let empty = null;  // Represents an intentional absence of any object value.

// 7. Symbol
let sym = Symbol('unique');  // A unique and immutable value, often used as object keys.


 // (B) - Non-Primitive (Reference) DataTypes
// 1. Object
let obj = { name: "John", age: 30 }; // Represents collections of key-value pairs.

// 2. Array
let arr = [1, 2, 3]; //  A special kind of object used to store ordered collections of values.

// 3. Function
function greet() {  // A callable object that performs an action.
  return "Hello!";
}

// 4. Date
let now = new Date(); // Used to handle dates and times.

// 5. RegExp
let pattern = /\d+/; // Represents a regular expression for pattern matching.

// 6. Map
let map = new Map(); // A collection of key-value pairs with keys of any data type.
map.set('key', 'value');

// 7. Set
let set = new Set([1, 2, 3]); // A collection of unique values.

// 8. WeakMap
let weakMap = new WeakMap(); // Similar to Map, but keys are weakly referenced (not preventing garbage collection).

// 9. WeakSet
let weakSet = new WeakSet(); // Similar to Set, but values are weakly referenced.


// Using typeof to Check Data Types
// The typeof operator helps identify the type of a value.
console.log(typeof "Hello");  // "string"
console.log(typeof 42);       // "number"
console.log(typeof true);     // "boolean"
console.log(typeof undefined);// "undefined"
console.log(typeof null);     // "object" (historical bug)
console.log(typeof Symbol()); // "symbol"
console.log(typeof {});       // "object"
console.log(typeof []);       // "object" (arrays are also objects)
console.log(typeof function(){}); // "function"


// ----- Special Notes -----
// undefined vs null:
// undefined is a default value for uninitialized variables.
// null represents a deliberate absence of value.
// typeof null is "object":
// This is a historical bug in JavaScript.
// Arrays and Functions are subtypes of Objects:
// Arrays and functions inherit the object type but have specialized behaviors.
// This comprehensive list includes all standard JavaScript data types!
