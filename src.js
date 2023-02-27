var http = require('http'); 
let olderInfo = '';
var server = http.createServer(function (req, res) { 
   var clientIp = req.connection.remoteAddress;
   olderInfo += "Your IP address is " + clientIp +'\n'
   res.end(olderInfo); 
}); 
server.listen(3000); 
console.log("Server is running at port 3000...");