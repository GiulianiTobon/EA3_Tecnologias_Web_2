const express = require('express');
const {getConnection} = require('./src/DB/conection');
const cors = require('cors');
require('dotenv').config();


const app = express();

app.use (cors 
    ({
        origin: '*'
    })
);

getConnection();

//PARSEO JSON

app.use(express.json());
app.use(express.urlencoded({ extended: false}));


//declaracion de rutas para acceso a controladores
const proyectos = require('./src/routes/ProyectoRoutes');


//aplicacion del midware y routes predefinidos
app.use('/api/proyectos', proyectos);


module.exports = app;