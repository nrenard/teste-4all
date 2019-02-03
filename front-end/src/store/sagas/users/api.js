import api from '../../../services/api';

export const requestGetUsers = async () => await api.get('/users');
