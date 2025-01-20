// ## Coding Challenge 2

// Write a function named `sumArray` that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

let arr = [2, 5, 6, 4, 8, 9, 54];
let sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
};

sumArray(arr);
