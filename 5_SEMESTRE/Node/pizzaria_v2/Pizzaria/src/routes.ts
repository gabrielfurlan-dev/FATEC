import { Router} from  "express";
import multer from 'multer';
import uploadConfig from './config/multer';
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import {CreateProductController} from './controllers/product/CreateProductController';
import {ListByCategoryController} from './controllers/product/ListByCategoryController';
import{CreateOrderController} from './controllers/order/CreateOrderController';
import {AddItemController} from './controllers/order/AddItemController'
import {RemoveOrderController} from './controllers/order/RemoveOrderController';
import RemoveItemController from './controllers/order/DeleteItemController';
import UpdateRascunhoOrderController from './controllers/order/UpdateDrawOrderController';
import ListLastOrdersController from "./controllers/order/ListLastOrdersController";
import DetailsOrderController from "./controllers/order/DetailsOrderController";
import DoneOrderController from "./controllers/order/DoneOrderController";

const router = Router(); 
const upload = multer(uploadConfig.upload("./tmp"));

router.post('/user', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/userinfo', isAuthenticated, new DetailUserController().handle);

router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle );
router.get('/listcategory', isAuthenticated, new ListCategoryController().handle);
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);

router.post('/order', isAuthenticated, new CreateOrderController().handle );
router.delete('/deleteorder', isAuthenticated, new RemoveOrderController().handle);
router.post('/order/add', isAuthenticated, new AddItemController().handle);
router.post('/order/remove', isAuthenticated, new RemoveItemController().handle);
router.post('/order/update-rascunho', isAuthenticated, new UpdateRascunhoOrderController().handle);
router.get('/order/list', isAuthenticated, new ListLastOrdersController().handle);
router.post('/order/details', isAuthenticated, new DetailsOrderController().handle);
router.post('/order/conclude', isAuthenticated, new DoneOrderController().handle);

export {router}; 