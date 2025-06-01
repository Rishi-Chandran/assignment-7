
let num = 98765
let count = 0


while (num > 0) {

  num = (num / 10) | 0
  count = count + 1
}


console.log("The number of digits is: " + count)
