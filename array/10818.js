const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const a = input[0];
const b = input[1].split(" ").map((v) => Number(v));

let min = b[0];
let max = b[0];

for (let i = 1; i < a; i++) {
  if (max < b[i]) {
    max = b[i];
  }

  if (min > b[i]) {
    min = b[i];
  }
}

console.log(`${min} ${max}`);
