const express = require('express');
const router = express.Router();

//Controller
const usersController = require('../controllers/usuariosController')

//Registro
router.get('/registrar', usersController.registrar);
router.post('/registrar', usersController.crear);

//Login
router.get('/login', usersController.login);
router.post('/acceso', usersController.acceso);

module.exports = router;

