import { Router } from 'express';
import {
  getAllContactsController,
  getContactByIdController,
  addContactController,
  updateContactController,
  deleteContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import isValidId from '../middlewares/isValidId.js';

const contactRouter = Router();

contactRouter.get('/', ctrlWrapper(getAllContactsController));

contactRouter.get('/:id', isValidId, ctrlWrapper(getContactByIdController));

contactRouter.post('/', ctrlWrapper(addContactController));

contactRouter.patch('/:id', isValidId, ctrlWrapper(updateContactController));

contactRouter.delete('/:id', isValidId, ctrlWrapper(deleteContactController));

export default contactRouter;
