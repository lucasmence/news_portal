var app = require('./config/server.js');

app.get('/', function(request, response){
    response.render('home/index.ejs');
});

app.get('/formulario_inclusao_noticia', function(request, response){
    response.render('admin/form_add_noticia.ejs'); 
});

app.get('/noticias', function(request, response){
    response.render('noticias/noticias.ejs');
});

app.listen(3000, function(){
    console.log('Server ON');
});
