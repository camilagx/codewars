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

/* Takeaways:
1. You have to initialize the variable to a number (or zero) before post or pre-incrementing.
  Otherwise, the console will display NaN.
2. Comparing a capital with a lowercase of the same letter using an 'equal to' operator will still return false. 
Ex) 'X' == 'x' //false
  If case insensitive, the trick is to use .toLowerCase() method.

*/