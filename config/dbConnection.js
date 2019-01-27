var mysql = require('mysql');

/*wrapper*/
var connection = function(){
    return mysql.createConnection(
        {
            host : 'lucasmence.ddns.net',
            user : 'mence',
            password : '21021996',
            database : 'portal_noticias',
            insecureAuth : 'true'
        }
    );
}

module.exports = function(){
    return connection;    
}
