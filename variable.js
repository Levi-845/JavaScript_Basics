var x = 10;
if (true) {
    var x = 20; // Re-declared in the same scope
    console.log(x); // 20
}
console.log(x); // 20


let y = 30;
if (true) {
    let y = 40; // Different variable in block scope
    console.log(y); // 40
}
console.log(y); // 30


const z = 50;
// z = 60; // Error: Assignment to constant variable
console.log(z); // 50


