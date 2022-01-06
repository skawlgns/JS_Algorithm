const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

b -= 45;

if (b < 0) {
  b += 60;
  a--;

  if (a === -1) {
    a = 23;
  }
}

console.log(a + " " + b);
