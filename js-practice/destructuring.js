/* Challenge #1:
Destructure the items from the colors array into new variables color1, color2, and color3. If done correctly, the colors should be printed in this order: ‘blue’, ‘red’, ‘purple’.
*/

//Starter Code
let colors = ['blue','red','purple'];

// Destructure here
//Solution
let [color1, color2, color3] = colors;
console.log(color1, color2, color3);

/* Challenge #2:
Destructure the items from the planets object so that they are named x, y, and z. If done correctly, the planets should be printed in this order: ‘Saturn’, ‘Mars’, ‘Neptune’.
*/

//Starter Code
let planets = { x: 'Saturn', y: 'Mars', z: 'Neptune' };

// Destructure here
let {x,y,z} = planets;
console.log(x, y, z);

/* Challenge #3:
Define a function named printPlantInfo() so that this code logs the string: ‘The Prairie Rose, or Rosa arkansana, is in the kingdom Plantae’.

Make sure to use destructuring for the function’s parameters.
*/