
let num = 234
let product = 1


while (num > 0) {
  let digit = num % 10
  product = product * digit
  num = (num / 10) | 0
}


console.log("The product of all digits is: " + product)
