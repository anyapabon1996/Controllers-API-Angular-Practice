//Carrito con las pelis que vaya agregando el usuario 
const cartContent = [];

//Metodo que devuelve todo lo que tenga el usuario agregado en su carrito
export const getMoviesInCart = (req, res) => {
    res.send(cartContent);
}

//Agregar pelicula
export const addMovieToCart = (req, res) => {
    
    const itemToAdd = req.body; 

    let index = cartContent.findIndex(index => index.imdbID == itemToAdd.imdbID)

    if (index < 0) {
        
        cartContent.push(itemToAdd);

        res.send({
            status: 'OK',
            cartContent
        })
    } else {
        cartContent[index].exists = true;

        console.log(cartContent[index].exists);

        res.send({
            status: 'NOT OK',
            cartContent
        })
    }
}

export const deleteMovies = (req, res) => {
    const id = req.query.id; 

    console.log("id:" + id);

    let index = cartContent.findIndex(index => index.imdbID == id); 

    console.log(index);

    if (index != -1) {
        cartContent.splice(index, 1);
        res.send({
            status: "OK",
            cartContent
        });

    } else {

        res.send({
            status: 'NOT OK',
            cartContent
        }); 
    }
}