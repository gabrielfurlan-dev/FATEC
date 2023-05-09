import { Router } from 'express';
import { CreateCreditCardController } from './controller/CreateCreditCardController';
import AuthCreditCardController from './controller/AuthCreditCardController';
import { CreditCardIsValid } from './middlewares/CreditCardIsValid';
import { DetailCreditCardController } from './controller/DetailCreditCardController';

const router = Router();

router.post('/credit-card', new CreateCreditCardController().handle)
router.get('/credit-card-session', new AuthCreditCardController().handle)
router.get('/credit-card-valid', CreditCardIsValid, new DetailCreditCardController().handle)


export { router };
