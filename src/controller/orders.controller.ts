import { Request, Response } from "express";
import OrderModel, { Order } from "../models/orders.controller";

export const getAllOrders = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const orders: Order[] = await OrderModel.find();
    res.status(200).send("orden creada");
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const createOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { products, customerName, shippingAddress } = req.body;

    // Verificar si la lista de productos no está vacía
    if (!products || products.length === 0) {
      res.status(400).json({ error: "La lista de productos está vacía" });
      return;
    }

    // Calcular el total de la orden sumando el precio de cada producto por su cantidad
    const total = products.reduce((acc: number, product: any) => {
      return acc + product.price * product.quantity;
    }, 0);

    // Crear la orden en la base de datos
    const newOrder: Order = await OrderModel.create({
      products,
      total,
      customerName,
      shippingAddress,
      orderStatus: "Pendiente", // Estado inicial de la orden
    });

    res.status(201).send("Orden creada");
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateOrderById = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const orderId: string = req.params.id;
      const updates = req.body;
  
      const updatedOrder: Order | null = await OrderModel.findByIdAndUpdate(
        orderId,
        updates,
        { new: true }
      );
  
      if (updatedOrder) {
        res.status(200).send("Orden actualizada");
      } else {
        res.status(404).json({ error: 'Orden no encontrada' });
      }
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  };

  export const deleteOrderById = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const orderId: string = req.params.id;
  
      const deletedOrder = await OrderModel.findByIdAndDelete(orderId);
  
      if (deletedOrder) {
        res.status(200).send('Orden eliminada correctamente');
      } else {
        res.status(404).json({ error: 'Orden no encontrada' });
      }
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  };