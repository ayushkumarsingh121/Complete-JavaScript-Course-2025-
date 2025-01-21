// Challenge 2:

// Write a JavaScript function that checks if a variable is null. The function should return true if the variable is null, and false otherwise.

let dataTypeof = (x) => {
  if(x === null){
    return true;
  }
  else{
    return false
  }
}

let x = null;
console.log(dataTypeof(x))