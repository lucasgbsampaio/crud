import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    perishable: {
      type: Boolean,
      required: true,
    },

    manufacture_date: {
      type: String,
      required: true,
    },

    expiration_date: {
      type: String,
    },

    price: {
      type: Number,
      required: true,
    },
  },

  { timestamps: true }
);

export const Product = mongoose.model('products', ProductSchema);
