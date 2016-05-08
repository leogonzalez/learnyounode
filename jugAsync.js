var http = require('http');
var dadosA="";
var dadosB="";
var dadosC="";


http.get(process.argv[2],function(response){

	response.on("data",function(chunk){
		dadosA+=chunk;
	});

	response.on("end",function(){
		console.log(dadosA);

		http.get(process.argv[3],function(response){
			
			response.on("data",function(chunk){
				dadosB+=chunk;
			});

			response.on("end",function(){
				console.log(dadosB);
				

				// request 3
				http.get(process.argv[4],function(response){
					response.on("data",function(chunk){
						dadosC+=chunk;
					});
					response.on("end",function(){
						console.log(dadosC);
					});
				});
				// end request 3
			}); // end request 2
		});

	});

});


/* OFICIAL SOLUTION



*/



		
















/*

var http = require('http');
dados = "";

http.get(process.argv[2],function(response){

	response.on('data', function(chunk){	
		dados +=chunk;			
	});
	
	response.on('end', function(){
		console.log(dados.length);	
		console.log(dados);	
	});

});

*/