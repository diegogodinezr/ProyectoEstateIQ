const {connectToMysql}=require('../dbconnection');

class DepartamentosModel{
    static async consultar(){
        let db=await connectToMysql();
        let query =db("departamentos");
        return await query;
    }
    
      static async consultarPorId(id){
        let db=await connectToMysql();
        return await db("departamentos").where('id_departamento',id);
      }

}

module.exports=DepartamentosModel;