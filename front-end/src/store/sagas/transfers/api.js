import api from '../../../services/api';

export const requestGetTransfers = async () => await api.get('/transactions');

export const requestAddTransfer = async ({ contact_id, value }) => {
  const data = await api.post('/transactions', { receiver_id: contact_id, value });
  return data;
}
