import { Contact } from '../db/models/Contact.js';
import { fieldList, sortOrderList } from '../constants/constants.js';
import { calcPaginationData } from '../utils/calcPaginationData.js';

<<<<<<< HEAD
<<<<<<< Updated upstream
export const getContacts = async () => {
  const contacts = await Contact.find();
  return contacts;
=======
=======
>>>>>>> c4024ca720ec32d245e7faf6f80fb2eab6466de5
export const getContacts = async ({
  filter,
  page,
  perPage,
  sortBy = fieldList[0],
  sortOrder = sortOrderList[0],
}) => {
  const skip = (page - 1) * perPage;
  const dataBaseQuery = Contact.find();
<<<<<<< HEAD
  if (filter.userId) {
    dataBaseQuery.where('userId').equals(filter.userId);
  }
=======
>>>>>>> c4024ca720ec32d245e7faf6f80fb2eab6466de5
  if (filter.contactType) {
    dataBaseQuery.where('contactType').equals(filter.contactType);
  }
  if (filter.isFavourite) {
    dataBaseQuery.where('isFavourite').equals(filter.isFavourite);
  }

  const totalContacts = await Contact.find()
    .merge(dataBaseQuery)
    .countDocuments();
  const data = await dataBaseQuery
    .skip(skip)
    .limit(perPage)
    .sort({ [sortBy]: sortOrder });

  const { totalPages, hasNextPage, hasPreviousPage } = calcPaginationData({
    total: totalContacts,
    page,
    perPage,
  });

  return {
    data,
    page,
    perPage,
    totalContacts,
    totalPages,
    hasNextPage,
    hasPreviousPage,
  };
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> c4024ca720ec32d245e7faf6f80fb2eab6466de5
};

export const getContactById = (id) => Contact.findById(id);
export const addContact = (data) => Contact.create(data);
export const upsertContact = async (filter, data, options = {}) => {
  const result = await Contact.findByIdAndUpdate(filter, data, {
    new: true,
    includeResultMetadata: true,
    ...options,
  });
  if (!result || !result.value) return null;
  const isNew = Boolean(result?.lastEroorObject?.upserted);
  return {
    data: result.value,
    isNew,
  };
};

export const deleteContact = (filter) => Contact.findOneAndDelete(filter);
