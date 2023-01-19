/*
Challenge:

Given a string, you have to return a string in which each character(case-sensitive) is repeated once.

Examples:

*"String" -> "SSttrriinngg"
*"Hello World" -> "HHeelllloo WWoorrlldd"
*"1234!_" -> "11223344!!__  "
*/

//First solution
function doubleChar(str) {
  let newString = "";
  
  for(let i =0; i < str.length; i++){
    newString = str[i] + str[i];
  }
  
  return newString;
}

// Best-practice solution:
const doubleChar = (str) => str.split("").map(c => c + c).join("");

/* METHODS USED:
1. String.prototype.split();
Takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

Example: 
"Programmer: Hello world!".split(" "); 

Output: 
[Programmer:, Hello, world!];

2. Array.prototype.map()
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

Example: 
const str = ['a', 'b', 'c', 'd', 'e'];
str.map(c => c + c);

Output: 
console.log(str);
['aa', 'bb', 'cc', 'dd', 'ee'];

3. Array.prototype.join()
join() method creates and returns a new string by concatenating all of the elements in an array,seperated by a specified separator string.

Example:
const arr = ['Programmer:', 'Hello', 'World!'];
const str = arr.join("~ ");

Output: 
console.log(str);
Programmer:~ Hello~ World!~

Resource: MDN
*/

/*
BREAKDOWN:
1. (str) => str.split("")
    Passed parameter is split by letter and stored in an array.
2. map(c => c + c)
    The array is used with map method to iterate through each element
3.  Each element's value is being concatinated with itself and stored into a new array.
4. .join("") 
    Joins the array into a string
*/