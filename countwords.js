
let sentence = "Hello world, how are you?"
let count = 0


for (let i = 0; i < sentence.length; i++) {

  if (sentence[i] === ' ') {
    count = count + 1
  }
}

count = count + 1

console.log("The number of words in the sentence is: " + count)
