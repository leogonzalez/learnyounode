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