import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

function generateToken(params = {}) {
  return jwt.sign(params, process.env.APP_SECRET, {
    expiresIn: 86400,
  });
}

export default {
  async login(req, res) {
    const { username, password } = req.body;

    try {
      if (!username || !password)
        throw new Error('Campos devem ser preenchidos');

      res.status(200).send({
        token: generateToken({ user: username }),
      });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
};
