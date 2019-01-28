module.exports.formulario_inclusao_noticia = function(application, request, response) {
    response.render('admin/form_add_noticia.ejs', {validacao : {}, noticia : {}});
}

module.exports.noticias_salvar = function(application, request, response) {
    var noticia = request.body;

    request.assert('titulo','You need put a title dude!').notEmpty();
    request.assert('resumo','The resume must have 10 to 45 characters!').len(10,45);
    request.assert('autor','Author is necessary!').notEmpty();
    request.assert('data_criacao','Date cannot be empty!').notEmpty();
    request.assert('noticia','Where is the text?! Please write it here!').notEmpty();

    var errors = request.validationErrors();

    if (errors){
        response.render('admin/form_add_noticia.ejs', {validacao : errors, noticia : noticia});
        return;
    }

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function(error, result){
        if (error){
            response.send(error);
        }
        response.redirect('/noticias');
    });
}