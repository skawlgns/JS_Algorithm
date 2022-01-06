const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const num = input.map((v) => Number(v));

const max = Math.max(...num);

const index = num.indexOf(max);

console.log(max);
console.log(index + 1);
