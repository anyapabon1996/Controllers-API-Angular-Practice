import { addMovieToCart, deleteMovies, getMoviesInCart } from './controllers/cart.controller.js';
import { getTest } from './controllers/test.controller.js';

export const routes = (app) => {

    //Escucha al endpoint de test.
    app.route('/api/test').get(getTest);

    app.route('/api/cart')
        .get(getMoviesInCart)
        .post(addMovieToCart)
        .delete(deleteMovies)
}