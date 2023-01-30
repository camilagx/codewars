/*  Challenge:
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/

//First Solution
function longest(s1, s2) {
  //Turn into an array
  let currentLetters = s1.concat(s2).split('');
  let sortedLetters = [];

  for(let letter of currentLetters){
    if(!(sortedLetters.includes(letter))){
      sortedLetters.push(letter);
    }
  }

  return sortedLetters.sort().join('');
}

//Best practice
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

//2nd best practice
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}