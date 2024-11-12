const  Hotel  = require('../models/hotel');
const Usuario = require('../models/usuario');
 
 
// Crear un nuevo hotel (solo administrador)
exports.createHotel = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.userId, { attributes: { exclude: ['clave'] } });
 
        if (usuario.tipo !== 'administrador') return res.status(403).json(
            { message: 'Usuario no tiene privilegios para crear hoteles' }
            ); // Solo administradores pueden crear hoteles
 
        const {municipio_id,nombre, direccion, clasificacion, descripcion, imagen } = req.body;
        //nombres del archivo JSON que se creara en el POSTMAN, deben ser iguales.

        const hotel = await Hotel.create({
            municipio_id,
            nombre,
            direccion,
            clasificacion,
            descripcion,
            imagen,
            estado: 'A' // Activo por defecto
        });
       
        res.status(201).json({ message: 'Hotel registrado exitosamente',hotel });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
 
// Obtener todos los hoteles (para todos los usuarios)
exports.getAllHotels = async (req, res) => {
    try {
        const hoteles = await Hotel.findAll();
       
        res.json(hoteles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};