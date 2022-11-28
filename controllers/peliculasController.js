let db = require('../database/models');

let peliculasController = {
    crear: function (req, res) {
        db.Genero.findAll()
            .then(function (generos) {
                return res.render('creacionPeliculas', {generos:generos});
            })
    },
    guardado: function (req, res) {
        db.Pelicula.create({
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.fecha_estreno,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating: req.body.rating,
        })
    },
    listado: function (req, res) {
        db.Pelicula.findAll()
            .then(function (peliculas){
                res.render('listadoPeliculas', {peliculas:peliculas});
            })
    },
    detalle: function (req, res) {
        db.Pelicula.findByPk(req.params.id, {
            include: [{association: 'genero'}, {association: 'actores'}]
        })
            .then(function (pelicula) {
                res.render('detallePelicula', {pelicula:pelicula});
            })
            
    },
    editar: async function (req, res) {
        try {
            let pedidoPelicula = await db.Pelicula.findByPk(req.params.id);

        let pedidoGeneros = await db.Genero.findAll()

        Promise.all([pedidoPelicula, pedidoGeneros])
            .then(function([pelicula, generos]) {
                res.render('editarPelicula', {pelicula:pelicula, generos:generos});
            })
        }catch(error){
            console.log(error)
        }
    },
    actualizar: function (req, res) {
        console.log(req.query)
        db.Pelicula.update({
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.fecha_estreno,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating: req.body.rating,
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect("/" + req.params.id)
    },
    borrar: function (req, res) {
        db.Pelicula.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/");
    }
}

module.exports = peliculasController;