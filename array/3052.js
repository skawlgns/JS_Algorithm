const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const numbers = [];
input.forEach((n) => numbers.indexOf(n % 42) === -1 && numbers.push(n % 42));
console.log(numbers.length);
