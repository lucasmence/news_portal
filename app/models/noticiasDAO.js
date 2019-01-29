function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias order by data_criacao desc', callback);
};

NoticiasDAO.prototype.getNoticia = function(id, callback){
    this._connection.query('select * from noticias where id = '+ id.id, callback);
};

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('INSERT INTO NOTICIAS SET ? ',noticia, callback);
}

NoticiasDAO.prototype.getLastFiveNoticias = function (callback){
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}

module.exports = function(){

    return NoticiasDAO;
}