// a park collects name & emotion of their visitors - 'bad', 'good', 'great'

// stores them in parkEmotionData object
// name of the visitor becomes key, and emotion becomes value

var parkEmotionData = {
  vivek : "good",
  mahesg : "bad",
  suresh : "bad"
}

// 'vivek' is feeling 'good'
// 'mahesh' is feeling 'bad'
// 'suresh' is feeling 'bad'

for(let name in parkEmotionData){
  console.log(`${name} is feeling ${parkEmotionData[name]}`)
} // expect object with 3 properties

