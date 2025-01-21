// ## Coding Challenge 3

// Write a JavaScript function that takes a variable `x` as an argument and checks if its type is "object". The function should return `true` if the type is "object", and `false` otherwise.

let x = {
  name: "Ayush",
};

let datatypeOf = (x) => {
  if (typeof x === "object" && !Array.isArray(x) && x !== null) {
    return true;
  } else {
    return false;
  }
};

console.log(datatypeOf(x)); 