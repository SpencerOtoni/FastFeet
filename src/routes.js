import { Router } from 'express';

import UserController from './app/controllers/UserControllers';
import RecipientController from './app/controllers/RecipientController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/recipient', RecipientController.store);

export default routes;
