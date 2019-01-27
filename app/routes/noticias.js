module.exports = function(app, connection) {  

    app.get('/noticias', function(request, response){

        var database = connection();
    
        database.query('select * from noticias', function(error, result){
            if (error){
                response.send(error);
            }
            response.render('noticias/noticias.ejs', {noticias : result});

        });
        
    });

};