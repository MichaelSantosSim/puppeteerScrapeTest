const http = require('https');
const fs = require('fs');

module.exports = function(url, fileName){


	return new Promise((resolve, reject) => {

		const request = http.get(url, function(response) {
		  if(response.statusCode != 200){
		  	console.log(`error: ${url} - statusCode: ${response.statusCode}`);
		  	reject();
		  }else{
		  	const file = fs.createWriteStream(fileName);
		  	response.pipe(file);
		  	console.log(`downloaded ${url}`);	
		  	resolve();
		  }
		})
		.on('error', err => {
			console.log(`Error downloading ${url} ${err}`);
			reject();
		});

	});

};