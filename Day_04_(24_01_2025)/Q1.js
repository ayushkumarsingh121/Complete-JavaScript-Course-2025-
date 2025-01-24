// 1. Write a script to print "Hello, JavaScript!" in the browser console.
// 2. Create a program to calculate the sum of two numbers.
// 3. Write a function to check if a number is even or odd.
// 4. Create a loop to print numbers from 1 to 10.
// 5. Write a program to store a user's name and greet them.
// 6. Use `if...else` to check if a number is positive, negative, or zero.

// Q1
console.log("Hello");


// Q2
function add(a,b){
  return a+b;
}
console.log(add(5,9));


// Q3
function evenChecker(num){
  if(num%2==0){
    return "Yes"
  }
  else{
    return "NO"
  }
}

console.log(evenChecker(2))
console.log(evenChecker(25))


// Q4
for(let i=1; i<=5; i++){
  console.log(i)
}



// Q5
function greating(name){
  console.log("Hello" + name)
}
greating("Ayush")


// Q6
function numChecker(num){
  if(num > 0){
    console.log("Postive Number")
  }
  else if (num === 0){
    console.log("Zero")
  }
  else{
    console.log("Negative Number")

  }
}

numChecker(25)
numChecker(0)
numChecker(-5)



// **Question 1: Variable Declaration and Update**

// Write a program to:
// 1. Declare three variables using `var`, `let`, and `const`.
// 2. Update the value of the variables declared with `var` and `let`.
// 3. Print all three variables.




var name = "Ayush";
name = "Yuvraj"
console.log(name)

let age = 19;
age = 20;
console.log(age)

const profit = 25000000000000000000000n;
console.log(profit)


