const express = require('express');
const router = express.Router();
const peliculasController = require('../controllers/peliculasController');

router.get('/', function(res, res){
    res.send('hola')
})

module.exports = router;