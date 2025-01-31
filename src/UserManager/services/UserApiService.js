import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

/**
 * Fetches users from the API.
 * @returns {Promise<Array<Object>>} The array of user objects.
 */
export const fetchUsersApi = async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  return response.data.map((user) => ({
    id: user[3],
    name: user[0],
    email: user[1],
    type: user[2]
  }));
};

export const deleteUserApi = async (selectedUsers) => {
  await axios.delete(`${BASE_URL}/users`, { 
    headers: { 'Content-Type': 'application/json' }, 
    data: selectedUsers
  });
};

export const addUserApi = async (user) => {
  try {
    await axios.post(`${BASE_URL}/users`, user);
  } catch (error) {
    alert('Usuário já existente');
  }
};
