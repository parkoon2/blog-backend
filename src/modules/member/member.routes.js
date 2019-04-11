import { Router } from 'express';
import { verifyToken } from 'Config/auth';
import * as memberController from './member.controller';

const routes = new Router();

routes.get('/list', /*verifyToken,*/ memberController.list);

export default routes;
