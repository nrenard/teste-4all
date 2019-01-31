import axios from 'axios';

import { isAuthenticated } from '../services/auth';

const api = axios.create({
	baseURL: "http://localhost:8080/",
	headers: { Authorization: `Bearer ${isAuthenticated()}` }
});

export default api;