const {Schema, model} = require('mongoose');


const EtapasSchema = Schema({

    nombre:{
        type:String,
        required: true,
        unique: true,
        enum:['Anteproyecto','Entrega Parcial 1', 'Entrega Parcial 2','Entrega Final']
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

module.exports=model('Etapa',EtapasSchema);

