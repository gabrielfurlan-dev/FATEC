import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/multer'

import { CreateUserController } from './controller/user/CreateUserController';
import { IsAuthenticated } from './middlewares/IsAuthenticated';
import { DetailUserController } from './controller/user/DetailUserController';
import { AuthUserController } from './controller/user/AuthUserController';
import CreateCategoryController from './controller/category/CreateCategoryController';
import ListCategoryController from './controller/category/ListCategoryController';

const router = Router();

const upload = multer(uploadConfig.upload('./temp'));

//User
router.post('/user', new CreateUserController().handle)
router.post("/session", new AuthUserController().handle)
router.get("/userinfo", IsAuthenticated, new DetailUserController().handle)

//category
router.post("/category", IsAuthenticated, new CreateCategoryController().handle)
router.get("/category", IsAuthenticated, new ListCategoryController().handle)

//PRoduct
router.post('/product', IsAuthenticated, upload.single('file'))


export { router };
