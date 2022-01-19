import { addMovieToCart, deleteMovies, getMoviesInCart } from './controllers/cart.controller.js';
import { validateCredentials } from './controllers/login.controller.js';
import { getTest } from './controllers/test.controller.js';
import { SECRET_KEY } from './config/config.js';
import express from 'express';
import jwt from 'jsonwebtoken';


export const routes = (app) => {

    //Escucha al endpoint de test.
    app.route('/api/test').get(getTest);

    app.route('/api/cart')
        .get(checkToken, getMoviesInCart)
        .post(checkToken, addMovieToCart)
        .delete(checkToken, deleteMovies)

    app.route('/api/login')
        .post(validateCredentials)
}

//Crea una ruta
const checkToken = express.Router();

//next es la siguiente peticion q se encarga de procesar nuestra peticion de http. Está en el medio
checkToken.use((req, res, next) => {

    //Este es el header 3 que agregamos en en la llamada http,
    let token = req.headers['authorization']; 

    token = token.replace('Bearer ', '');

    //Si es correcto el token 
    if (token){
        //Verificamos el token con el SERET_KEY 
        jwt.verify(token, SECRET_KEY, (err, decode) => {
            //Si hay error
            if (err){
                return res.json({
                    status: 'NOT OK',
                    message: 'Invalid Token'
                })
            //Si esta codificado, lo dejo pasar 
            } else {
                req.decode = decode;
                next();
            }
        })
    //Si el token está mal
    } else {
        res.send({
            status: 'NOT OK',
            message : 'TOKEN WAS NOT GIVEN'
        })
    }
})