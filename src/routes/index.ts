import express from 'express';
import productRoutes from './productos.route';
 function routes (app:express.Application):void {
    app.use('/products', productRoutes);
}

export default routes;