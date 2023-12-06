const TerrenosModel= require('../models/TerrenosModel');

class TerrenosController{
    static async indexGet(req,res){
        let data =await TerrenosModel.consultar();
        res.send(data);
        }

    static async ItemGet(req,res){
        let id = req.params.id;
        let data = await TerrenosModel.consultarPorId(id);
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
        await TerrenosModel.insertar(data);

    }
}

module.exports=TerrenosController;