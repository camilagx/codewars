/*Challenge:

It's pretty straightforward. your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

*/

//first solution
function removeChar(str){
  return str.substring(1,str.length-1);
};

//Best-practice solution:
function removeChar(str){
  return str.slice(1, -1);
}

/* METHOD USED:
1. String.prototype.slice()
Extracts a section of a string and returns it as a new string, without modifying the original string

Parameters:
slice(indexStart)
slice(indexStart, indexEnd):

*indexStart
The index of the first character to include in the returned substring.

*indexEnd (optional)
The index of the first character to exclude from the returned substring.
  *Negative indexes count backwards from the end of the string

Resource: mdn

EXPLANATION: 
return str.slice(1, -1);

The slice method returns a new string starting at index 1 and ending at index -1 (2nd to last index).
*/