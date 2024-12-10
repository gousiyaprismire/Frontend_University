import React, { useState } from 'react';
import { Layout, Form, Input, Button, Select, Typography, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

const { Content } = Layout;
const { Title, Text } = Typography;

const AdminRegistration = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    message.success('Registration successful! Redirecting to login page...');
    navigate('/Adminlogin');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content>
        <div className="register-container">
          <div className="register-content">
            <Title level={2} style={{ marginBottom: '20px' }}>
              Create an Account
            </Title>
            <Text style={{ fontSize: '18px', color: 'white' }}>
              Fill in the details below to create your account.
            </Text>
          </div>

          <div className="register-form">
            <Title level={4}>Register</Title>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              style={{ maxWidth: '400px' }}
            >

<Form.Item
                label="Full Name"
                name="Fullname"
                rules={[{ required: true, message: 'Please enter your Fullname!' }]}
              >
                <Input placeholder="Enter your fullname" />
              </Form.Item>
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
                name="mobile"
                rules={[{ required: true, message: 'Please enter your mobile number!' }]}
              >
                <Input placeholder="Enter your mobile number" />
              </Form.Item>

              <Form.Item
                label="Admin Id"
                name="AdminId"
                rules={[{ required: true, message: 'Please enter your Admin Id!' }]}
              >
                <Input placeholder="Enter your mobile number" />
              </Form.Item>

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

              <Form.Item
                label="Re-enter Password"
                name="Re-enter Password"
                rules={[{ required: true, message: 'Please reenter your password!' }]}
              >
                <Input.Password placeholder="Enter your password" />
              </Form.Item>

            

             

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Register
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default AdminRegistration;
