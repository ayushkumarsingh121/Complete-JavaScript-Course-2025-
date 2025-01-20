// declare a function called giveMaxNumber
// it takes in two numbers as arguments
// returns the greater of the two
// invoke the function with 3 & 7 and print the output in the console.

// 1. function declaration
function giveMaxNumber(a, b) {
  if(a>b){
    return `${a} is greter then ${b}`
  }
  else{
    return `${b} is greter then ${a}`
  }
}

console.log(giveMaxNumber(3,7))
console.log(giveMaxNumber(8,7))



// 2. function expression

let givenMaxNumber = function(a, b) {
  if(a>b){
    return `${a} is greter then ${b}`
  }
  else{
    return `${b} is greter then ${a}`
  }
}
console.log(givenMaxNumber(3,7))
console.log(givenMaxNumber(8,7))





// 3. arrow function

let givenMaxNum = (a,b) => {
  if(a>b){
    return `${a} is greter then ${b}`
  }
  else{
    return `${b} is greter then ${a}`
  }
}

console.log(givenMaxNum(3,7))
console.log(givenMaxNum(8,7))

