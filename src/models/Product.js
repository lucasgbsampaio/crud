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
      type: Date,
      required: true,
    },

    expiration_date: {
      type: Date,
    },

    price: {
      type: Number,
      required: true,
    },
  },

  { timestamps: true }
);

export const Product = mongoose.model('products', ProductSchema);
