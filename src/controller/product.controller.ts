import { Request, Response } from "express";
import ProductModel  from "../models/produtc.model"; // Importa el modelo de Producto

// Controlador para obtener todos los productos
export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const response = await ProductModel.find();
    res.status(200).json(response);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener un producto por su ID
export const getProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const response = await ProductModel.findById(req.params.id);
    if (!response) {
      res.status(404).json({ message: "Producto no encontrado" });
      return;
    }
    res.status(200).json(response);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const response = new ProductModel(req.body);
    await response.save();
    res.status(200).send("Producto creado");
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const response = await ProductModel.findByIdAndDelete({
      _id: req.params.id,
    });
    if (response) {
      res.status(200).send("Producto eliminado");
    } else {
      res.status(404).send("Producto no encontrado");
    }
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};
export const updateProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const response = await ProductModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (response) {
      res.status(200).send("Producto actualizado");
    } else {
      res.status(404).send("Producto no encontrado");
    }
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};
