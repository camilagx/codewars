/* Question 1: 
Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
*/
let array1 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

let sortedArray = array1.sort((a,b) => a-b);
console.log(sortedArray);

//create empty array that will store all values
//go through the array
//check if the current index value matches the next element
//if it matches, create an array
// store the value in an array

const sortArray = (arr) => {
  return arr.sort((a,b) => a-b);
}

const cleanArray = (arr) => {
  let sortedArray = sortArray(arr);
  let cleanedArray = sortedArray.reduce((accumululator, num, index) => {
    let arr = [];
    if(num === sortedArray[index+1]){
      arr.push
    }
  }, []);
}




