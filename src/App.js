import React, { useState } from 'react';
import 'antd/dist/reset.css';
import './AppNew.css';
import {
  FileOutlined, UserOutlined, ShoppingCartOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Login from './authenticator/Login';
import Logout from './authenticator/LogoutNew';
import Spot from './rhforms/spot/SPOT.js';
import Contract from './rhforms/contracts/CONTRACT.js';
import Additive from './rhforms/additive/ADDITIVE.js';
import UserManagement from './UserManager/UserManager';
import SupplierManagement from './vendorlist/SupplierManager.js';
import MaterialManagement from './vendorlist/MaterialManager.js';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('RH FORMS', 'sub1', <FileOutlined/>, [
    getItem('SPOT', '1'),
    // getItem('RH Contratos', '2', <FileOutlined />),
    // getItem('Aditivos', '3', <FileOutlined />),
  ]),
  getItem('Vendor List', 'sub2', <ShoppingCartOutlined/>, [
    getItem('Materiais', '4'),
    getItem('Fornecedores', '5'),
  ]),
  getItem('Usuários', 'sub3', <UserOutlined /> ),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [username, setUsername] = useState(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState('1'); 

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleLogin = (username) => {
    setIsAuthenticated(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername(null);
    localStorage.removeItem('token');
  };

  const handleMenuClick = (e) => {
    setSelectedMenuItem(e.key);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{ backgroundColor: '#006129' }}>
        <div className="demo-logo-vertical" />
        <Menu defaultSelectedKeys={['1']} mode="inline" items={items} onClick={handleMenuClick} style={{ backgroundColor: '#006129' }} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src={`${process.env.PUBLIC_URL}/mrn.png`} alt="Logo" style={{ height: '20px', marginLeft: '20px' }} />
          <Logout onLogout={handleLogout}  />
        </Header>

        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Usuário: {username}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {selectedMenuItem === '1' && <Spot />}
            {selectedMenuItem === '2' && <Contract />}
            {selectedMenuItem === '3' && <Additive />}
            {selectedMenuItem === '4' && <MaterialManagement />}
            {selectedMenuItem === '5' && <SupplierManagement />}
            {selectedMenuItem === 'sub3' && <UserManagement/>}
          </div>
          
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          MRN ©{new Date().getFullYear()} Created by Smart Sourcing
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
