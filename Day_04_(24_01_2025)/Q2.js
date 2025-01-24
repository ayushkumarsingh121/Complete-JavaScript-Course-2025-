// ### **Question 1: Primitive Data Types - String, Number, and Boolean**

// Write a program to:

// 1. Declare variables of type `string`, `number`, and `boolean`.
// 2. Perform operations like concatenation (for strings), addition (for numbers), and logical operations (for booleans).
// 3. Log the results to the console.


let str = "Ayush"
let num = 20;
let inLove = false;

console.log(str + " kumar")
console.log(num + 25)
console.log(inLove + false)







// ### **Question 3: BigInt and Symbol**

// 1. Create a BigInt variable with a large number and perform an addition operation using another BigInt.
// 2. Create two Symbol variables with the same description and verify if they are equal or not.
// 3. Log all outputs with appropriate comments.



let bigNum = 654654669684684646798656587484768765874657857587n;

let bigNum2 = 85746587657574545498468787546874684637n;
console.log(bigNum + bigNum2)


let variable = Symbol("Ayush")
let variable2 = Symbol("Ayush")

console.log(variable === variable2)


// ### **Question 4: Objects**

// 1. Create an object representing a student with properties like `name`, `age`, and `grade`.
// 2. Add a new property `hobby` to the object after its creation.
// 3. Access and log all the properties using both dot and bracket notation.



let student = {
  name : "Ayush",
  age : 19,
  grade : "A",
}

student.hobby = "Anime watching"
console.log(student.name)
console.log(student.grade)
console.log(student["age"])
console.log(student["hobby"])

console.log(student)




// ### **Question 5: Arrays**

// 1. Create an array of five fruits.
// 2. Add a new fruit to the end of the array and remove one fruit from the beginning.
// 3. Use a loop to print all the elements of the array.


let arr = ["apple", "pea", "mangoes", "orange", "grapes"]

arr.push("papaya")
arr.shift()

for(let i=0; i<arr.length; i++){
  console.log(arr[i])
}

// ### **Question 6: Functions**

// 1. Write a function named `calculateArea` that takes two parameters: `length` and `width` and returns the area of a rectangle.
// 2. Call the function with appropriate values and log the output to the console.


function calculateArea(a,b){
  return a*b;
}

console.log(calculateArea(5,2))