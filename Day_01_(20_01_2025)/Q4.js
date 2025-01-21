// a park collects name & emotion of their visitors - 'bad', 'good', 'great'

// stores them in parkEmotionData object
// name of the visitor becomes key, and emotion becomes value

var parkEmotionData = {
}

// 'vivek' is feeling 'good'
parkEmotionData.vivek = "good";

// 'mahesh' is feeling 'bad'
parkEmotionData["mahesh"] = "bad";

// 'suresh' is feeling 'bad'
parkEmotionData.suresh = "bad";

console.log(parkEmotionData) // expect object with 3 properties

