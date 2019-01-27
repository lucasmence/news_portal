module.exports = function(application) {  

    application.get('/noticia', function(request, response){

        var connection = application.config.dbConnection();
        var noticiasModel = application.app.models.noticiasModel();

        noticiasModel.getNoticia(connection, function(error, result){
            if (error){
                response.send(error);
            }
            response.render('noticias/noticia.ejs', {noticia : result});

        });
        
    });

};