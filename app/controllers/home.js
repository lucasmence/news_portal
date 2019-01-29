module.exports.index = function(application, request, response) {

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasDAO(connection);

    noticiasModel.getLastFiveNoticias(function(error, result){
        response.render('home/index.ejs', {noticias : result});
    });

    
}