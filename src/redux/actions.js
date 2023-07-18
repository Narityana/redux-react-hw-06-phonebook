import { nanoid } from 'nanoid';

export const addContact = (name, number) => {
  return {
    type: 'list/addContact',
    payload: {
      id: nanoid(),
      name: name,
      number: number,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'list/deleteContact',
    payload: contactId,
  };
};

export const filterContacts = query => {
  return {
    type: 'list/filtredContacts',
    payload: query,
  };
};
