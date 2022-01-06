const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const inputCount = input.length;
let i = 0;
while (i < inputCount) {
  let numbers = input[i].split(" ");
  console.log(Number(numbers[0]) + Number(numbers[1]));
  i++;
}
