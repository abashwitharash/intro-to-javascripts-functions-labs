/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));


  //Exercise 2 
function isAdult(number) {
    if (number >= 18) {
        return "Adult";
    } else {
        return "Minor";
    }
}
console.log('Exercise 2 Result:', isAdult(21));

// Exercise 3 Vowels are the letters A, E, I, O, U

function isCharAVowel(character) {
 if (character === "a" || character === "e" || character === "i" || 
    character === "o" || character === "u") {
        return "True"; 
    } else 
    return "false" 
    }
    console.log('Exercise 3 Result:', isCharAVowel("a"));


