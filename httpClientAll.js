//node httpClient.js http://api.twitch.tv/kraken?callback=
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

/* NODE SCHOOL SOLUTION

var http = require('http');

http.get(process.argv[2],function(response){
	response.setEncoding('utf8');
	response.on('data',console.log);
	response.on('error',console.error);
}).on('error',console.error);

// LEOS SOLUTION

var http = require('http');
var fs = require('fs');

http.get(process.argv[2],function(response){
	response.on("data",function(data){
		
			console.log(data.toString());
		
	}

	);
})

function(chunk){
		dados += chunk;
	}



	response.on('end', console.log(dados));


*/