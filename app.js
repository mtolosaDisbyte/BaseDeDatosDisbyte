const express = require('express');
const app = express();
const {join, path} = require("path")
app.set("views", join(__dirname, "./views"));
app.set("view engine", "ejs");

const peliculasRouter = require('./routes/peliculas');


app.listen(3000, () => {
    console.log('listening on port')
})

app.use(express.urlencoded({extended:true}));
app.use('/', peliculasRouter)