import { Product } from '../models/Product.js';

export default {
  async allProducts(req, res) {
    try {
      const products = await Product.find();

      res.status(200).send({ products });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },

  async newProduct(req, res) {
    const {
      name,
      price,
      perishable,
      manufactureDate,
      expirationDate,
    } = req.body;

    try {
      if (!name || !price || !manufactureDate || perishable === undefined) {
        throw new Error('Campos devem ser preenchidos');
      }

      const product = await Product.create({
        name,
        price,
        perishable,
        manufacture_date: manufactureDate,
        expiration_date: expirationDate,
      });

      res.status(200).send({ product });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },

  async modifyProduct(req, res) {
    const { id } = req.params;

    try {
      const product = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      res.status(200).send({ product });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },

  async delProduct(req, res) {
    const { id } = req.params;

    try {
      const product = await Product.findByIdAndDelete(id);

      res.status(200).send({ message: 'Deletado com sucesso' });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
};
