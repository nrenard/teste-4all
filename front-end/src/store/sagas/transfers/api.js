import api from '../../../services/api';

export const requestGetTransfers = async () => await api.get('/transactions');
