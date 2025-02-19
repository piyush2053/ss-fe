import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { SideItems } from './SideMenuItems';
import { useUser } from '../Store/UserStore/UserStore';
import Thoughts from '../Components/Thoughts/Thoughts';
import HeaderTitle from './HeaderTitle/HeaderTitle';

const { Header, Sider, Content } = Layout;

const Dashboard: React.FC = () => {
  const {user} = useUser()
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const siderStyle: React.CSSProperties = {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
  };
console.log(user)
  return (
    <Layout>
      <Sider style={siderStyle} trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical text-white m-2 my-3 border border-white rounded p-5">aa</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={SideItems}
        />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} className='flex'>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
           <HeaderTitle/>
        </Header>
        <Content
          style={{
            margin: '',
            padding: 15,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Thoughts/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
