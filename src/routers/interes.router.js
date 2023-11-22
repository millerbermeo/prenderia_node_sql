import { Router } from "express";

import { eliminarInteres, registrarInteres } from "../controllers/interes.controller.js";

const route = Router();


route.post('/registrar', registrarInteres);
route.delete('/eliminar/:id', eliminarInteres);


export default route;
