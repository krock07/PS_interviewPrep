/*
  Make a function that computes a factorial recursively.
  A factorial is when you take a number n and multiply by each preceding integer until you hit one.
  n * (n-1) * (n-2) ... * 3 * 2 * 1
  
  Call the function factorial
  
  factorial(1) = 1
  factorial(2) = 2
  factorial(3) = 6 
*/

function factorial(num) {
  if (num < 2) return 1;
  return num * factorial(num - 1);
}

/* 

  write a function that accepts an array that only contains
  two types of things: numbers and arrays. those nested arrays
  also only contain numbers and other, nested arrays.

  example: nestedAdd([1, 2, [3]]) = 6
           nestedAdd([[[2]], 1, [1, 3]]) = 7
 
 */

function nestedAdd(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    if (Array.isArray(current)) {
      sum += nestedAdd(current);
    } else {
      sum += current;
    }
  }
  return sum;
}
