const {connectToMysql}=require('../dbconnection');

class CasasModel{
    static async consultar(){
        let db=await connectToMysql();
        let query =db("casas");
        return await query;
    }
    
      static async consultarPorId(id){
        let db=await connectToMysql();
        return await db("casas").where('id_casa',id);
      }

}

module.exports=CasasModel;