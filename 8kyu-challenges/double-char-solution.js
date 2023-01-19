/*
Given a string, you have to return a string in which each character(case-sensitive) is repeated once.

Examples:

*"String" -> "SSttrriinngg"
*"Hello World" -> "HHeelllloo WWoorrlldd"
*"1234!_" -> "11223344!!__  "

*/
function doubleChar(str) {
  let newString = "";
  
  for(let i =0; i < str.length; i++){
    newString = str[i] + str[i];
  }
  
  return newString;
}


// Refactor
/* Codewar top best-practice solution:

const doubleChar = (str) => str.split("").map(c => c + c).join("");

Breakdown:

1. (str) => str.split("")
    Passed parameter is split by letter and stored in an array.
2. map(c => c + c)
    The array is used with map method to iterate through each element
3.  Each element is being concatinated with itself and stored into a new array.
4. .join("") 
    Joins the array into a string
*/