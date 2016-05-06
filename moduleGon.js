module.exports = function (dirname,fext, callback){
var fs = require('fs');
var lista = fs.readdir(dirname,function(err,val){
	if (err) return callback(err);
		
	val.forEach(function(valor){
		if (valor.split(".")[1] == fext){
			console.log(valor);
		}
	});	

});

}


