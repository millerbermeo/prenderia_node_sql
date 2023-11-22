import { pool } from "../database/conexion.js";

export const registrarArticulo = async(req, res) => {
    try {
        let { nombre, tipo } = req.body

        let sql = `insert into articulos (nombre, tipo, estado) values ('${nombre}', '${tipo}', '1')`

        let [rows] = await pool.query(sql)
        res.status(201).send(rows)
    } catch (error) {
        console.log(error)
    }
}

export const desactivarArticulo = async(req, res) => {
    try {
        let Id = req.params.id 
        let estado = 2
        let sql = `update articulos SET estado = ${estado} WHERE idarticulo = ${Id}`
        let [rows] = await pool.query(sql)

        if (rows.affectedRows > 0) 
        return res.status(200).json({ "message": "actualizado correctamente" })

        else 
            return res.status(500).json({ "message": "no actualizado" })
        
    } catch(e) {
        return res.status(500).json({ "mensaje": e.message })
    }
}