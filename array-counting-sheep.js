/*Challenge
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

*/

//First solution
function countSheeps(arrayOfSheep) {
  let totalOfSheep = 0;
  arrayOfSheep.forEach(x =>{
    if(x === true){
      totalOfSheep++;
    }
  })
  return totalOfSheep;
}

//Best-practice solution
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

/*METHODS USED:
1. Array.prototype.filter()
The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

Example:
const arr = ['Arrays', 'are', 'important', 'to', 'master!'];
const result = arr.filter(elementVal => elementVal.length > 6);

Output:
console.log(result);
['Arrays','important','master!];
l
2. Array.prototype.forEach()
The forEach() method executes a provided function once for each array element.

Example:
const arr = [1,2,3,4,5];
arr.forEach(x => console.log(x));

Output:
1
2
3
4
5

Resources: MDN
*/