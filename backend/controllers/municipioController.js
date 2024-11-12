const  Municipio  = require('../models/municipio');
const  Departamento  = require('../models/departamento');
// Obtener todos los municipios por departamento
exports.getAllTown = async (req, res) => {
    try {
        const municipios = await Municipio.findAll(
            {
                include: [{
                    model: Departamento,
                    as: 'departamento',
                    attributes: ['nombre'], // Solo traer el nombre del departamento
                    where:{pais_id:57}
                }],
                attributes: ['id', 'nombre'] // Solo traer los campos necesarios de municipio
            }
 
        );
       
        res.json(municipios);
    } catch (error) {
        res.status(500).json({ message: error.message + "Este es el error"});
    }
};


exports.getAllTown2 = async (req, res) => {
    try {
        const municipios = await Municipio.findAll(
            
 
        );
       
        res.json(municipios);
    } catch (error) {
        res.status(500).json({ message: error.message + "Este es el error"});
    }
};