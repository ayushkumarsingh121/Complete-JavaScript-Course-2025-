// ## Coding Challenge 2

// Write a JavaScript function that takes an array as an argument and returns a new array with the same elements, but with each element's type converted to a string. For example, if the input array is `[1, "hello", true]`, the output should be `["number", "string", "boolean"]`.

let arr = [1, "hello", true];

let dataTypeof = (arr) => {
  let nArr = [];
  for(let i=0; i<arr.length; i++){
    nArr.push(typeof(arr[i]))
  }
  return nArr;
}

console.log(dataTypeof(arr))