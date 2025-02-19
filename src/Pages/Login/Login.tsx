import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Input, Tabs, Alert, Spin } from 'antd';
import { useUser } from '../../Store/UserStore/UserStore';
import { LoginService } from '../../Services/api';
import { LoadingOutlined } from '@ant-design/icons';

export default function Login() {
  const { school_name } = useParams();
  const navigate = useNavigate();
  const { setUser } = useUser();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const userData = await LoginService(username, password, school_name || '');
      const Data = {
        school_name: school_name,
        data: userData,
      };
      localStorage?.setItem('data_school_and_user', JSON.stringify(Data));
      setUser(Data);
      navigate(`/${school_name}/dashboard`);
    } catch (error) {
      console.error(error, 'ERROR');
      setError('Failed to login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = () => {
    console.log(`Signup for ${school_name}`);
  };

  return (
    <div className="p-4 max-w-sm mx-auto border rounded-lg shadow-md mt-20">
      <h1 className="text-xl font-bold mb-4">{school_name}</h1>
      {error && (
        <Alert
          message="Error"
          description={error}
          type="error"
          showIcon
          className="mb-4"
        />
      )}
      {loading ? (
        <Spin className="flex justify-center my-4" indicator={<LoadingOutlined/>} />
      ) : (
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Login" key="1">
            <Input
              placeholder="Email"
              className="mb-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input.Password
              placeholder="Password"
              className="mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="primary" onClick={handleLogin} block>Login</Button>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Signup" key="2">
            <Input placeholder="Full Name" className="mb-2" />
            <Input placeholder="Email" className="mb-2" />
            <Input.Password placeholder="Password" className="mb-4" />
            <Button type="primary" onClick={handleSignup} block>Signup</Button>
          </Tabs.TabPane>
        </Tabs>
      )}
    </div>
  );
}
