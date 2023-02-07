/* Challenge
Create a variable called jsObject that is an object parsed from jsonData.

Print out the array of all the children property nested in jsObject. Be sure to use either bracket notation or dot notation to access the nested properties.

*/

//Starter Code
const jsonData = '{ "parent": { "name": "Sally", "age": 45, "children" : [ { "name": "Kim", "age": 3 }, { "name": "Lee", "age": 1 } ] } }';

//Solution
const jsObject = JSON.parse(jsonData);

console.log(jsObject["parent"]["children"]);
