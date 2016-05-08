var http = require('http');
var results = ["","",""];
var count = 0;
var dados = '';


function printResults(){
	[0,1,2].forEach(function(ind){
		console.log(results[ind]);
	});
}


function httpGet(index){

	http.get(process.argv[2+index],function(response){

		response.on("data",function(chunk){
			results[index]+=chunk;
		});

		response.on("end",function(){
			count ++

			if (count==3){
				printResults();
			}

		});

	});

}

[0,1,2].forEach(function(indio){
	httpGet(indio);
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