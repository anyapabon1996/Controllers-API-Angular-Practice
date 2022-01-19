import jwt from 'jsonwebtoken';
import { SECRET_KEY } from "../config/config.js";

//Res y Req siempre viene por express
export const validateCredentials = (req, res) => {
    //Como los datos viene por un post
    const credential = req.body;

    console.log(credential.user, credential.password);

    //Validacion si es user
    if(credential.user === 'user' && credential.password === 'user12345'){

        //Este es el payload
        const payload = {
            user : credential.user,
            userName : 'test_user',
            mail : 'test_user@gmail.com',
            role : 'user'
        };

        const token = jwt.sign(payload, SECRET_KEY);
        res.json({
            status: 'OK',
            token: token,
        });

    //Si es administrador
    } else if(credential.user === 'admin' && credential.password === 'admin12345'){

        //Este es el payload
        const payload = {
            user : credential.user,
            userName : 'test_admin',
            mail : 'test_admin@gmail.com',
            role : 'admin'
        };

        const token = jwt.sign(payload, SECRET_KEY);
        res.json({
            status: 'OK',
            token: token,
        });

    //Si hay error
    } else { 

        res.json({
            status: 'NOT OK',
            message: 'Invalid user or password'
        });
    }
}