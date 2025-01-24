// ### **1. Explicit Conversion**

// Write code to convert the following values to their respective types:

// 1. Convert `"2023"` to a number.
// 2. Convert `true` to a string.
// 3. Convert `null` to a boolean.


let numStr = "2023";
console.log(Number(numStr))

let output = true;
console.log(String(output))

let result = null
console.log(Boolean(result))



// ### **2. Parse Integers and Floats**

// Given the string `str = "123.45abc"`, write code to:

// 1. Extract only the integer part.
// 2. Extract the floating-point number.
// 3. What happens if you use `Number(str)` instead?
// 3. Loose vs Strict Equality


let str = "123.45abc"
console.log(parseInt(str))
console.log(parseFloat(str))

console.log("===================")

// 3. Loose vs Strict Equality
// Analyze the following code snippet and predict the output. Then, write and execute it:

let a = 0;
let b = "0";

console.log(a == b);  // true
console.log(a === b); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

console.log("---------------------")


// 4. Falsy and Truthy Practice
// Write a function that checks if a given value is truthy or falsy.
// Example:
function checkValue(value) {
  if (value) {
    return "Truthy";
  } else {
    return "Falsy";
  }
}

console.log(checkValue("")); // Falsy
console.log(checkValue(123)); // Truthy
console.log(checkValue(false)); // Falsy



// ### **5. Logical Operators in Action**

// Write code for the following scenarios:

// 1. Return the first truthy value from the list: `0, "", "JavaScript", null`.
// 2. Return the last falsy value from the list: `undefined, false, "Code", NaN`.
// 3. Use the `&&` operator to check if both `"React"` and `"JavaScript"` are non-empty strings.


const firstTruthy = 0 || "" || "JavaScript" || null;
console.log(firstTruthy); // Output: "JavaScript"

const lastFalsy = undefined && false && "Code" && NaN || NaN;
console.log(lastFalsy); // Output: NaN


console.log("*****************************")




// 6. String and Number Coercion
// Given the following code snippet, predict the output and explain why:
let x = "50" - 10;
let y = "50" + 10;
let z = "50" * 2;

console.log(x); // 40
console.log(y); // 5010
console.log(z); // 100