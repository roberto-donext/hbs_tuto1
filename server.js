const express = require('express')
const app = express()

const hbs = require('hbs');

require('./hbs/helper');

app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials', function(err) {});

app.get('/', (req, res) => {
    res.render('home', {
        nombre: "Roberto"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {

    })
})


const port = process.env.PORT || 3000;



app.listen(port, () => {
    console.log(`escuchando en puerto ${port}`);
});