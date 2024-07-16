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
  const { query } = req;
  const { page, perPage } = parsePaginationParams(query);
  const { sortBy, sortOrder } = parseSortParams(query, fieldList);
  const filter = parseContactFilterParams(query);

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
  const { id } = req.params;
  const data = await getContactById(id);

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
  const data = await addContact(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data,
  });
};

export const updateContactController = async (req, res) => {
  const { id } = req.params;
  const result = await upsertContact({ _id: id }, req.body);
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
  const { id } = req.params;
  const data = await deleteContact({ _id: id });
  if (!data) {
    throw createHttpError(404, `Contact with id ${id} not found`);
  }
  res.status(204).send();
};
