const {validationResult} = require('express-validator');
const Proyecto = require('../models/Proyecto');
const Cliente = require('../models/Clientes')
const TipoProyecto = require('../models/TipoProyecto')
const Universidad = require('../models/Universidad')
const Etapa = require('../models/Etapa')


const getProyectos = async function(req, res){
    
    try{
        console.log("Peticion realizada a ...")
        const proyectos = await Proyecto.find();
        res.send(proyectos)
    }catch (e){
        return res.status(500).json({
            message: e
        })
    }
}

const postProyectos = async function(req, res){

    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ mensaje: errors.array() });
        }

        const body = req.body; 
        const proyecto = new Proyecto()

        proyecto.numero = body.numero;
        proyecto.titulo = body.titulo;
        proyecto.fechaIniciacion = body.fechaIniciacion;
        proyecto.fechaEntrega = body.fechaEntrega;
        proyecto.valor = body.valor;
        
        const cliente = await Cliente.findOne({nombre : body.cliente})
        if(cliente){
            proyecto.cliente = cliente.id;
            proyecto.nombreCliente = cliente.nombre
        }

        const tipoProyecto = await TipoProyecto.findOne({nombre : body.tipoProyecto})
        if(tipoProyecto){
            proyecto.tipoProyecto = tipoProyecto.id;
            proyecto.nombreTipo = tipoProyecto.nombre;
        }

        const universidad = await Universidad.findOne({nombre : body.universidad})
        if(universidad){
            proyecto.universidad = universidad.id;
            proyecto.nombreUniversidad = universidad.nombre;
        }

        const etapa = await Etapa.findOne({nombre : body.etapa})
        if(etapa){
            proyecto.etapa = etapa.id;
            proyecto.nombreEtapa = etapa.nombre;
        }
        
        proyecto.save();
        await res.status(201).json(proyecto)
    }catch(e){
        return res.status(500).json({
            message: e
        })
    }

}

const putProyectos = async function(req,res){

    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            res.status(400).json({mensaje: errors.array()})
        }

        const proyecto = await proyecto.findOneAndUpdate(
            { nombre: req.params.nombre }, // Filtro para por su nombre
            {
                nombre: req.body.nombre,
                email: req.body.email,
                fechaActualizacion: new Date()
            },
            {new: true}
        );
        res.send(proyecto)
    }catch(e){
        return res.status(500).json({
            message: e
        })
    }
}


module.exports = {
    getProyectos,
    postProyectos,
    putProyectos
}