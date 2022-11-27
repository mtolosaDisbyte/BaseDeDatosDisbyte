const express = require('express');
const path = require('path');
const home = require('.')

const peliculasRouter = require('./routes/peliculas');
const homePage = require('./routes/home')

const app = express();

app.listen(3000, () => {
    console.log('listening on port')
})


app.use('/', homePage)
app.use('/peliculas', peliculasRouter)