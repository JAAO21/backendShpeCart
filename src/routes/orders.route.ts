import express from 'express';
import {  getAllOrders,createOrder,updateOrderById,deleteOrderById } from '../controller/orders.controller';

const router = express.Router();

// Ruta para obtener todos los productos
/**
 * @swagger
 * /orders
 *   get:
 *     summary: Retorna todos los ordenes
 *     description: Retorna una lista de todos lass ordenes registrados.
 *     responses:
 *       '200':
 *         description: Petición exitosa
 *       '500':
 *         description: Error interno del servidor
 */
router.get('/orders',getAllOrders);

// Ruta para crear producto
/**
 * @swagger
 * /orders/:id:
 *   post:
 *     summary: crea una order
 *     description: Retorna un mensaje para saber si se creo la orden.
 *     responses:
 *       '200':
 *         description: Orden creada
 *       '500':
 *         description: Error interno del servidor
 */
router.post('/orders/:id', createOrder);

//Ruta para actualizar order
/**
 * @swagger
 * /orders/:id:
 *   update:
 *     summary: Actualiza por id ordenes
 *     description: Retorna un mensaje para saber si se acutalizo las ordenes.
 *     responses:
 *       '200':
 *         description: Orden actualizada
 *       '500':
 *         description: Error interno del servidor
 */
router.put('/orders/:id', updateOrderById);

//Ruta para eliminar producto
/**
 * @swagger
 * /products/:id:
 *   delete:
 *     summary: Elimina por id productos
 *     description: Retorna un mensaje para saber si se elimino el producto.
 *     responses:
 *       '200':
 *         description: Orden eliminado
 *       '500':
 *         description: Error interno del servidor
 */
router.delete('/orders/:id', deleteOrderById);


export default router;