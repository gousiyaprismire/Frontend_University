import React, { useState } from 'react';
import { Layout, Form, Input, Button, Select, Typography, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const { Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

const LoginPage = (props) => {
  const [role, setRole] = useState('admin');
  const [loggedIn, setLoggedIn] = useState(true);

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleRoleChange = (value) => {
    setRole(value);
    form.resetFields();
  };

  const handleSubmit = (values) => {
    const { username, password, email, phone, country, university } = values;

    if (role === 'admin') {
        props.setLoggedIn(true);
        setLoggedIn(false);
    } else if (role === 'user') {
        props.setLoggedIn(true);
        setLoggedIn(false);
    } else {
      message.error('Please select a role.');
    }
  };

  return (
    loggedIn && (
      <Layout style={{ minHeight: '100vh' }}>
        <Content>
          <div className="login-container">
           
            <div className="login-content">
              <Title level={2} style={{ marginBottom: '20px' }}>
                Welcome Back!
              </Title>
              <Text style={{ fontSize: '18px', color: '#555' }}>
                Please sign in to continue and access your account.
              </Text>
            </div>

            
            <div className="login-form">
              <Title level={4}>Login</Title>
              <Text>Select your role to continue:</Text>
              <Select
                placeholder="Select Role"
                style={{ width: '100%', marginBottom: '20px' }}
                onChange={handleRoleChange}
              >
                <Option value="admin">Admin</Option>
                <Option value="user">Student</Option>
              </Select>

              {role && (
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={handleSubmit}
                  style={{ maxWidth: '400px' }}
                >
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please enter your username!' }]}
                  >
                    <Input placeholder="Enter your username" />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please enter your password!' }]}
                  >
                    <Input.Password placeholder="Enter your password" />
                  </Form.Item>

                  {role === 'admin' && (
                    <>
                      <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                          { required: true, message: 'Please enter your email!' },
                          { type: 'email', message: 'Please enter a valid email!' },
                        ]}
                      >
                        <Input placeholder="Enter your email" />
                      </Form.Item>

                      <Form.Item
                        label="Mobile Number"
                        name="phone"
                        rules={[{ required: true, message: 'Please enter your phone number!' }]}
                      >
                        <Input placeholder="Enter your phone number" />
                      </Form.Item>
                    </>
                  )}

                  {role === 'user' && (
                    <>
                      <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                          { required: true, message: 'Please enter your email!' },
                          { type: 'email', message: 'Please enter a valid email!' },
                        ]}
                      >
                        <Input placeholder="Enter your email" />
                      </Form.Item>

                      <Form.Item
                        label="Country"
                        name="country"
                        rules={[{ required: true, message: 'Please enter your country!' }]}
                      >
                        <Input placeholder="Enter your country" />
                      </Form.Item>

                      <Form.Item
                        label="University"
                        name="university"
                        rules={[{ required: true, message: 'Please enter your university!' }]}
                      >
                        <Input placeholder="Enter your university" />
                      </Form.Item>

                      <Form.Item
                        label="Mobile Number"
                        name="phone"
                        rules={[{ required: true, message: 'Please enter your phone number!' }]}
                      >
                        <Input placeholder="Enter your phone number" />
                      </Form.Item>
                    </>
                  )}

                  <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                      Login
                    </Button>
                  </Form.Item>
                </Form>
              )}
            </div>
          </div>
        </Content>
      </Layout>
    )
  );
};

export default LoginPage;
