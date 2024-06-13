const{Schema,model} =  require('mongoose');

const UniversidadSchema = Schema({

    nombre:{
        type:String,
        required: true
    },
    direccion:{
        type:String
    },
    telefono:{
        type:String,
        required: true
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

module.exports = model('Univesidad',UniversidadSchema);