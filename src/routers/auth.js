import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  registerUserController,
  loginUserController,
  refreshUserController,
  singoutController,
} from '../controllers/auth.js';
import { validateBody } from '../middlewares/validateBody.js';
import { userSingupSchema, userSinginSchema } from '../validation/user.js';

const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(userSingupSchema),
  ctrlWrapper(registerUserController),
);
authRouter.post(
  '/login',
  validateBody(userSinginSchema),
  ctrlWrapper(loginUserController),
);
authRouter.post('/refresh', ctrlWrapper(refreshUserController));
authRouter.post('/logout', ctrlWrapper(singoutController));
export default authRouter;
