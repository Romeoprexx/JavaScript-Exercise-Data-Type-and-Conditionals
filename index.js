1. //Covert 12 Celsuis to Fahrenheit
/*
* Programming Quiz: Converting Temperatures
*
* The Celsius-to-Fahrenheit formula:
*
*    F = C x 1.8 + 32
*
* 1. Set the fahrenheit variable to the correct value using the celsius variable and the forumla above
* 2. Log the fahrenheit variable to the console
*
*/
/*
* QUIZ REQUIREMENTS
* 1. Your code should have a variable `celsius`
* 2. You code should have a variable `fahrenheit`
* 3. Your variable `celsius` should equal `12`
* 4. Your variable `fahrenheit` should produce the output equal `53.6`
* 5. Your variable `fahrenheit` declaration should use the `celsius` variable
* 6. Your variable `fahrenheit` should have the correct formula
* 7. Your code should log the `fahrenheit` variable
* 8. Your code should not be empty
*/

let celsius = 12;
let fahrenheit = celsius * 1.8 + 32;
console.log(fahrenheit);


2. //Favourite Food
/*
* Programming Quiz: Favorite Food
*/
/*
* QUIZ REQUIREMENTS
* 1. Your code should print a string with your favorite food
* 2. Your code should have the first character capitalized
* 3. Your code must have a `console.log()` function
* 4. Your code should not be empty
*/

let favouriteFood = "Pounded Yam and Egusi";
console.log(favouriteFood);


3.//String Equality
//Directions: Fix the right side expression so it evaluates to true.
"ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal"
/*
* Programming Quiz: String Equality for All
*
* QUIZ REQUIREMENTS
* 1. Your code should have a variable `answer`
* 2. Your code should have "ALL Strings are CrEaTeD equal" on the left side
* 3. Your code should use `==` comparison operator
* 4. The comparison should evaluate to true
* 5. The right side of your expression should match the left side
*/



const answer = "ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal";
console.log(answer);




4. /* All tied up
Directions: Build a single string that resembles the following joke.
Why couldn't the shoes go out and play? They were all "tied" up!
Your joke should take the format of a question and answer. The first line should be a question and the second line should be an answer.
Hint: You will need to use special characters to produce the following output.
/*
* Programming Quiz: All Tied Up
* Quiz Requirements
* 1. Your code should have a variable joke
* 2. Your joke should use only one string
* 3. Your joke should match the expected format
*/


var joke = "What type of bow can never be tied?,\" A Rainbow \"";
console.log(joke);



5. /*Yosa Bosun
Directions: Build a string using concatenation by combining the lines from this famous haiku poem by Yosa Buson.
Blowing from the west
Fallen leaves gather In the east.
Each string should be printed on its own line.
Hint: You will need to use special characters to produce the following output. For a refresher, feel free to review the previous EscapingStrings topic in this lesson.
/*
* Programming Quiz: Yosa Buson
*/
/*
* QUIZ REQUIREMENTS
* 1. Your code should have a variable `haiku`
* 2. Your code should use string concatenation
* 3. Your poem should match the famous haiku poem
*/



let haiku = "Blowing from the west" +"\nFallen leaves gather" +"\nIn the east.";
console.log(haiku);



6. /* What’s my name?
Directions: Create a variable called fullName and assign it your full name as a string.
/*
* Programming Quiz: What's my Name?
*/
/*
* QUIZ REQUIREMENTS
* 1. Your code should have a variable `fullName`
* 2. Your variable `fullName` should be declared using the `var` keyword
* 3. Your variable `fullName` should be a non-empty string
*/
 


var fullName = "Romeo Omoregie";
fullName;




7. /* Out to Dinner
Directions: Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (don't perform the calculation yourself, let JavaScript do it!). Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate. Finally, add the bill and tip together and store it into a variable called total.
Print the total to the JavaScript console.
Hint: 15% in decimal form is written as 0.15_._
TIP: To print out the total with a dollar sign ( $ ) use string concatenation. To round total up by two decimal points use the toFixed() method. To use toFixed() pass it the number of decimal points you want to use. For example, if total equals 3.9860, then total.toFixed(2) would return 3.99. /* * Programming Quiz: Out to Dinner */ /*
* QUIZ REQUIREMENTS * 
1. Your code should have the variables - `bill`, `tip`, and `total` * 
2. Your variables - `bill`, `tip`, and `total` should be declared using the `var` keyword * 
3. Your variable `bill` should be a number, having a value equal to the result of `10.25 + 3.99 + 7.15` * 
4. Your variable `tip` should be a number, having a value equal to 15% of the `bill` * 
5. Your variabe `total` should be a number, having a value equal to the `bill` and `tip` added together * 
6. Your code should print the total to the console
*/


var bill = 10.25 + 3.99 + 7.15;
var tip = bill * 0.15;
var total = bill + tip;
total.toFixed(2);

console.log("$" + total.toFixed(2));



8. /* . Mad Libs
Directions: Mad Libs is a word game where players have fun substituting words for blanks in a story. For this exercise, use the adjective variables below to fill in the blanks and complete the following message.
"The Intro to JavaScript course is __________. James and Julia are so __________. I cannot wait to work through the rest of this __________ content!"
let adjective1 = "amazing"; let adjective2 = "fun"; let adjective3 = "entertaining";
Assign the resulting string to a variable called madLib.
/* * Programming Quiz: MadLibs * /* * 
QUIZ REQUIREMENTS * 
1. Your code should have the variables - `adjective1`, `adjective2`, `adjective3`, and `madLib`. * * 
2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message: * 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!' * * 
3. Your madLib should match the given string * 
4. The madLib variable should be printed to the console */


let adjective1 = "amazing";
let adjective2 = "fun";
let adjective3 = "entertaining";
let madLib ="The Intro to JavaScript course is " + adjective1 + ". James and Julia are so " + adjective2 + ". I cannot wait to work through the rest of this " + adjective3 + " content!";
console.log(madLib);




9. /*  One Awesome message
Directions: Here are two awesome messages:
Hi, my name is Julia. I love cats. In my spare time, I like to play video games. Hi, my name is James. I love baseball. In my spare time, I like to read.
Declare and assign values to three variables for each part of the sentence that changes (firstName, interest, and hobby).
Use your variables and string concatenation to create your own awesome message and store it in an awesomeMessage variable. Finally, print your awesome message to the JavaScript console.
/* * Programming Quiz: One Awesome Message (2-12) */
/* * QUIZ REQUIREMENTS * 
1. Create the following variables: *     - firstName *     - interest *     - hobby * * 
2. Create `awesomeMessage` variable, and set it to a message using string concatenation and the variables above. The `awesomeMessage` variable should use `firstName`, `interest`, and `hobby` * * 
3. The `awesomeMessage` variable should have the correct format, as shown below: * "Hi, my name is _____. I love ______. In my spare time, I like to ______." * * 
4. Print `awesomeMessage` variable to the console using log() method
*/



let firstName = "Romeo";
let Interest = "Football";
let hobby = "watch movies";
let awesomeMessage = "Hi, my name is " + firstName + ". I love " + Interest + ". In my spare time, I like to " + hobby +"."

console.log(awesomeMessage);
    


     //CONDITIONALS EXERCISE

/* 1.  Write an if...else statement that: 
● prints"even"if the number is an even number 
● prints"odd"if the number is an odd number  
/* * Programming Quiz: Even or Odd * * 
Write an if...else statement that prints `even` if the * number is even and 
prints `odd` if the number is odd. * 
* Note - make sure to print only the string "even" or the string "odd" *
* QUIZ REQUIREMENTS *
1. Your code should have a variable `number`, and include an `if...else` statement *
2. Your conditional should use a strict comparison (`===` or `!==`), and usethemodulo( `%` ) operator * 
3. Your code should produce the expected output - "even" or "odd" using console.log() method 
*/  


let number = 2;
if (number % 2 === 0) {
   console.log("Even");
}
 else {
   console.log("Odd");
 }



/* * Programming Quiz: Musical Groups */ /* 
* QUIZ REQUIREMENTS * 
1. Your code should have avariable`musicians`,and include`if...elseif...else`conditional statement * 
2. Your code should produce the expected output, as mentioned above. Read each condition carefully.
*/

let musicians = 1;
if ( musicians <=0 ) {
  console.log("not a group");
}
else if ( musicians === 1) {
    console.log("solo");
}
else if ( musicians === 2) {
    console.log("duet");
}
else if ( musicians === 3) {
    console.log("trio");
}
 else if ( musicians === 4) {
    console.log("quartet") ;
 }
 else {
     console.log("this is a large group");
}





/* 3. * Programming Quiz: Murder Mystery
* QUIZ REQUIREMENTS * 
1. Your code should have a variables - `room`, `suspect`, `weapon`, and `solved` * 
2. Your code should include a conditional statement * 
3. The variable `suspect` should use one of the provided values * 
4. The variable `weapon` should be based on the `room` * 
5. Your code should produce the expected output: __________ did it in the __________ with the __________! * Example: Mr. Parkes did it in the dining room with the knife! * * 
6. For unmatching combination of the suspect and the room, print nothing on the console 
*/



var room = "dinning room";
var suspect = "Mr. Parkes";
var weapon = "";
var solved = false;

if ( room === "ballroom" && suspect === "Mr. Kalehoff") {
    weapon = "poison"; solved = true;
}
else if ( room === "gallery" && suspect === "Ms. Van Cleve") {
    weapon = "trophy"; solved = true;
}
else if ( room === "billiards room" && suspect === "Mrs. Sparr") {
    weapon = "pool stick"; solved = true;
}
else if ( room === "dinning room" && suspect === "Mr. Parkes") {
    weapon = "knife"; solved = true;
}
else {
    console.log("What a mystery !, because no one did it")
}
if ( solved ) {
    console.log(suspect + " did it in the " + room + " with the " + weapon + " !");
}




/* * Programming Quiz - Checking Your Balance */
/* * QUIZ REQUIREMENTS * 
1. Your code should have the variables `balance`, `checkBalance`, `isActive` * 
2. Your code should include an `if...else` conditional statement * 
3. Your code should produce the expected output * 
4. Your code should not be empty * 
5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED. 
*/ 


let balance = 325.001;
let checkBalance = true;
let isActive = false;
balance.toFixed(2);


if (!checkBalance) {
    console.log("Thank you. Have a nice day!");
}
else if (isActive && balance > 0) {
    console.log("Your balance is $" + balance.toFixed(2) + "." );
}
else if (!isActive) {
    console.log("Your account is no longer active");
}
else if (balance === 0) {
    console.log("Your account is empty");
}
else if (balance < 0) {
    console.log("Your account is negative. Please contact bank.")
}






/*
* Programming Quiz: Ice Cream
6
*
* Write a single if statement that logs out the message:
*
* "I'd like two scoops of __________ ice cream in a __________ with __________."
*
* ...only if:
*   - flavor is "vanilla" or "chocolate"
*   - vessel is "cone" or "bowl"
*   - toppings is "sprinkles" or "peanuts"
*
* We're only testing the if statement and your boolean operators.
* It's okay if the output string doesn't match exactly.
*/
/*
* QUIZ REQUIREMENTS
* 1. Your code should have the variables `flavor`, `vessel`, and `toppings`
* 2. Your code should have an `if` statement
* 3. Your code should use logical expressions
* 4. Your code should work with
*  - `flavor=vanilla`, `vessel=cone`, and `toppings=sprinkles`
*  - `flavor=vanilla`, `vessel=cone`, and `toppings=peanuts`
*  - `flavor=vanilla`, `vessel=bowl`, and `toppings=sprinkles`
*  - `flavor=vanilla`, `vessel=bowl`, and `toppings=peanuts`
*
*  - `flavor=chocolate`, `vessel=cone`, and `toppings=sprinkles`
7
*  - `flavor=chocolate`, `vessel=cone`, and `toppings=peanuts`
*  - `flavor=chocolate`, `vessel=bowl`, and `toppings=sprinkles`
*  - `flavor=chocolate`, `vessel=bowl`, and `toppings=peanuts`
*
* 5. Your code should NOT log (print) anything when
*  - the flavor is something other than "vanilla" or "chocolate"
*  - the vessel is something other than "cone" or "bowl"
*  - the toppings is something other than "sprinkles" or "peanuts"
*
* 6. Your code should not be empty
*/


let flavor = "strawberry";
let vessel = "cone";
let toppings = "cookies";

if (( flavor === "chocolate"|| flavor === "vannilla") && (vessel === "cone"|| vessel === "bowl") && (toppings === "peanuts"|| toppings === "sprinkles")) {
   console.log("i'd like two scoop of " + flavor + " ice cream in a " + vessel + " with " + toppings);
}





/*
* Programming Quiz: What do I Wear?
*
* Using if/else statements, create a seriesoflogicalexpressionsthatlogsthesizeofat-shirt based on the measurements of:
*   - shirtWidth
*   - shirtLength
*   - shirtSleeve
*
* Use the chart above to print out one of the following correct values:
*   - S, M, L, XL, 2XL, or 3XL
*/
/*
* QUIZ REQUIREMENTS
* 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
* 2. Your code should include an `if...else` conditional statement
* 3. Your code should use logical expressions
10
* 4. Your code should produce the expected output
* 6. Your code should not be empty
* 7. BE CAREFUL ABOUT THE EXACT CHARACTERS TO BE PRINTED.
*/



var shirtLength = 30;
var shirtSleeve = 8.71;
var shirtWidth = 23;

if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
    console.log("S");
}
else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
    console.log("M");
}
else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
    console.log("L");
}
else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) {
    console.log("XL");
}
else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) {
    console.log("2XL");
}
else if ((shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.13)) {
    console.log("3XL");
}
else {
    console.log("N/A");
}




/*
* Programming Quiz - Navigating the Food Chain
*
* Use a series of ternary operator to set the category to one of the following:
*   - "herbivore" if an animal eats plants
*   - "carnivore" if an animal eats animals
*   - "omnivore" if an animal eats plants and animals
*   - undefined if an animal doesn't eat plants or animals
*
* Notes
*   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
*   - `if` statements aren't allowed ;-)
12
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have the variables `eatsPlants`, `eatsAnimals`
* - Your code should include ternary statements. Do not use if....else statement.
* - Your code should produce the expected output
* - Your code should not be empty
* - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
*/



var eatsPlants = false;
var eatsAnimals = true;

let category = eatsPlants && eatsAnimals ? "omnivore" : ( eatsPlants ? "herbivore" : ( eatsAnimals ? "carnivore" : undefined));
console.log(category);






/*
* Programming Quiz: Back to School
*
* Write a switch statement to set the average salary of a person based on their type of completed education.
*
*/
14
/*
* QUIZ REQUIREMENTS
* - Your code should have the variables `education`, and `salary`
* - Your code should include a switch statement
* - Your code should produce the expected output
* - Your code should not be empty
* - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
*/




var education = "no high school diploma";
let salary = 0;

switch (education) {
    case "no high school diploma": salary = 25636;
        
        break;

    case "a high school diploma": salary = 35256;
        break; 
    case "an Associate degree": salary = 41496;
        break;
    case "a Bachelor degree": salary = 59124;
        break;
    case "a Master's degree": salary = 69732;
        break;
    case "a Professional degree": salary = 89060;
        break;
    case "a Doctoral degree": salary = 84596;
        break;
}

console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year");

