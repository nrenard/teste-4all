import axios from 'axios';

import { isAuthenticated, deleteToken } from '../services/auth';

const api = axios.create({
	baseURL: "http://localhost:8080/",
	headers: { Authorization: `Bearer ${isAuthenticated()}` }
});

api.interceptors.response.use(response => {
	return response.data;
}, error => {
	if (error.response.status === 401) {
		deleteToken();
		window.location.pathname = "/login";
	}
})

export default api;
