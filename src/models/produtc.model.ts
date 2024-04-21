import mongoose, { Schema, Document } from 'mongoose';

export interface Product extends Document {
  name: string;
  category: string;
  amount: number;
  price: number;
  state?: boolean;
  img?: string;
}

const productSchema: Schema = new Schema({
  name: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  amount: { type: Number, required: true },
  price: { type: Number, required: true },
  state: { type: Boolean },
  img: { type: String }
});

const ProductModel = mongoose.model<Product>('Product', productSchema);

export default ProductModel;