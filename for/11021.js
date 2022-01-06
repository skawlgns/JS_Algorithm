const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let a = input[i].split(" ");
  console.log(`Case #${i}: ${Number(a[0]) + Number(a[1])} `);
}
