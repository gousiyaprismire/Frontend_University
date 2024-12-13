
import React from 'react';
import { Layout, Form, Input, Button, Typography, message, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Registration.css';
 
const { Content } = Layout;
const { Title, Text } = Typography;
 
const RegisterPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
 
  const handleSubmit = async (values) => {
    try {
      // Send POST request directly using Axios
      const response = await axios.post('http://localhost:8080/api/students/register', values);
 
      if (response.status === 200) {
        message.success('Registration successful! Redirecting to login page...');
        navigate('/login');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      if (error.response) {
        message.error(error.response?.data || 'Registration failed! Please try again later.');
      } else if (error.request) {
        message.error('No response from server. Please check your network connection.');
      } else {
        message.error('An unexpected error occurred. Please try again later.');
      }
    }

  const handleLoginSuccess = () => {
    Modal.success({
      title: 'Registration Successful',
      content:
        'You have Registered successfully. After background verification, you will get an email. Please wait for the mail.',
      centered: true,
      onOk: () => {
        navigate('/login');
      },
    });
  };
 
  return (
<Layout style={{ minHeight: '100vh' }}>
<Content>
<div className="register-container">
<div className="register-content">
<Title level={2} style={{ marginBottom: '20px' }}>
    <Layout style={{ minHeight: '100vh' }}>
      <Content>
        <div
          className="register-container"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#2c3e50',
          }}
        >
          <div className="register-content" style={{ textAlign: 'center' }}>
            <Title level={2} style={{ marginBottom: '20px', color: 'white' }}>
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
            </Text>
          </div>

          <div
            className="register-form"
            style={{
              marginTop: '20px',
              textAlign: 'left',
              backgroundColor: '#ffffff',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              maxWidth: '400px',
              width: '100%',
            }}
          >
            <Title level={4}>Register</Title>
            <Form
              form={form}
              layout="vertical"
              onFinish={(values) => {
                handleLoginSuccess();
              }}
            >
              <Form.Item
                label="Full Name"
                name="fullname"
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
                label="Upload Id"
                name="uploadId"
                rules={[{ required: true, message: 'Please enter your Upload Id!' }]}
>
<Input placeholder="Enter your Upload Id" />
</Form.Item>
 
              >
                <Input placeholder="Enter your UploadId" />
              </Form.Item>

              <Form.Item
                label="Country"
                name="Country"
                rules={[{ required: true, message: 'Please enter your Country!' }]}
              >
                <Input placeholder="Enter your country" />
              </Form.Item>
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please enter your username!' }]}
>
<Input placeholder="Enter your username" />
</Form.Item>
 
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
                name="rePassword"
                rules={[{ required: true, message: 'Please reenter your password!' }]}
>
<Input.Password placeholder="Re-enter your password" />
</Form.Item>
 
              <Form.Item
                label="Country"
                name="country"
                rules={[{ required: true, message: 'Please enter your country!' }]}
>
<Input placeholder="Enter your country" />
</Form.Item>
 
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
 
export default RegisterPage;