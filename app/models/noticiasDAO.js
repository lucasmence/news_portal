function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias', callback);
};

NoticiasDAO.prototype.getNoticia = function(callback){
    this._connection.query('select * from noticias where id = 1', callback);
};

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('INSERT INTO NOTICIAS SET ? ',noticia, callback);
}

module.exports = function(){

    return NoticiasDAO;
}