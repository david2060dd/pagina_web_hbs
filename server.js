const express = require('express');
const { render } = require('express/lib/response');
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/acerca', (req, res) => {
    res.render('acerca', {
        titulo: "Acerca"
    });
});

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});