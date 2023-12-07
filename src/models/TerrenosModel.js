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

      static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('terrenos').insert(datos).returning('id_terreno');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('terrenos').where('id_terreno', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectToMysql();
        newData['id_terreno'] = id;
        await db('terrenos').where('id_terreno', id).del();
        await db.insert(newData).into('terrenos');
        return id;
    }

}

module.exports=TerrenosModel;