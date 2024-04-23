import express from 'express';
import { getAllProducts, getProductById,createProduct,deleteProductById,updateProductById } from '../controller/product.controller';

const router = express.Router();

// Ruta para obtener todos los productos
/**
 * @swagger
 * /products
 *   get:
 *     summary: Retorna todos los procutos
 *     description: Retorna una lista de todos los productos registrados.
 *     responses:
 *       '200':
 *         description: Petición exitosa
 *       '500':
 *         description: Error interno del servidor
 */
router.get('/products', getAllProducts);


// Ruta para obtener un producto por su ID
/**
 * @swagger
 * /products/:id
 *   get:
 *     summary: Retorna el procuto con el id
 *     description: Retorna el producto buscado.
 *     responses:
 *       '200':
 *         description: Petición exitosa
 *       '500':
 *         description: Error interno del servidor
 */
router.get('/products/:id', getProductById);

// Ruta para crear producto
/**
 * @swagger
 * /products/:id:
 *   post:
 *     summary: crea un  usuarios
 *     description: Retorna un mensaje para saber si se creo el producto.
 *     responses:
 *       '200':
 *         description: Producto creado
 *       '500':
 *         description: Error interno del servidor
 */
router.post('/products', createProduct);

//Ruta para actualizar producto
/**
 * @swagger
 * /products/:id:
 *   update:
 *     summary: Actualiza por id productos
 *     description: Retorna un mensaje para saber si se acutalizo el producto.
 *     responses:
 *       '200':
 *         description: Producto actualizado
 *       '500':
 *         description: Error interno del servidor
 */
router.put('/products/:id', updateProductById);

//Ruta para eliminar producto
/**
 * @swagger
 * /products/:id:
 *   delete:
 *     summary: Elimina por id productos
 *     description: Retorna un mensaje para saber si se elimino el producto.
 *     responses:
 *       '200':
 *         description: Producto eliminado
 *       '500':
 *         description: Error interno del servidor
 */
router.delete('/products/:id', deleteProductById);


export default router;