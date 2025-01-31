import React from 'react';
import UserTable from './UserTable';
import UserForm from './UserForm';
import useUserManagement from './UsersCustomHook';
import './styles/UserManager.css';
import { Button } from 'antd';

function UserManagement() {
  const {
    users, selectedUsers, name, email, type,
    setName, setEmail, setType, handleCheckboxChange,
    handleDeleteUsers, handleAddUser
  } = useUserManagement();

  return (
    <div className="user-management">
      <h3>Usuários</h3>
      <UserTable users={users} selectedUsers={selectedUsers} onCheckboxChange={handleCheckboxChange} />
      <Button className="delete-button" onClick={handleDeleteUsers} type="primary" block>Deletar Usuário(s) Selecionado(s)</Button>
      <UserForm 
        name={name} setName={setName} 
        email={email} setEmail={setEmail} 
        type={type} setType={setType} 
        onAddUser={handleAddUser}
      />
      <Button className="add-button" onClick={handleAddUser} type="primary" block>Adicionar Usuário</Button>
      
    </div>
  );
}

export default UserManagement;
