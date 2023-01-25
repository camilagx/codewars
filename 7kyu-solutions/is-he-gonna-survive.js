/* Challenge:

A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)

*/

// Solution
function hero(bullets, dragons){
  //takes 2 bullets to kill a dragon
  return bullets >= dragons * 2;
  }

/* Logic
If 2 bullets kill a dragon, the number of bullets the hero must carry is 2 times the amount of dragon or more.

*/