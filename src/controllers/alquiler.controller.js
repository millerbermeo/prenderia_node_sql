import { pool } from "../database/conexion.js";

export const registarAlquiler = async (req, res) => {
    let { valor, fecha, meses, descripcion, interes, cliente, articulo } = req.body

    let sql = `insert into alquiler (valor, fecha, meses, descripcion, interes, cliente, articulo) values ('${valor}', '${fecha}', '${meses}', '${descripcion}', '${interes}', '${cliente}', '${articulo}')`

    let [rows] = await pool.query(sql)

    res.status(201).send(rows);

    console.log(sql);

}

export const actualizarAlquiler = async (req, res) => {
    try {
        let id = req.params.id
        let { valor, fecha, meses, descripcion, interes, cliente, articulo } = req.body

        let sql = `update alquiler SET valor = '${valor}', fecha = '${fecha}', meses = '${meses}', descripcion = '${descripcion}', interes = '${interes}', cliente = '${cliente}', articulo = '${articulo}' where idalquiler = ${id}`

        let [rows] = await pool.query(sql)

        if (rows.affectedRows > 0)
            return res.status(200).json({ "message": "actualizado correctamente" })

        else
            return res.status(500).json({ "message": "no actualizado" })

    } catch (e) {
        return res.status(500).json({ "mensaje": e.message })
    }
}