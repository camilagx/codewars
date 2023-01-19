/*
Write a function to split a string and convert it into an array of words.

Examples:
"Arrays are important to master" ==> ["Arrays", "are", "important", "to", "master"];
*/

//First Solution and codewar's top best-practice
function stringToArray(string){
	return string.split(' ');
}

/*METHODS USED:
1. String.prototype.split();
Takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

Example: 
"Programmer: Hello world!".split(" "); 

Output: 
[Programmer:, Hello, world!];

Resource: MDN
*/