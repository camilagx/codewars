/* Question 1: 
Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. 

For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
*/

//create empty array that will store all values
//go through the array
//check if the current index value matches the next element
//if it matches, create an array
// store the value in an array
//return sorted array, with matching values grouped into its own array


const sortArray = (arr) => {
  return arr.sort((a,b) => a-b);
}


const cleanArray = (arr) => {
  let sortedArray = sortArray(arr);
  let cleanedArray = [];
  let nestedArr = [];

  for(let i = 0; i < sortedArray.length; i++) {
    if(sortedArray[i] === sortedArray[i+1]) {
      nestedArr.push(sortedArray[i]);
    }else if (sortedArray[i-1] === sortedArray[i]) {
      nestedArr.push(sortedArray[i]);
      cleanedArray.push(nestedArr);
      nestedArr = [];
    }else {
      cleanedArray.push(sortedArray[i]);
    }
  }
  return cleanedArray;
}

//Test #1
let array1 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
cleanArray(array1);

/* OUTPUT
[ [1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591];
*/

//Test #2
let array2 = ['2',10,7,124,'2',7, 10,2,'7',152,'73',2];
cleanArray(array2);

/* OUTPUT
[ ['2','2'], [2, 2], [7, 7], '7', [10, 10], '73', 124, 152];
*/