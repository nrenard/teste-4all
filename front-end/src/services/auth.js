export const isAuthenticated = () => {
  return localStorage.getItem('@ekki/token')
};

export const setToken = async token => {
  return await localStorage.setItem('@ekki/token', token);
};

export const deleteToken = () => {
  return localStorage.removeItem('@ekki/token');
};