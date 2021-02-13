import { Product } from '../models/Product.js';

export default {
  async allProducts(req, res) {},
  async newProduct(req, res) {
    const {
      name,
      price,
      perishable,
      manufactureDate,
      expirationDate,
    } = req.body;

    try {
      const product = await Product.create({
        name,
        price,
        perishable,
        manufacture_date: manufactureDate,
        expiration_date: expirationDate,
      });

      return res.status(200).send({ product });
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: error.message });
    }
  },
  async modifyProduct(req, res) {},
  async delProduct(req, res) {},
};
