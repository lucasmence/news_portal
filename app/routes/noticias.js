module.exports = function(application) {  

    application.get('/noticias', function(request, response){

        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.noticiasDAO(connection);

        noticiasModel.getNoticias(function(error, result){
            if (error){
                response.send(error);
            }
            response.render('noticias/noticias.ejs', {noticias : result});
        });      
    });
};