const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const a = Number(input[0]);
const b = Number(input[1]);

const num1 = b % 10;
const num2 = Math.floor((b % 100) / 10);
const num3 = Math.floor(b / 100);

console.log(a * num1);
console.log(a * num2);
console.log(a * num3);
console.log(a * b);
