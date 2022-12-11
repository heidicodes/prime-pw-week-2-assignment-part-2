// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to Dane.
// Then we create a conditional if name is "Mary" then the indicated phrase "Hi, Mary!" will log.
// Next an else statement is incremented to indicate that if the variable 'name' is not set to 'Mary' then "How do you do?" will be logged.
// "How do you do?" will be logged in the console because 'name' is set to 'Dane'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We made a boolean called "secret" and set it to nothing; it is false.
// We made a variable called "code" and set it to 123 as a number.
// We created an if conditional evaluating if our variable 'code' is equal to 123,
// 'secret' is assigned the string value "super" & variable 'code' is set to its own value multiplied by 2.
// Then, if our variable code's value is > 250, variable 'secret' is set to "duper"
// Lastly, we will console log the value of 'secret' after the if-statements have been evaluated in order.
// The console will log "super".

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)
*/


// 3. WRITE YOUR DESCRIPTION HERE
// We created a boolean, 'isStudent' and set it to true, we create variables 'age' and 'zip' and set their respective values as numbers.
// Next, we make a compound conditional to evaluate that if our boolean is true AND our variable 'zip' > 80000,
// we log "You're a student on the West Coast!"; Nothing will be logged here since NOT both are true.
// Then 'else if' statements are created to indicate that, if not both of these things are truthy,
// Then, the next conditional will be evaluated -- if 'isStudent' equals false OR 'age' < 30, we log "What are your hobbies?"
// Since the first criteria is falsey and the second is truthy, "What are your hobbies?" will be logged.
// Then we create another 'else-if' statement evaluating only one criteria, if 'isStudent' is equal to true,
// we will log "Welcome to Prime!"
// Otherwise, if none of this is truthy, we will log "How about the weather?"

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

