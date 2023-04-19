const prompt = require('prompt-sync')({sigint: true});
const num = prompt("enter number:");
console.log('your number + 4=');
console.log(Number(num) + 4);