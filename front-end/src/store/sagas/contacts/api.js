import api from '../../../services/api';

export const requestGetContacts = async () => await api.get('/contacts');

export const requestAddContact = async id => {
  const data = await api.post('/contacts', { contact_id: id });
  return data;
}

export const requestDeleteContact = async id => {
  const data = await api.delete(`/contacts/${id}`);
  return data;
}
