import { Router } from "express";

import {registrarArticulo, desactivarArticulo} from "../controllers/articulo.controller.js"

const route = Router();



route.post('/registrar',registrarArticulo);
route.put('/desactivar/:id',desactivarArticulo);




export default route;