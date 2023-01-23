/* Challenge:
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

*/

//First Solution
function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a,b) => a-b);
  return numbers[0] + numbers[1]; 
}

/* More detailed of what's happening with sort method. Asc order
function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a,b) => a-b);
  return numbers[0] + numbers[1]; 
}
*/


/* METHODS USE:
1. Array.prototype.sort()
The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. 
Default sort order: Ascending

Example:
let nums = [6,346,23,1];
console.log(`Array unsorted: ${nums}`); // Array unsorted: [6,346,23,1] 

console.log(nums.sort()); // [1, 6, 23, 346]
console.log(`Array after sort: ${nums}`); // Array after sort: 1,6,23,346

Resource: MDN
*/