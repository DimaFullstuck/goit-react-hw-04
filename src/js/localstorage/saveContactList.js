import { KEY_LOCALSTORAGE } from '../constans';

export const saveContactList = contact => {
  localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(contact));
};
