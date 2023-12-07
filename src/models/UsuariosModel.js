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

      static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('usuarios').insert(datos).returning('id_usuario');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('usuarios').where('id_usuario', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectToMysql();
        newData['id_usuario'] = id;
        await db('usuarios').where('id_usuario', id).del();
        await db.insert(newData).into('usuarios');
        return id;
    }
}

module.exports=UsuariosModel;