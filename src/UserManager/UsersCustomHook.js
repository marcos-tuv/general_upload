import { useState, useEffect } from 'react';
import { fetchUsersApi, deleteUserApi, addUserApi } from './services/UserApiService';

function useUserManagement() {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('user');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const users = await fetchUsersApi();
      setUsers(users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleCheckboxChange = (userId) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(userId)
        ? prevSelected.filter((id) => id !== userId)
        : [...prevSelected, userId]
    );
  };

  const handleDeleteUsers = async () => {
    try {
      await deleteUserApi(selectedUsers);
      fetchUsers();
      alert('Usuário(s) deletado(s) com sucesso');
    } catch (error) {
      console.error('Error deleting users:', error);
    }
  };

  const handleAddUser = async () => {
    try {
      await addUserApi({ name, email, type });
      setName('');
      setEmail('');
      setType('user');
      fetchUsers();
      alert('Usuário adicionado com sucesso');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return {
    users, selectedUsers, name, email, type,
    setName, setEmail, setType, handleCheckboxChange,
    handleDeleteUsers, handleAddUser
  };
}

export default useUserManagement;
