export const isAuthenticated = () => {
  return JSON.parse(localStorage.getItem('token'));
};

export const setToken = token => {
  localStorage.setItem('token', JSON.stringify(token));
};

export const deleteToken = () => {
  localStorage.removeItem('token');
};
