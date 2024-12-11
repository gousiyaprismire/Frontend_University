import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import {
  HomeOutlined,

  InfoCircleOutlined,
  MailOutlined,
  LoginOutlined,
  LogoutOutlined,
  
} from '@ant-design/icons';
import Sidebar from './components/sidebar';
import LoginPage from './components/Pages/Login/Login';
import Welcome from './components/Pages/Login/Welcome';
import CollegeMap from './components/Pages/CollegeMaps/CollegeMapPage';
import FacultyInfo from './components/Pages/FacultyInfo/FacultyInfo';
import Announcements from './components/Pages/Annoucements/Announcements';
import HallOfFame from './components/Pages/HallOfFame/HallOfFame';
import RulesAndRegulations from './components/Pages/RulesAndRegulations/RulesAndRegulations';
import AboutUs from './components/Pages/about_us/AboutUs';
import ContactUs from './components/Pages/Contactus/ContactUs';
import Admissions from './components/Pages/Admissions/Admissions';
import Study from './components/Pages/studyOptions/Study';
import Scholarship from './components/Pages/Scholarship/Scholarship';
import Sports from './components/Pages/Sports/Sports';
import RegisterPage from './components/Pages/Login/Registration';
import News from './components/Pages/News/News';
import VerificationScreen from './components/Pages/Verification/VerificationScreen';

import StudyDetail from './components/Pages/studyOptions/StudyDetail';
import OnlineCourses from './components/Pages/OnlineCourses/OnlineCourses';

import GymOpening from './components/Pages/News/GymOpening';
import AnnualDay from './components/Pages/News/AnnualDay';
import CelebratingWomeninSports from './components/Pages/News/CelebratingWomeninSports';
import SportsandWellness from './components/Pages/News/SportsandWellness';

import AdminRegistration from './components/Pages/Login/AdminRegistration';
import AdminLogin from './components/Pages/Login/AdminLogin';

const { Header, Content } = Layout;


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false); 
  const [collapsed, setCollapsed] = useState(false); 

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const TopMenu = () => {
    const location = useLocation(); 
    const selectedKey = location.pathname;

    return (
      <Menu
        mode="horizontal"
        selectedKeys={[selectedKey]} 
        style={{ flex: 1, backgroundColor: '#f5f5dc', borderBottom: 'none' }} 
        onClick={(e) => {
          if (e.key === '/logout') return handleLogout();
          window.location.href = e.key;
        }}
      >
        <Menu.Item key="/" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="/about-us" icon={<InfoCircleOutlined />}>
          About Us
        </Menu.Item>
        <Menu.Item key="/contact-us" icon={<MailOutlined />}>
          Contact Us
        </Menu.Item>
        {loggedIn && (
          <Menu.Item key="/logout" icon={<LogoutOutlined />}>
            Logout
          </Menu.Item>
        )}
      </Menu>
    );
  };

  return (
    <Router>
      <Layout style={{ minHeight: '100vh', flexDirection: 'column' }}>
        
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#f5f5dc', 
          }}
        >
          <div
            onClick={() => window.location.href = '/'}
            style={{
              color: '#000',
              fontSize: '24px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            <img src='/dayton.jpg' height="50" width="60" />University of Dayton
          </div>
          <TopMenu />
          {!loggedIn && (
            <Button
              type="primary"
              icon={<LoginOutlined />}
              onClick={() => window.location.href = '/Adminlogin'}
            >
              SignIn as Admin
            </Button>
          )}
          &nbsp;
          {!loggedIn && (
            <Button
              type="primary"
              icon={<LoginOutlined />}
              onClick={() => window.location.href = '/login'}
            >
              SignIn as Student
            </Button>
          )}
        </Header>

          <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} loggedIn={loggedIn} />
          <Content style={{ padding: '20px', backgroundColor: '#f0f2f5', width:'100vw' }}>
            <Routes>
              
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn} />} />
              <Route path="/adminlogin" element={<AdminLogin setLoggedIn={setLoggedIn} />} />
              <Route path="/register" element={<RegisterPage setLoggedIn={setLoggedIn} />} />
              <Route path="/adminregister" element={<AdminRegistration setLoggedIn={setLoggedIn} />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />              
              <Route path="/college-map" element={<CollegeMap />} />
              <Route path="/faculty-info" element={<FacultyInfo />} />
              <Route path="/announcements" element={<Announcements />} />
              <Route path="/hall-of-fame" element={<HallOfFame />} />
              <Route path="/rules-and-regulations" element={<RulesAndRegulations />} />
              <Route path="/verification-screen" element={<VerificationScreen />} />
              <Route path="/online-courses" element={<OnlineCourses />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/study" element={<Study />} />

              <Route path="/" element={<Study />} />
              <Route path="/study/:type" element={<StudyDetail />} />
              
                  
              {loggedIn && (
                <>
                  <Route path="/scholarship" element={<Scholarship />} />
                </>
              )}

              <Route path="/scholarship" element={<Scholarship />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/news" element={<News />} />

              <Route path="/gym-opening" element={<GymOpening/>}/>
              <Route path="/annaul-day" element={<AnnualDay/>}/>
              <Route path="/celebrating-women-in-sports" element={<CelebratingWomeninSports/>}/>
              <Route path="/sports-and-wellness" element={<SportsandWellness/>}/>

              {!loggedIn && (
                <Route path="/verification-screen" element={<Navigate to="/login" />} />
              )}
            </Routes>
          </Content>
        </Layout>
    </Router>
  );
};

export default App;