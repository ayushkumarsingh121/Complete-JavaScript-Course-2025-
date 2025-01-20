// ## Coding Challenge 1

// Write a function named `reverseString` that takes a string as an argument and returns the reverse of that string. Do not use any built-in reverse methods.

let str = "Ayush";
let reverseString = (str) => {
  let nStr = "";
  for(let i= str.length-1; i>=0; i--){
    nStr = nStr + str[i]
  }
  return nStr;
}

console.log(reverseString(str))