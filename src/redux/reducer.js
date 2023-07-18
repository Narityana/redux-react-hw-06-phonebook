import { combineReducers } from 'redux';

const initialContacts = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const listReduсer = (state = initialContacts, action) => {
  switch (action.type) {
    case 'list/addContact': {
      return { ...state, contacts: [...state.contacts, action.payload] };
    }

    case 'list/deleteContact': {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};

const filterInitialState = { filters: '' };

const filterReduser = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'list/filtredContacts': {
      return {
        ...state,
        filters: action.payload.toLowerCase(),
      };
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: listReduсer,
  filters: filterReduser,
});
