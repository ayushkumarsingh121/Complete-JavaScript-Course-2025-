// ## Coding Challenge 3

// Write a function named `findMax` that takes an array of numbers as an argument and returns the largest number in the array.

let num = [2,4,6,5,9,42,63,2,5,60]
let findMax = (num) => {
  let maxNum = 0
  for(let i=0; i<num.length; i++){
    if(num[i] > maxNum){
      maxNum = num[i]
    }
  }
  console.log(maxNum)
}

findMax(num)