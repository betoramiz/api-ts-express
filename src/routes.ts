﻿import { Router } from "express";
import userRoutes from './presentation/users/routes';

export class AppRoutes {

  static get routes(): Router {
    const router = Router();

    router.use('/api/users', userRoutes);

    return router;
  }

}