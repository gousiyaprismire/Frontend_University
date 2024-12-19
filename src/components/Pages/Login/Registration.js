import React, { useState } from 'react';
import { Layout, Form, Input, Button, Typography, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './Registration.css';

const { Content } = Layout;
const { Title, Text } = Typography;

const RegisterPage = () => {
  const [userId, setUserId] = useState("");
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubmit = async (values) => {
    const newId = uuidv4(); 
    setUserId(newId);
    console.log("Generated User ID:", newId);
    try {
      const { fullname, email, mobile, country, uploadId, username, password } = values;

      const fileInput = document.getElementById("uploadIdInput");
      const formData = new FormData();
      formData.append("file", fileInput.files[0]);
  
      const uploadResponse = await axios.post(`http://localhost:8080/api/students/${uuidv4()}/upload`,
        formData
      );
  
      if (uploadResponse.status === 200) {
        const uploadedFilePath = uploadResponse.data;

        const registrationData = {
          fullname,
          email,
          mobile,
          country,
          uploadId: uploadedFilePath, 
          username,
          password,
        };
        const registerResponse = await axios.post(
          "http://localhost:8080/api/students/register",
          registrationData
        );
  
        if (registerResponse.status === 200) {
          setIsModalVisible(true);
        }
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
    navigate('/login');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
    <Content>
      <div
        className="register-container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <div className="register-content" style={{ textAlign: 'center' }}>
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
              label="Upload ID"
              name="uploadId"
              rules={[{ required: true, message: "Please upload your ID!" }]}
            >
              <Input type="file" id="uploadIdInput" />
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

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Register
               </Button>
              </Form.Item>
            </Form>
          </div>
        </div>

        
        <Modal
          title="Registration Successful"
          visible={isModalVisible}
          onOk={handleModalOk}
          closable={false}
          centered
          footer={[
            <Button key="ok" type="primary" onClick={handleModalOk}>
              OK
            </Button>,
          ]}
        >
          <p>Your registration was successful!</p>
          <p>Please wait for approval before logging in.</p>
        </Modal>
      </Content>
    </Layout>
  );
};

export default RegisterPage;
