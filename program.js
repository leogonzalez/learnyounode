
var total = 0;

for (var t = 2; t<process.argv.length; t++){
	total +=+process.argv[t];
}
console.log(total);