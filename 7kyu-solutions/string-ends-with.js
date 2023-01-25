/* Challenge:
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

*/

//First Solution
function solution(str, ending){
  return str.endsWith(ending);
} 

/* METHODS USED:
  1. String.prototype.endsWith()
  The endsWith() method determines whether a string ends with the characters of a specified string.

  example)
  let jobTitle = 'Software Engineer';
  console.log(jobTitle.endsWith('Engineer));

  output: true

  Resource: MDN
*/