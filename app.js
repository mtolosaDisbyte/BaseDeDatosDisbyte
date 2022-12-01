const express = require('express');
const app = express();
const {join, path} = require("path")
app.set("views", join(__dirname, "./views"));

//Template Engine
app.set("view engine", "ejs");

//Routers
const peliculasRouter = require('./routes/peliculas');
const usersRouter = require('./routes/users');

app.listen(3000, () => {
    console.log('listening on port')
})

app.use(express.urlencoded({extended:true}));
app.use('/', peliculasRouter);
app.use('/users', usersRouter);