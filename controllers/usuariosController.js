const db = require('../database/models');

const controller = {
    registrar: (req, res) => {
        return res.render('registrar');
    },
    crear:(req,res) => {
        db.users.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        })
        return res.redirect("/users/login")
    },
    login: (req, res) => {
        return res.render('iniciarSesion');
    },
    acceso:(req,res) => {
        db.users.findOne({where:{email:req.body.email}})
            .then((user) => {
                req.session.user = user
                console.log(user);
                if (req.body.cookie){
                    res.cookie('user', req.body.email,{maxAge: 1000 * 60 * 10})
                }
                return res.redirect('/')

            })
    },
    logout: (req,res) => {
        delete req.session.user
        res.clearCookie('user');
        return res.redirect('/')
    },
}

module.exports = controller;