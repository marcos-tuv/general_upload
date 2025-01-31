import React, { Component } from 'react';
import axios from 'axios';
import './login.css';
import LoginForm from './LoginForm';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount() {
    document.body.classList.add('login-body');
  }

  componentWillUnmount() {
    document.body.classList.remove('login-body');
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { username, password } = this.state;
      const formData = new URLSearchParams();
      formData.append('username', username);
      formData.append('password', password);

      const response = await axios.post(`${BASE_URL}/login`, formData, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
      const { access_token } = response.data;
      localStorage.setItem('token', access_token);
      this.props.onLogin(username); 
    } catch (error) {
      console.error("Error:", error);
      alert('Tente novamente. Verifique suas credenciais e conexão em rede.');
    }
  };

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <LoginForm
        username={username}
        password={password}
        onUsernameChange={this.handleUsernameChange}
        onPasswordChange={this.handlePasswordChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default Login;
