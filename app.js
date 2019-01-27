var app = require('./config/server.js');

var connection = require('./config/dbConnection.js');
connection();

var rotaNoticias = require('./app/routes/noticias.js')(app,connection);

var rotaHome = require('./app/routes/home.js');
rotaHome(app, connection);

var rotaForm = require('./app/routes/formulario_inclusao_noticia.js');
rotaForm(app, connection);

app.listen(3000, function(){
    console.log('Server ON');
});
