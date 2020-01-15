Q1) Factorial 

Solution:-

function factorial(n) {
  if (n < 0 || n > 12)
    throw new RangeError();
  return n <= 1 ? 1 : n * factorial(n - 1);
}


//   https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript