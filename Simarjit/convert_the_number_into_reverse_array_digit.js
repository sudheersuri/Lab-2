//convert the number into reverse array digit
//https://www.codewars.com/kata/5583090cbe83f4fd8c000051/

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}