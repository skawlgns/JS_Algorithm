const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

let i = 0;
while (i <= input.length - 1) {
  let a = Number(input[i].split(" ")[0]);
  let b = Number(input[i].split(" ")[1]);

  if (a !== 0 || b !== 0) {
    console.log(a + b);
  } else {
    break;
  }
  i++;
}
