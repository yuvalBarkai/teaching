const readline = require("readline-sync");

/* const num1 = readline.questionInt("Enter number: ");
const num2 = readline.questionInt("Enter number: ");

console.log(num1 + num2); */

let num = readline.questionInt("Enter number: ");
let sum = 0;

while (num != -999) {
    sum += num;
    num = readline.questionInt("Enter number: ");
}

console.log(sum);


/* const num1 = readline.questionInt("Enter first number: ");
const operator = readline.question("Enter Operator: ");
const num2 = readline.questionInt("Enter second number: ");

console.log(eval(num1 + operator + num2)); */