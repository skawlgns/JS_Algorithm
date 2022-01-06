const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

for (let i = 1; i <= 9; i++) {
  console.log(`${a} * ${i} = ${a * i}`);
}
