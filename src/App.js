import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import CollegeMap from './components/Pages/CollegeMapPage';
import FacultyInfo from './components/Pages/FacultyInfo';
import Announcements from './components/Pages/Announcements';
import HallOfFame from './components/Pages/HallOfFame';
import RulesAndRegulations from './components/Pages/RulesAndRegulations';
import AboutUs from './components/Pages/about_us/AboutUs';
import ContactUs from './components/Pages/Contactus/ContactUs';
import LogOut from './components/Pages/LogOut';
import Study from './components/Pages/studyOptions/Study';
import Scholarship from './components/Pages/Scholarship';
import Topbar from './components/Topbar';
import VerificationScreen from './components/Pages/VerificationScreen';
import Sports from './components/Pages/Sports';
import LoginPage from './components/Pages/LoginPage';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column',
          }}>
        <div style={{ display: 'flex', marginTop: '80px', }}>
        {loggedIn &&
          <Topbar />
        }
        {loggedIn &&
          <Sidebar />
        }
        <div style={loggedIn ? {left: '25%', position:'relative', maxWidth: '70%', flexGrow:1, padding: '16px', backgroundColor: '#ffffff', minHeight: '100vh', color: '#000', overflowY: 'auto' } : {flexGrow:1, padding: '16px', backgroundColor: '#ffffff', minHeight: '100vh', color: '#000', overflowY: 'auto' }}>
          <Routes>
            <Route path="/" element={<LoginPage setLoggedIn={setLoggedIn} />} />
            <Route path="/Sports" element={<Sports />} />
            <Route path="/college-map" element={<CollegeMap />} />
            <Route path="/faculty-info" element={<FacultyInfo />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/hall-of-fame" element={<HallOfFame />} />
            <Route path="/verification-screen" element={<VerificationScreen/>}/>
            <Route path="/rules-and-regulations" element={<RulesAndRegulations />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/study" element={<Study />} />
            <Route path="/scholarship" element={<Scholarship />} />
          </Routes>
        </div>
      </div>
      </div>
    </Router>
  );
};

export default App;
