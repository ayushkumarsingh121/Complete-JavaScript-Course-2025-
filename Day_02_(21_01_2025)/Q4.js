// Challenge 1:

// Write a JavaScript function that checks if a variable is undefined. The function should return true if the variable is undefined, and false otherwise.

let dataTypeof = (x) => {
  if(typeof x == "undefined"){
    return true;
  }
  else{
    return false
  }
}

let x ;
console.log(dataTypeof(x))