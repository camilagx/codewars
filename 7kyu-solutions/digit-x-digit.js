/* Challenge:
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-35)

Note: The function accepts an integer and returns an integer.

Happy Coding!


*/

//First Solution
function squareDigits(num){
  num += '';
  let squaredDigits = 0;
  
 for(let digit of num){
   squaredDigits = squaredDigits + Math.pow(digit,2) + '';
 }
  return Number(squaredDigits);
}


//Best Practice
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}

//2nd Best Practice
function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
}