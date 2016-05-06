var fs = require('fs');

var novo =fs.readFileSync(process.argv[2])
// var novo = fs.readFileSync(process.argv[2], "utf8").split('\n').length -1

var arr = novo.toString().split("\n");

console.log(arr.length-1);

