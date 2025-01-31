import React from 'react';
import './styles/UserForm.css';

function UserForm({ name, setName, email, setEmail, type, setType, onAddUser }) {
  return (
    <div className="user-form">
      <h4>Preecha os abaixo para inserir um novo usuário</h4>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="user">user</option>
        <option value="adm">adm</option>
      </select>
      
    </div>
  );
}

export default UserForm;

