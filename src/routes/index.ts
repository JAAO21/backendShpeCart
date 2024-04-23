import express from 'express';
import productRoutes from './productos.route';
import ordersRoutes from './orders.route';
 function routes (app:express.Application):void {
    app.use('/products', productRoutes);
    app.use('/ordersRoutes', ordersRoutes);
}

export default routes;