import express from 'express';

import authMiddleware from './middlewares/auth.js';

import AuthController from './controllers/AuthController.js';
import ProductController from './controllers/ProductController.js';

const routes = express.Router();

routes.post('/login', AuthController.login);

/* routes.use(authMiddleware);
 */ routes.get('/product', ProductController.allProducts);
routes.post('/product', ProductController.newProduct);
routes.patch('/product/:id', ProductController.modifyProduct);
routes.delete('/product/:id', ProductController.delProduct);

export default routes;
