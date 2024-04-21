import mongoose, { Schema, Document } from "mongoose";

export interface Order extends Document {
  productId: string;
  customerName: string;
  orderDate: Date;
  orderStatus: string;
  shippingAddress: string;
}

const orderSchema: Schema = new Schema({
  productId: { type: mongoose.Types.ObjectId, required: true },
  customerName: { type: String, required: true },
  orderDate: { type: Date, default: Date.now },
  orderStatus: {
    type: String,
    enum: ["Pendiente", "Completada", "Cancelada"],
    default: "Pendiente",
  },
  shippingAddress: { type: String, required: true },
});

const OrderModel = mongoose.model<Order>("Order", orderSchema);

export default OrderModel;
