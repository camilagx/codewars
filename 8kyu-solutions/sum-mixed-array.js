/*Challenge:
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

*/

//First solution
function sumMix(x){
  let sum = 0;

  x.forEach((value) =>{
    sum += Number(value);
  });
  
  return sum;
}

//Best-practice solution:
function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}

/* METHODS USED
1. Array.prototype.map()
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

Example: 
const str = ['a', 'b', 'c', 'd', 'e'];
str.map(c => c + c);

Output: 
console.log(str);
['aa', 'bb', 'cc', 'dd', 'ee'];

2. Array.prototype.reduce()
The reduce() method executes a reducer function on each element of the array and returns a single output value.

PARAMETERS:
arr.reduce(callback(accumulator, currentValue), initialValue);

-callback(accumulator, currentValue)
  *accumulator - accumulates the callback's return values
  *currentValue - Current element being passed from the array
-initialValue(optional)
A value that will be passed to callback() on first call.

Example:
Find the sum of the array:
  const arr = [72,25,94,23,39,14];

  let totalOutput = arr.reduce((accumulator, currentValue)=> accumulator + currentValue, 0);

Output:
console.log(totalOutput); // 267

Resource: MDN, programiz
*/