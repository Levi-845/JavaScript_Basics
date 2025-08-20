let num1 = 7;      // Positive Number.
let num2 = -21;   // Negative Number.
let num3 =  0;   // Zero Number.

// ---------------------------------------------------------------

// Logic of Positive Number, with if else Statement.
if (num1 > 0) {
    console.log("Number " + num1 + " is Positive");
} else if (num1 < 0) {
    console.log("Number " + num1 + " is Negative");
} else {
    console.log("Nubmer " + num1 + " is Zero");
}

// ---------------------------------------------------------------

// Logic of Negative Number, with Ternary Operator( ? : ) Statement.
num2 = 
(num2 < 0) ? console.log("Number " + num2 + " is Negative") : 
(num2 > 0) ? console.log("Number " + num2 + " is Positive") : 
console.log("Nubmer " + num2 + " is Zero");

// ---------------------------------------------------------------

// Logic of Zero Number, with Switch Statement.
switch (true) {
    case (num3 == 0):
        console.log("Number " + num3 + " is Zero");
        break;

    case (num3 > 0):
        console.log("Number " + num3 + " is Positive");
        break;

    case (num3 < 0):
        console.log("Number " + num3 + " is Negative");
        break;

    default:
        console.log("Value " + num3 + " is not a Number");
}
