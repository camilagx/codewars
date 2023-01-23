/* Challenge:
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

//First solution
function XO(str) {
  let numOfX = 0;
  let numOfO = 0;
  //go through each element in the string
  for(let letter of str.toLowerCase()){
    //compare if letter is x or o then track amount of x and o's - case insensitive 
    if(letter == 'x'){
      numOfX++;
    }else if(letter == 'o'){
      numOfO++;
    }
  }
  //if total count of x is equal to o, return true
  return (numOfX=== numOfO);
}

//Best practice with Regex
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

//Best Practice
const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

/* Takeaways from first solution:

1. You have to initialize the variable to a number (or zero) before post or pre-incrementing.
  Otherwise, the console will display NaN.
2. Comparing a capital with a lowercase of the same letter using an 'equal to' operator will still return false. 
Ex) 'X' == 'x' //false
  If case insensitive, the trick is to use .toLowerCase() method.

*/

/* METHODS USED:
  1. Array.prototype.filter()
    The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

    Example:
    let nums = [2,3,4,5,8];
    console.log(nums.filter(x => x % 2 === 0)); // [2,4,8];

    console.log(nums); // [2,3,4,5,8] Original array is not mutated
*/