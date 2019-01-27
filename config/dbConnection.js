var mysql = require('mysql');

module.exports = function(){
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
