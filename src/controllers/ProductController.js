import { Product } from '../models/Product.js';

export default {
  async allProducts(req, res) {
    const { page = 1, limit = 10, sort = '' } = req.query;

    try {
      const products = await Product.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .sort(sort)
        .exec();

      const count = await Product.countDocuments();

      res.status(200).send({
        products,
        totalPages: Math.ceil(count / limit),
      });
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

      if (expirationDate && manufactureDate) {
        const expiration = new Date(expirationDate);
        const manufacture = new Date(manufactureDate);

        if (manufacture.getTime() > expiration.getTime()) {
          throw new Error(
            'Data de fabricação não deve ser maior que data de validade'
          );
        }
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

      if (expirationDate && manufactureDate) {
        const expiration = new Date(expirationDate);
        const manufacture = new Date(manufactureDate);

        if (manufacture.getTime() > expiration.getTime()) {
          throw new Error(
            'Data de fabricação não deve ser maior que data de validade'
          );
        }
      }

      const product = await Product.findByIdAndUpdate(
        id,
        {
          name,
          price,
          perishable,
          manufacture_date: manufactureDate,
          expiration_date: expirationDate,
        },
        {
          new: true,
        }
      );

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
