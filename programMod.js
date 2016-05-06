var expo = require('./moduleGon.js');
expo(process.argv[2],process.argv[3],function(err,list){
	if (err) return console.error('There was an errer:', err);
	list.forEach(function(va){
		console.log(va);
	});
});