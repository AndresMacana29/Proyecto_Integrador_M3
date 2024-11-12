const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');
const authenticateToken = require('../middleware/authMiddleware');
 
// Crear un nuevo hotel (solo administrador)
router.post('/', authenticateToken, hotelController.createHotel);
 
// Obtener todos los hoteles (para todos los usuarios)
router.get('/',authenticateToken,hotelController.getAllHotels);



module.exports = router;