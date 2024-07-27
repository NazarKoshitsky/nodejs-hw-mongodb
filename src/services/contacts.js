import { Contact } from '../db/models/Contact.js';

<<<<<<< Updated upstream
export const getContacts = async () => {
  const contacts = await Contact.find();
  return contacts;
=======
export const getContacts = async ({
  filter,
  page,
  perPage,
  sortBy = fieldList[0],
  sortOrder = sortOrderList[0],
}) => {
  const skip = (page - 1) * perPage;
  const dataBaseQuery = Contact.find();
  if (filter.userId) {
    dataBaseQuery.where('userId').equals(filter.userId);
  }
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
>>>>>>> Stashed changes
};

export const getContactById = async (id) => {
  const contact = await Contact.findById(id);
  return contact;
};
