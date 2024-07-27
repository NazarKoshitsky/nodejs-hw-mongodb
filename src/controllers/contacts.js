import createHttpError from 'http-errors';

import {
  getContacts,
  getContactById,
  addContact,
  upsertContact,
  deleteContact,
} from '../services/contacts.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { parseContactFilterParams } from '../utils/parseContactFilterParams.js';
import { fieldList } from '../constants/constants.js';

export const getAllContactsController = async (req, res) => {
<<<<<<< HEAD
  const { _id: userId } = req.user;
  const { query } = req;
  const { page, perPage } = parsePaginationParams(query);
  const { sortBy, sortOrder } = parseSortParams(query, fieldList);
  const filter = { ...parseContactFilterParams(query), userId };
=======
  const { query } = req;
  const { page, perPage } = parsePaginationParams(query);
  const { sortBy, sortOrder } = parseSortParams(query, fieldList);
  const filter = parseContactFilterParams(query);
>>>>>>> c4024ca720ec32d245e7faf6f80fb2eab6466de5

  const data = await getContacts({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
  });

  res.json({
    status: 200,
    data,
    message: 'Success found contacts',
  });
};

export const getContactByIdController = async (req, res) => {
<<<<<<< HEAD
  const { _id: userId } = req.user;
  const { id } = req.params;

  const data = await getContactById({ _id: id, userId });
=======
  const { id } = req.params;
  const data = await getContactById(id);
>>>>>>> c4024ca720ec32d245e7faf6f80fb2eab6466de5

  if (!data) {
    throw createHttpError(404, `Contact with id=${id} not found`);
  }

  res.json({
    status: 200,
    data,
    message: `Contact with id=${id} find success`,
  });
};

export const addContactController = async (req, res) => {
<<<<<<< HEAD
  const { _id: userId } = req.user;
  const data = await addContact({ ...req.body, userId });
=======
  const data = await addContact(req.body);
>>>>>>> c4024ca720ec32d245e7faf6f80fb2eab6466de5

  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data,
  });
};

export const updateContactController = async (req, res) => {
<<<<<<< HEAD
  const { _id: userId } = req.user;
  const { id } = req.params;
  const result = await upsertContact({ _id: id, userId }, req.body, {
    upsert: true,
  });
=======
  const { id } = req.params;
  const result = await upsertContact({ _id: id }, req.body);
>>>>>>> c4024ca720ec32d245e7faf6f80fb2eab6466de5
  if (!result) {
    throw createHttpError(404, `Contact with id ${id} not found`);
  }
  res.json({
    status: 200,
    message: 'Successfully patched a contact',
    data: result.data,
  });
};

export const deleteContactController = async (req, res) => {
<<<<<<< HEAD
  const { _id: userId } = req.user;
  const { id } = req.params;
  const data = await deleteContact({ _id: id, userId });
=======
  const { id } = req.params;
  const data = await deleteContact({ _id: id });
>>>>>>> c4024ca720ec32d245e7faf6f80fb2eab6466de5
  if (!data) {
    throw createHttpError(404, `Contact with id ${id} not found`);
  }
  res.status(204).send();
};
