import React, { Component } from 'react';

class Logout extends Component {
  handleLogout = () => {
    localStorage.removeItem('token');
    this.props.onLogout();
  };

  render() {
    return (
      <button onClick={this.handleLogout}>Logout</button>
    );
  }
}

export default Logout;