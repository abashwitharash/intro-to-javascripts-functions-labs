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


  //Exercise 2 isAdult 
function isAdult(number) {
    if (number >= 18) {
        return "Adult";
    } else {
        return "Minor";
    }
}
console.log('Exercise 2 Result:', isAdult(21));

// Exercise 3 - Vowels are the letters A, E, I, O, U

function isCharAVowel(character) {
 if (character === "a" || character === "e" || character === "i" || 
    character === "o" || character === "u") {
        return "True"; 
    } else 
    return "false" 
    }
    console.log('Exercise 3 Result:', isCharAVowel("a"));

// Exercise 4 generate email

function generateEmail(fullName, emailAddress) {
    return `${fullName}${emailAddress}`;
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

//Exercise 5 greetuser 

function greetUser(Name, timeOfDay) {
    if (timeOfDay === "morning") {
        return `Good ${timeOfDay}, ${Name}`;
    } else if (timeOfDay === "afternoon") {
        return `Good ${timeOfDay}, ${Name}`;
    } else {
        return `Good evening, ${Name}`
    }
    }
    console.log('Exercise 5 Result:', greetUser("Sam", "afternoon"));

//Exercise 6 max of 3

function maxOfThree(numberOne, numberTwo, numberThree) {
    if (numberOne > numberTwo && numberOne > numberThree) {
        return `${numberOne}`; 
    } else if (numberTwo > numberOne && numberTwo > numberThree) {
        return `${numberTwo}`; 
    } else {
        return `${numberThree}`;
    
    }
    }
    console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

    //Exercise 7 calculate tip 

       function calculateTip(billAmount, tipPercentage) {
        let tip = (billAmount * (tipPercentage/100)); 
        return tip; 
       }
console.log('Exercise 7 Result:', calculateTip(50, 20));


