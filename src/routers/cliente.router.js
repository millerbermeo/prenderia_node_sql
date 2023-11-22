import { Router } from "express";

import {registarCliente, actualizarCliente, eliminarCliente, listarCliente} from '../controllers/cliente.controller.js';

const route = Router();

route.get('/listar',listarCliente);
route.post('/registrar',registarCliente);
route.put('/actualizar/:id',actualizarCliente);
route.delete('/eliminar/:id',eliminarCliente);



export default route;