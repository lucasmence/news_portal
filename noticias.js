var http = require('http');

var server = http.createServer( function(request, response){

    var category = request.url;

    if (category == '/tecnologia'){
        response.end('<html><body>Portal de tecnologia</body></html>');
    } else if (category == '/dev'){
        response.end('<html><body>Portal do dev</body></html>');    
    } else {
        response.end('<html><body>Portal de noticias</body></html>');
    }
    
} );

server.listen(3000);