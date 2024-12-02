import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import CollegeMap from './components/Pages/CollegeMapPage';
import FacultyInfo from './components/Pages/FacultyInfo';
import Announcements from './components/Pages/Announcements';
import HallOfFame from './components/Pages/HallOfFame';
import RulesAndRegulations from './components/Pages/RulesAndRegulations';
import AboutUs from './components/Pages/AboutUs';
import ContactUs from './components/Pages/ContactUs';
import LogOut from './components/Pages/LogOut';
import Study from './components/Pages/Study';
import Scholarship from './components/Pages/Scholarship';
import Topbar from './components/Topbar';
import VerificationScreen from './components/Pages/VerificationScreen';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column',   width: '250px',
            backgroundColor: '#212121',
            height: 'calc(100vh - 80px)',
            position: 'fixed',
            top: '80px',
            flex: 1,
            left: 0,
            overflowY: 'auto',
            zIndex: 9,}}>
      <Sidebar />
      <div style={{ display: 'flex', marginTop: '80px', }}>
        <Topbar />
      
        <div style={{ marginLeft: 240, flexGrow:1, padding: '16px', backgroundColor: '#ffffff', minHeight: '100vh', color: '#000', overflowY: 'auto' }}>
          <Routes>
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
