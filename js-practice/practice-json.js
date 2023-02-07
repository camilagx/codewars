/* READING JSON AS A STRING
Challenge:
Create a variable called jsObject that is an object parsed from jsonData.

Print out the array of all the children property nested in jsObject. Be sure to use either bracket notation or dot notation to access the nested properties.

*/


//Starter Code
const jsonData = '{ "parent": { "name": "Sally", "age": 45, "children" : [ { "name": "Kim", "age": 3 }, { "name": "Lee", "age": 1 } ] } }';

//Solution
const jsObject = JSON.parse(jsonData);
console.log(jsObject["parent"]["children"]);

/* WRITING A JSON STRING
Challenge:
As a developer, you receive some data in the form of a JSON string in the variable, jsonData. However, the content of jsonData is not completely correct. The age value of the parent property should be 35 instead of 45. Without changing the content of jsonData directly, update the age value and then log a new JSON string with the correct value in the console.

Here is a step-by-step guide to solve this challenge:

Convert jsonData to a JavaScript object using JSON.parse() and save it as a const variable, for instance, jsObject.

Use either the dot, .key, or bracket, ['key'], notation to access the parent property of jsObject followed by the age property and change its value from 45 to 35.

Convert jsObject back to a JSON string using JSON.stringify() and save it as another const variable, for instance, jsObjectToJson.

Log the jsObjectToJson string on the console.
*/

//Starter Code
const jsonData1 = '{"parent":{"name":"Sally","age":45,"children":[{"name":"Kim","age":3},{"name":"Lee","age":1}]}}';

//Solution
const jsonObject = JSON.parse(jsonData1);
jsonObject["parent"]["age"] = 35;

const jsObjectToJson = JSON.stringify(jsonObject);

console.log(jsObjectToJson);