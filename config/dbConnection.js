var mysql = require('mysql');

/*wrapper*/
var connection = function(){
    console.log('DB Loaded!');
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
    console.log('DB module imported by autoload!');
    return connection;    
}
