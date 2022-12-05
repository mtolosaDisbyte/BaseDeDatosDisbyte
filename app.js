const express = require('express');
const app = express();
const {join, path} = require("path");
const session = require('express-session');
const method = require('method-override');
const cookie = require('cookie-parser')



app.use(session({
    secret:'ProyectoIndividual',
    resave:false,
    saveUninitialized:false,
}))
app.use(cookie());

app.set("views", join(__dirname, "./views"));

//Template Engine
app.set("view engine", "ejs");

//statics
const {static} = require("express");
app.use(static(join(__dirname, "./public")));

//Routers
const peliculasRouter = require('./routes/peliculas');
const usersRouter = require('./routes/users');

app.listen(3000, () => {
    console.log('listening on port')
})

app.use(express.urlencoded({extended:true}));
app.use('/', peliculasRouter);
app.use('/users', usersRouter);
app.use(express.json());
app.use(method('m'))