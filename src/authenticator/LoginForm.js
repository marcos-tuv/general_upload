import React from 'react';
import './login.css'; 

const LoginForm = ({ username, password, onUsernameChange, onPasswordChange, onSubmit }) => {
  return (
    <div className="login-body">
      <div className="login-container">
        <form className="login-form" onSubmit={onSubmit}>
          <h2>Login</h2>
          <div className="input-group">
            <label htmlFor="username">Usuário MRN</label>
            <input
              type="text"
              id="username"
              placeholder="Informe o seu usuário"
              value={username}
              onChange={onUsernameChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Sua senha</label>
            <input
              type="password"
              id="password"
              placeholder="*******"
              value={password}
              onChange={onPasswordChange}
            />
          </div>
          <button type="submit" className="login-button">Logar</button>
          
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
