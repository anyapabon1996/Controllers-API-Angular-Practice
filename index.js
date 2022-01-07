import bodyParser from "body-parser";
import express from "express";
import cors from 'cors';
import { routes } from './routes.js';


//Puerto donde vamos a trabajar
const PORT = 5050;
//Donde vamos a trabajar
const HOSTNAME = 'localhost'; 

//variable express
const app  = express(); 

app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());
app.use(cors());

//Esto llama a la funcion routes del archivo routes.js
routes(app); 

//Este es  nuestro servicio que se queda escuchando los cambios (listen)
app.listen(PORT, HOSTNAME, () => {
    console.log('movies api server online in http://' + HOSTNAME + ':' + PORT); 
})


