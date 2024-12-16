import React, { useState } from 'react';
import { Layout, Form, Input, Button, Typography, Modal } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios for API requests
import './Login.css';

const { Content } = Layout;
const { Title } = Typography;

const RegisterPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
     
      const response = await axios.post('http://localhost:8080/api/students/login', values);
      
      if (response.status === 200) {
        Modal.success({
          title: 'Login Successful',
          content: 'You have logged in successfully.',
          centered: true,
          onOk: () => {
            navigate('/');
          },
        });
      }
    } catch (error) {
     
      Modal.error({
        title: 'Login Failed',
        content: error.response?.data?.message || 'An error occurred. Please try again.',
        centered: true,
      });
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content>
        <div className="register-container">
          <div className="register-content">
            <Title level={2} style={{ marginBottom: '20px' }}>
              Login to your Account
            </Title>
          </div>

          <div className="register-form">
            <Title level={4} className='form-title'>Login</Title>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              style={{ maxWidth: '400px' }}
            >
              <div style={{ marginBottom: '20px', textAlign: 'right', right: '50px', position: 'relative' }}>
                Don’t have an account? &nbsp;
                <Link to="/register" style={{ fontSize: '14px' }}>
                  Register here
                </Link>
              </div>

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

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default RegisterPage;
