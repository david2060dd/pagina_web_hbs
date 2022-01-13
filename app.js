const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'David',
        edad: 20,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    res.end();

}).listen(8000);

console.log('Escuchando en el puerto 8000');