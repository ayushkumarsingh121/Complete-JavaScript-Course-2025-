// a park collects name & emotion of their visitors - 'bad', 'good', 'great'

// stores them in parkEmotionData object
// name of the visitor becomes key, and emotion becomes value

var parkEmotionData = {
  vivek : "good",
  mahesh : "bad",
  suresh : "bad"
}

// create a function enterEmotions(name, emotion) 
// such that it creates a property in the parkEmotionData object

// 'vivek' is feeling 'good' using enterEmotions
// 'mahesh' is feeling 'bad' using enterEmotions
// 'suresh' is feeling 'bad' using enterEmotions

// console.log(parkEmotionData) // expect object with 3 properties

let enterEmotions = (name, emotion) => {
 parkEmotionData[name] = emotion;
 console.log(`${name} is feeling ${emotion}`);
}

enterEmotions("vivek", "good");
enterEmotions("mahesh", "bad");
enterEmotions("suresh", "bad");

console.log(parkEmotionData);