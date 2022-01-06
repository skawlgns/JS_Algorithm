const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const result = String(input[0] * input[1] * input[2]);

for (let i = 0; i <= 9; i++) {
  console.log(result.split(i).length - 1);
}
