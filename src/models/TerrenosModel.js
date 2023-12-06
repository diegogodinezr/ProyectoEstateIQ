const {connectToMysql}=require('../dbconnection');

class TerrenosModel{
    static async consultar(){
        let db=await connectToMysql();
        let query =db("terrenos");
        return await query;
    }

      static async consultarPorId(id){
        let db=await connectToMysql();
        return await db("terrenos").where('id_terreno',id);
      }

}

module.exports=TerrenosModel;