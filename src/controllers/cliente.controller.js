import { pool } from "../database/conexion.js";


export const listarCliente = async (req, res) => {
    try {
        const [result] = await pool.query("select * from clientes")
        if (result.length > 0) {
            return res.status(200).json(result);
        } else {
            return res.status(404).json({ 'message': 'No se econtró usuarios' });
        }

    } catch (e) {
        return res.status(500).json({ 'message': 'error' + e });
    }
}



export const registarCliente = async (req, res) => {


    try {

        let { nombres, direccion, telefono, fecha_nac } = req.body;

        let sql = `INSERT INTO clientes (nombres, direccion, telefono, fecha_nac) VALUES ('${nombres}', '${direccion}', '${telefono}', '${fecha_nac}')`;

        let [rows] = await pool.query(sql);

        res.status(201).send(rows);

    } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor");
    }

 
};


export const actualizarCliente = async (req, res) => {

    try {
        let Id = req.params.id
        let { nombres, direccion, telefono, fecha_nac } = req.body;

        let sql = `UPDATE clientes SET nombres = '${nombres}', direccion = '${direccion}', telefono = '${telefono}', fecha_nac = '${fecha_nac}' WHERE identificacion  = ${Id}`;

        let [rows] = await pool.query(sql)

        if (rows.affectedRows > 0)
            return res.status(200).json({ "message": "actualizado correctamente" })

        else
            return res.status(500).json({ "message": "no actualizado" })
    } catch {

    }
}

export const eliminarCliente = async (req, res) => {
    let id = req.params.id
    let sql = `delete from clientes where identificacion = ${id}`

    let [rows] = await pool.query(sql)
    if (rows.affectedRows > 0) {
        return res.status(200).json({ "mensaje": "cliente eliminado con exito" })
    } else {
        return res.status(403).json({ "mensaje": "cliente no eliminado" })
    }
}

