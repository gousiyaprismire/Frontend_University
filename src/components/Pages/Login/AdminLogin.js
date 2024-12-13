
// import { Layout, Form, Input, Button, Typography, message } from 'antd';
// import { Link, useNavigate } from 'react-router-dom';
// import './Login.css';

// const { Content } = Layout;
// const { Title } = Typography;

// const AdminLogin = () => {
//   const [form] = Form.useForm();
//   const navigate = useNavigate();

//   const handleSubmit = (values) => {
//     message.success('Login successful!');
//     navigate('/');
//   };

//   return (
//     <Layout style={{ minHeight: '100vh' }}>
//       <Content>
//         <div className="register-container">
//           <div className="register-content">
//             <Title level={2} style={{ marginBottom: '20px' }}>
//               Login to your Account
//             </Title>
//           </div>

//           <div className="register-form">
//             <Title level={4}>Login</Title>
//             <Form
//               form={form}
//               layout="vertical"
//               onFinish={handleSubmit}
//               style={{ maxWidth: '400px' }}
//             >
//               <div style={{ marginBottom: '20px', textAlign: 'right', right:'50px', position:'relative' }}>
//                 Don’t have an account? &nbsp;
//                 <Link to="/adminregister" style={{ fontSize: '14px' }}>
//                   Register here
//                 </Link>
//               </div>

//               <Form.Item
//                 label="Username"
//                 name="username"
//                 rules={[{ required: true, message: 'Please enter your username!' }]}
//               >
//                 <Input placeholder="Enter your username" />
//               </Form.Item>

//               <Form.Item
//                 label="Password"
//                 name="password"
//                 rules={[{ required: true, message: 'Please enter your password!' }]}
//               >
//                 <Input.Password placeholder="Enter your password" />
//               </Form.Item>

//               <Form.Item>
//                 <Button type="primary" htmlType="submit" block>
//                   Login
//                 </Button>
//               </Form.Item>
//             </Form>
//           </div>
//         </div>
//       </Content>
//     </Layout>
//   );
// };

// export default AdminLogin;





import { Layout, Form, Input, Button, Typography, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Login.css';

const { Content } = Layout;
const { Title } = Typography;

const AdminLogin = () => {
  const [form] = Form.useForm();
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({}); 
  const [responseMessage, setResponseMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: '' }); 
  };

  const handleSubmit = async () => {
   
    let formErrors = {};
    if (!loginData.username) formErrors.username = 'Username is required.';
    if (!loginData.password) formErrors.password = 'Password is required.';

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/admins/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      const data = await response.text();
      setResponseMessage(data);
      if (response.ok) {
   
        message.success('Login successful! Redirecting to home page...');
        
        navigate('/');
      } else {
        message.error(data || 'An error occurred during login.');
      }
    } catch (error) {
      setResponseMessage('An error occurred during login.');
      message.error('An error occurred during login.');
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
            <Title level={4}>Login</Title>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              style={{ maxWidth: '400px' }}
            >
              <div style={{ marginBottom: '20px', textAlign: 'right', right: '50px', position: 'relative' }}>
                Don’t have an account? &nbsp;
                <Link to="/adminregister" style={{ fontSize: '14px' }}>
                  Register here
                </Link>
              </div>

              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please enter your username!' }]}
                validateStatus={errors.username ? 'error' : ''}
                help={errors.username || ''}
              >
                <Input
                  name="username"
                  placeholder="Enter your username"
                  value={loginData.username}
                  onChange={handleChange}
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please enter your password!' }]}
                validateStatus={errors.password ? 'error' : ''}
                help={errors.password || ''}
              >
                <Input.Password
                  name="password"
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={handleChange}
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Login
                </Button>
              </Form.Item>
            </Form>

            {responseMessage && (
              <p
                style={{
                  marginTop: '20px',
                  color: responseMessage.includes('successful') ? 'green' : 'red',
                }}
              >
                {responseMessage}
              </p>
            )}
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default AdminLogin;
