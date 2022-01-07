//Funcion que hará la consulta y respuesta a la API 
export const getTest = (req, res) => {
    res.send({
        message: 'api/test is working'
    })
}