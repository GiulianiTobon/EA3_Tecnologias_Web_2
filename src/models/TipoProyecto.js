const {Schema, model} = require('mongoose');


const tipoProyectoSchema = Schema({

    nombre:{
        type:String,
        required: true,
        enum:['Ensayo', 'Articulo', 'Monografía', 'Trabajo final de pregrado', 'Trabajo final de especialización']
    },
    fechaCreacion: {
        type: Date,
        default: new Date(),
    },
    fechaActualizacion: {
        type: Date,
        default: new Date(),
    }
});

module.exports = model ('TipoProyecto', tipoProyectoSchema);