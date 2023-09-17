import { Router } from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';

// eslint-disable-next-line import/prefer-default-export
export const router = Router();

router.get('/status', AppController.getSatus);

router.get('/stats', AppController.getStats);

router.post('/users', UsersController.postNew);
