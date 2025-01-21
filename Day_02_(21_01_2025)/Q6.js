// Challenge 3:

// Write a JavaScript function that checks if a variable is either undefined or null. The function should return true if the variable is undefined or null, and false otherwise.

let dataTypeof = (x) => {
  if (x === null || x === undefined) {
    return true;
  } else {
    return false;
  }
};

let x;
console.log(dataTypeof(x));
x = null;

console.log(dataTypeof(x)); 

x = 25;
console.log(dataTypeof(x)); 
