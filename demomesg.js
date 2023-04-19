var http = require('http')
var mes = require('./sayhello');
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write("<b style='font-size:25px;color:blue;'>your mesg is:</b><br>"+
	"<p style='color:red'>"+mes.sayHello()+"</p>");
	res.write("<b>URL Pattern:"+req.url+"</b>");
	res.end();
}).listen(8090)