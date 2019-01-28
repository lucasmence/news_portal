module.exports.noticias = function (application, request, response) {
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasDAO(connection);

    noticiasModel.getNoticias(function(error, result){
        if (error){
            response.send(error);
        }
        response.render('noticias/noticias.ejs', {noticias : result});
    });
}

module.exports.noticia = function (application, request, response) {
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasDAO(connection);

    noticiasModel.getNoticia(function(error, result){
        if (error){
            response.send(error);
        }
        response.render('noticias/noticia.ejs', {noticia : result});

    });

}