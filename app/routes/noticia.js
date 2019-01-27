module.exports = function(application) {  

    application.get('/noticia', function(request, response){

        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.noticiasDAO(connection);

        noticiasModel.getNoticia(function(error, result){
            if (error){
                response.send(error);
            }
            response.render('noticias/noticia.ejs', {noticia : result});

        });
        
    });

};