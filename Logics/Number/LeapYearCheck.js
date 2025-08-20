let year = 2024;


if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a Leap Year");
} else {
  console.log(year + " is not a Leap Year");
}


//Explanation:
// (1) if year is divisible by 4, it is a Leap year  (normally).
// (2) But if the year is divisible by 100, it will not be a Leap Year.
// (3) But there is an exception → if the year is divisible by 400, then it will be a Leap Year.

// Examples:
// 2024 is yeap year( because 4 divides it and not 100)
// 1900 is not a Leap year (because it is divisible by 100 but not by 400)
// 2000 is a Leap year (because it is divisible by 400)
