module.exports = function (app, connection) {
    app.get('/', function(request, response){
        response.render('home/index.ejs');
    });
}