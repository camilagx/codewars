/* Challenge:

I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

*/

//First solution
function arrayPlusArray(arr1, arr2) {
  let arr1Total = arr1.reduce((sum, val) => sum + val,0);
  return arr2.reduce((sum,val) => sum + val, arr1Total);
}

//Best-practice solution
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}


/*METHODS USED:
******On best-practice solution *******
1. Array.prototype.concat()
concat() method is used to merge two or more arrays.This method does not change the existing arrays, but instead returns a new array.

Example:
const arr1 = [1,2,3,4]; 
const arr2 = [5,6,7,8];
console.log(arr1.concat(arr2));

Output:
[1,2,3,4,5,6,7,8];

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
*/