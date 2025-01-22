


let feelingData = {

}
let addData = (name, feeling) => {
  feelingData[Symbol(name)] = feeling;
}


addData('John', 'bad');
addData('Michael', 'good');
addData('John', 'bad');
addData('John', 'great');

console.log(feelingData);
