const express = require('express');
const router = express.Router();
const municipioController = require('../controllers/municipioController');
 
//Ruta para ver todos los municipios
router.get('/', municipioController.getAllTown2);
module.exports = router;