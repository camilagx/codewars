/*Challenge:
Create a function with two arguments that will return an array of the first 'n' multiples of x.

Assume both the given number and the number of times to count will be position numbers greater than 0.

Return the results as an array or list (depending on language).

Examples:
  countBy(1,10) === [1,2,3,4,5,6,7,8,9,10];
  countBy(2,5) === [2,4,6,8,10];
*/

//First solution
function countBy(x, n){
  let z = [];
  for(let i = 1; i <= n; i++){
    z.push(x * i);
  }
  return z;
}

/* METHODS USED:
1. Array.prototype.push()
push() method adds one or more elements to the end of an array and returns the new length of the array.

Example:
const arr = [];
arr.push('Hello'); 
arr.push('World'); 

Output:
console.log(arr);
arr['Hello', 'World'];

console.log(arr.push('!'));
//Returns '3'. The new length of array
*/
