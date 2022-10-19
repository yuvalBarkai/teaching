const readline = require("readline-sync");

/* const num1 = readline.questionInt("Enter a number: ");
const num2 = readline.questionInt("Enter a number: ");

console.log(+num1 + num2); */

let input = readline.questionInt("Enter a number: ");
let sum = 0;

while(input != -999){
    sum += input;
    input = readline.questionInt("Enter a number: ");
}
console.log(sum);