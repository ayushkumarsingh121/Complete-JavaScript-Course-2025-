// Coding Challenge 3

// Write a JavaScript function that takes an array of numbers and returns the sum of all the numbers in the array. The function should take one parameter, numbers, which is an array of numbers, and return the calculated sum.

let arr = [2,5,3,6,4,8];

let sumOfArr = (num) =>{
  let sum = 0
  for(let i=0; i<arr.length; i++){
    sum = sum + arr[i]
  }
  console.log(sum)
}

sumOfArr(arr)