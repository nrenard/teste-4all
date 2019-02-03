import api from '../../../services/api';

export const requestGetCards = async () => await api.get('/cards');

export const requestAddCard = async fields => {
  const data = await api.post('/cards', fields);
  return data;
}

export const requestDeleteCard = async id => {
  const data = await api.delete(`/cards/${id}`);
  return data;
}

export const requestEditCard = async card => {
  const data = await api.put(`/cards/${card.id}`, card);
  return data;
}
