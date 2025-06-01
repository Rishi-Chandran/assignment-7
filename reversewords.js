
let sentence = "JavaScript is fun"


let reversedSentence = ""


let wordCount = 0
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] === ' ') {
    wordCount = wordCount + 1
  }
}


wordCount = wordCount + 1


let end = sentence.length
let start;


for (let i = sentence.length - 1; i >= 0; i--) {
  if (sentence[i] === ' ' || i === 0) {
   
    if (i === 0) {
      start = 0
    } else {
      start = i + 1
    }


    let word = "";
    for (let j = start; j < end; j++) {
      word = word + sentence[j]
    }

  
    reversedSentence = reversedSentence + word

  
    if (i !== 0) {
      reversedSentence = reversedSentence + " "
    }


    end = i
  }
}


console.log("Reversed sentence: " + reversedSentence)
