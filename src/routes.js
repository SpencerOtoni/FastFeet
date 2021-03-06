import { Router } from 'express';

import UserController from './app/controllers/UserControllers';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

import authMiddler from './app/middewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddler);

routes.put('/users', UserController.update);
routes.post('/recipient', RecipientController.store);
routes.put('/recipient', RecipientController.update);

export default routes;
