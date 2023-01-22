/* Challenge:
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

*/

//First Solution
function repeatStr(n,s){
  let newString = "";

  for(let i = 0; i < n; i++){
    newString += s;
  }
  return newString;
}

//Best Praction
function repeatStr(n, s){
  return s.repeat(n);

}

/* METHODS USED:
  1. String.prototype.repeat()
  The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

  Example: 
  'abc'.repeat(3);

  Output:
  'abcabcabc'

  Resource: MDN
*/