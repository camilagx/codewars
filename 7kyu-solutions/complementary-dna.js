/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

// Initial solution
function dnaStrand(dna){
    let complementaryDna;
    //loop through the dna string
    for(const letter of dna) { 
      // check if c or g
      // if c or g, switch the letters
      //check if a and t
      // if c or g, switch letters
       switch (letter) {
           case 'C': 
            complementaryDna += 'G';
            break;
           case 'G':
            complementaryDna += 'C';
            break;
           case 'A':
            complementaryDna += 'T';
            break;
           case 'T':
            complementaryDna += 'A';
            break;
       }
    }
    //Return new value
    return complementaryDna;
  29
  }
  
  /* What went wrong: Line 15
  When you don't initialize a variable in JS, it will assign it as undefined. 
  At the first concatenation, when I did complementaryDna += 'G', it became undefinedG on the first iteration */
  
  // New Solution
  function dnaStrand(dna){
      //Tells JS this variable is a string
      let complementaryDna ="";
      //loop through the dna string
      for(const letter of dna) { 
        // check if c or g
        // if c or g, switch the letters
        //check if a and t
        // if c or g, switch letters
         switch (letter) {
             case 'C': 
              complementaryDna += 'G';
              break;
             case 'G':
              complementaryDna += 'C';
              break;
             case 'A':
              complementaryDna += 'T';
              break;
             case 'T':
              complementaryDna += 'A';
              break;
         }
      }
      //Return new value
      return complementaryDna;
    29
    }
  