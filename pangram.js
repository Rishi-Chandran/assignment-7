
let sentence = "The quick brown fox jumps over the lazy dog"

let lowerSentence = ""
for (let i = 0; i < sentence.length; i++) {
  let ch = sentence[i]
  if (ch >= 'A' && ch <= 'Z') {

    lowerSentence += String.fromCharCode(ch.charCodeAt(0) + 32)
  } else {
    lowerSentence += ch
  }
}

let isPangram = true


for (let charCode = 97; charCode <= 122; charCode++) {
  let letter = String.fromCharCode(charCode)

  let found = false
  for (let i = 0; i < lowerSentence.length; i++) {
    if (lowerSentence[i] === letter) {
      found = true
      break
    }
  }
  if (!found) {
    isPangram = false
    break;
  }
}


if (isPangram) {
  console.log("It is a pangram")
} else {
  console.log("It is not a pangram")
}
