import { pool } from "../database/conexion.js";


export const registrarInteres = async (req, res) => {


    try {
        let { mes, fecha, valor, alquiler } = req.body

        let sql = `insert into intereses (mes, fecha, valor, alquiler) VALUES ('${mes}', '${fecha}', '${valor}', '${alquiler}')`

        let [rows] = await pool.query(sql)
        res.status(201).send(rows);

    } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor");
    }
}

export const eliminarInteres = async(req, res) => {
    let id = req.params.id

    let sql = `delete from intereses where idinteres = ${id}`

    let [rows] = await pool.query(sql)

    if (rows.affectedRows > 0) {
        return res.status(200).json({ "mensaje": "usarios eliminado con exito" })
    } else {
        return res.status(403).json({ "mensaje": "usarios no eliminado" })
    }
}


// export const listarInteres = async(req, res) => {

//     let sql = "select * from intereses join "
    
//     let [result] = await pool
// }