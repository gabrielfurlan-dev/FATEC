import { Router } from 'express';
import { CreateUserController } from './controller/user/CreateUserController';
import { IsAuthenticated } from './middlewares/IsAuthenticated';
import { DetailUserController } from './controller/user/DetailUserController';
import { AuthUserController } from './controller/user/AuthUserController';
import CreateCategoryController from './controller/category/CreateCategoryController';
import ListCategoryController from './controller/category/ListCategoryController';

const router = Router();

//User
router.post('/user', new CreateUserController().handle)
router.post("/session", new AuthUserController().handle)
router.get("/userinfo", IsAuthenticated, new DetailUserController().handle)

//category
router.post("/category", IsAuthenticated, new CreateCategoryController().handle)
router.get("/category", IsAuthenticated, new ListCategoryController().handle)

export { router };
