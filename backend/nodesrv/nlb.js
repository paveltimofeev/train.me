var http = require('http');


var dataNodes = ['https://www.google.ru/search?q=']
var dataNodes1 = ['http://localhost:9202/',
				 'http://localhost:9203/',
				 'http://localhost:9204/',
				 'http://localhost:9205/',
				 'http://localhost:9206/' ];

// ask ELK for data-nodes
/*
	var options = {
	  hostname: 'localhost',
	  port: 8088,
	  path: '/_cluster/stats/',
	  method: 'GET'
	};

	http.request(options, function(res) {

	  console.log('STATUS: ' + res.statusCode);
	  console.log('HEADERS: ' + JSON.stringify(res.headers));

	  res.setEncoding('utf8');

	  res.on('data', function (chunk) {

	    //console.log('BODY: ' + chunk);
		dataNodes.push("hostname1:8088");
		dataNodes.push("hostname2:8088");
		dataNodes.push("hostname3:8088");

	  });

	}

*/	

var http = require('http');
var util = require('util');

// response redirect to different nodes
http.createServer(OnRequest).listen(9000);
console.log('Server running at http://localhost:9000/');

// sometimes update data-nodes

var nodeIndex = 0;
function OnRequest(req, res) {

	if(req.method == 'PUT') {
	
		
		var nodeUrl = getRandomNode() + req.url;
		
		res.writeHead(302, {'Location': nodeUrl});
        res.end();

	}

	if(req.method == 'GET') {
	
		//console.log(util.inspect(req));
		//console.log(req.url);
 		//res.end( '[' + getRandomNode() + '] Found data-nodes: ' +  dataNodes);
		
		var nodeUrl = getRandomNode() + req.url;
		console.log('redirect to: ' + nodeUrl);
		res.writeHead(302, {'Location': nodeUrl});
		res.end('ok');
	}
}

function getRandomNode() {
  return dataNodes[ Math.floor(Math.random() * dataNodes.length) ];
}