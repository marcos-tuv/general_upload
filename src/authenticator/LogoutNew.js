import React from 'react';
import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

const Logout = ({ onLogout }) => {
  return (
    <Button type="primary" icon={<LogoutOutlined />} onClick={onLogout} 
            style={{ backgroundColor: 'transparent', color: '#006129', border: 'none' }}>
            Sair
    </Button>
  );
};

export default Logout;