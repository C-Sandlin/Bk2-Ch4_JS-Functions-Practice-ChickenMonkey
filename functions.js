/* Practice: ChickenMonkey
Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.

You can start with this simpler version that outputs even numbers to the console and ignores odd numbers. You need to refactor this code to meet the requirements above.

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 2, and check if the remainder is 0
    if (currentNumber % 2 === 0) {
        console.log(currentNumber) // Only 2, 4, 6 will appear
    }
}
*/

// Function to add each element to the DOM //
function printToDoc(text) {
    const printArea = document.querySelector(".printResults");
    const makeP = document.createElement("p");
    const makeT = document.createTextNode(text);
    makeP.appendChild(makeT);
    printArea.appendChild(makeP);
}

// Function to check if number is multiple of 5, 7, or none - if none, print that number //
function chickenMonkey () {
    for (var i = 1; i < 101; i++) {
        if ([i] % 5 === 0) {
            printToDoc("Chicken");
        } else if([i] % 7 === 0) {
            printToDoc("Monkey");
        } else {
            printToDoc([i]);
        }
    }
}

chickenMonkey();

/* Practice: Take a Number - Battle of the Bands
A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

let bandNumber = 1

const takeNumber = function () {
    
        Write your awesome code here. See comments
        below for what should be returned.
    
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console 
*/

let bandNumber = 0;

function BattleOfTheBands (bandName) {
    bandNumber += 1;
    console.log(`${bandName} is band number ${bandNumber}`);
}

BattleOfTheBands("Frankenstein");
BattleOfTheBands("Dogs of Lordtown");
BattleOfTheBands("Septic Orphan");


/********************************************************************* */
/* Your task is to iterate over the array of foods and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked. */

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];



function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);

}
function grillNChill () {
    for (var i = 0; i < foods.length; i++) {
        const currentObject = foods[i];
        grill(currentObject);
    }
    console.log(cookedFood);
}

grillNChill();

