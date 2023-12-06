const UsuariosModel= require('../models/UsuariosModel');

class UsuariosController{
    static async indexGet(req,res){
        let data =await UsuariosModel.consultar();
        res.send(data);
        }

    static async ItemGet(req,res){
        let id = req.params.id;
        let data = await UsuariosModel.consultarPorId(id);
        if(data.length >0){
            res.send(data[0]);
            return;
        }
        res.status(404).send({error:'Not found'});
        
    }

    static async indexPost(req,res){
        let data = {
            'nombre':req.body.nombre
        };
        await UsuariosModel.insertar(data);

    }
}

module.exports=UsuariosController;