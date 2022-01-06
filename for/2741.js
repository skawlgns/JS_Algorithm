const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

const a = Number(input);
for (let i = 1; i <= a; i++) {
  console.log(i);
}
