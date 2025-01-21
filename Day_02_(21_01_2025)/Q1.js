// ## Coding Challenge 1

// Write a JavaScript function that takes a variable `x` as an argument and returns its type. Do not use any built-in functions or methods to determine the type.

let x = 42
let dataTypeof = (x) => {
  if (typeof x === "number") {
    return "Number";
  }
};

console.log(dataTypeof(x))