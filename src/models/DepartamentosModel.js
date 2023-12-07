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

    
      static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('departamentos').insert(datos).returning('id_departamento');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('departamentos').where('id_departamento', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectToMysql();
        newData['id_departamento'] = id;
        await db('departamentos').where('id_departamento', id).del();
        await db.insert(newData).into('departamentos');
        return id;
    }

}

module.exports=DepartamentosModel;