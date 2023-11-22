import { Router } from "express";
import {registarAlquiler, actualizarAlquiler} from "../controllers/alquiler.controller.js"

const route = Router();



route.post('/registrar', registarAlquiler);
route.put('/actualizar/:id', actualizarAlquiler);

export default route;