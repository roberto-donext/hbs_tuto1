const http = require('http')


http.createServer((req, res) => {

    res.writeHead(200, { 'content-type': 'application/json' });


    let respuesta = {
        name: "pepe"

    }



    //res.write('hola mundo')
    res.write(JSON.stringify(respuesta))
    res.end()

}).listen(8080);

console.log('escuchando el puerto 8080');