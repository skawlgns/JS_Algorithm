const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const a = Number(input[0]);

let sum = 0;
for (let i = 1; i <= a; i++) {
  sum += i;
}
console.log(sum);
