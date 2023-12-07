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

      static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('casas').insert(datos).returning('id_casa');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('casas').where('id_casa', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectToMysql();
        newData['id_casa'] = id;
        await db('casas').where('id_casa', id).del();
        await db.insert(newData).into('casas');
        return id;
    }

}

module.exports=CasasModel;