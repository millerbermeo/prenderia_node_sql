import express from 'express';
import body_parse from "body-parser"
import cliente from "./src/routers/cliente.router.js"
import articulo from "./src/routers/articulo.router.js"
import alquiler from "./src/routers/alquiler.router.js"
import interes from "./src/routers/interes.router.js"


const servidor = express();

servidor.use(body_parse.json())
// servidor.use(body_parse.urlencoded({extended: true}))

servidor.get('/', (req, res) => {
    res.send('¡Hola, mundo desde node!');
});


servidor.use('/me/cliente', cliente);
servidor.use('/me/articulo', articulo);
servidor.use('/me/alquiler', alquiler);
servidor.use('/me/interes', interes);


servidor.listen(3000, () => {
  console.log('El servidor se está ejecutando en el puerto 3000');
});
