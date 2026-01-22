console.log('Hello from app.js! Your JavaScript is connected and running!');
// --- Part 1: Declaring Variables ---
console.log('--- Part 1: Declaring Variables')

// 'let' for values that can change
// We can reassign 'let' variables
let score = 50;
console.log(`Initial score (let): ${score}`);
score = 75;
console.log(`Updated score: ${score}`);

// 'const' for values that should NOT change
const GAME_TITLE = "My Awesome Game";
console.log(`Game Title (const): ${GAME_TITLE}`);
//GAME_TITLE = "Another Awesome Game";
// Comment out above line error

// --- Part 2: Data Types ---
console.log("--- Data Types (using typeof) ---")

let playerName = 'Hero';    // string (text)
let playerHealth = 100;       // number (whole or decimal number)
let isGameOver = false;     // boolean (true or false)

console.log(`${playerName} is a typeof ${typeof playerName}`);
console.log(`${playerHealth} is a typeof ${typeof playerHealth}`);
console.log(`${isGameOver} is a typeof ${typeof isGameOver}`);

// Chase's Variable Rule
// Use const unless you can't than use let

// --- Part 3: Arithmetic Operators ---
console.log("--- Arithmetic Operators (Math!) ---");
const num1 = 10;
const num2 = 3;

console.log(`${num1} + ${num2} = ${num1 + num2}`); // Addition
console.log(`${num1} / ${num2} = ${num1 / num2}`); // Division
console.log(`${num1} % ${num2} = ${num1 % num2}`); // Modulo (remainder)

// --- Part 4: Assignment and Comparison Operators ---
console.log(`--- Assignment and Comparison Operators ---`);
let totalCoins = 20;    // Assignment
totalCoins += 5;        // Addition Assignment operator
console.log(`Total coins after += 5: ${totalCoins}`); // Adds 5 to totalCoins (totalCoins = totalCoins + 5)

let valueA = 5;
let valueB = '5';
// Comparison Operator
console.log(`Strict Equality (===) ${valueA} === ${valueB} is ${valueA === valueB}`);
console.log(`Loose Equality (===) ${valueA} === ${valueB} is ${valueA == valueB}`);
console.log(`Strict Not Equality (!===) ${valueA} !== ${valueB} is ${valueA !== valueB}`);
console.log(`Greater Than ${valueA} > 3 is ${valueA > 3}`);