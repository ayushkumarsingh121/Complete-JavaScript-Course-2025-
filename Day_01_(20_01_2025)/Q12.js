// declare a function called getArrayOfColors()
// the function should take in 3 colors
// return an array of 3 colors supplied to it


let getArrayOfColors = (color1, color2, color3) => {
  let arr = []
  arr.push(color1, color2, color3)
  return arr
}

console.log(getArrayOfColors("red", "blue", "green"))