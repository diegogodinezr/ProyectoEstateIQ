const {connectToMysql}=require('../dbconnection');

class UsuariosModel{
    static async consultar(){
        let db=await connectToMysql();
        let query =db("usuarios");
        return await query;
    }
      static async consultarPorId(id){
        let db=await connectToMysql();
        return await db("usuarios").where('id_usuario',id);
      }

      static async insertar(usuario){
        let db=await connectToMysql();
        return await db('usuarios').insert(usuario)
      }
}

module.exports=UsuariosModel;