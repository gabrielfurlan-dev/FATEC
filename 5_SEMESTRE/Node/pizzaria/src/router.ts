import { Router } from 'express';
import { CreateUserController } from './controller/user/CreateUserController';
import { IsAuthenticated } from './middlewares/IsAuthenticated';
import { DetailUserController } from './controller/user/DetailUserController';
import { AuthUserController } from './controller/user/AuthUserController';

const router = Router();

router.post('/user', new CreateUserController().handle)

router.post("/session", new AuthUserController().handle)

router.get("/userinfo", IsAuthenticated, new DetailUserController().handle)

export { router };
