import { Router } from 'express';
import {
  getAllContactsController,
  getContactByIdController,
  addContactController,
  updateContactController,
  deleteContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts-validation.js';
import isValidId from '../middlewares/isValidId.js';

const contactRouter = Router();

contactRouter.get('/', ctrlWrapper(getAllContactsController));

contactRouter.get('/:id', isValidId, ctrlWrapper(getContactByIdController));

contactRouter.post(
  '/',
  validateBody(createContactSchema),
  ctrlWrapper(addContactController),
);

contactRouter.patch(
  '/:id',
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(updateContactController),
);

contactRouter.delete('/:id', isValidId, ctrlWrapper(deleteContactController));

export default contactRouter;
