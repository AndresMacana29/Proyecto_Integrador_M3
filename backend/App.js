// app.js
require('dotenv').config();
const express = require('express');
const cors= require('cors');
const app = express();
const sequelize = require('./config/database');
const usuarioRoutes = require('./routes/usuarioroutes');
const hotelRoutes = require('./routes/hotelroutes');
const reservaRoutes = require('./routes/reservasRoutes');
const municipioRoutes = require('./routes/municipioRoutes');
 
app.use(
    cors({
        origin:['http://localhost:3001', 
                'http://localhost:3002'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    })
)
app.use(express.json());
 
// Sincronizar la base de datos
sequelize.sync();
 
// Rutas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/hoteles', hotelRoutes);
app.use('/api/municipios', municipioRoutes);
app.use('/api/reservas', reservaRoutes);
 
// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
