import { Router } from 'express';
import AppController from '../controllers/AppController';

// eslint-disable-next-line import/prefer-default-export
export const router = Router();

router.get('/status', AppController.getSatus);

router.get('/stats', AppController.getStats);
