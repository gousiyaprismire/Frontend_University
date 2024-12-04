import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import CollegeMap from './components/Pages/CollegeMaps/CollegeMapPage';
import FacultyInfo from './components/Pages/FacultyInfo';
import Announcements from './components/Pages/Annoucements/Announcements';
import HallOfFame from './components/Pages/HallOfFame';
import RulesAndRegulations from './components/Pages/RulesAndRegulations';
import AboutUs from './components/Pages/about_us/AboutUs';
import ContactUs from './components/Pages/Contactus/ContactUs';
import LogOut from './components/Pages/LogOut';
import Study from './components/Pages/studyOptions/Study';
import Scholarship from './components/Pages/Scholarship';
import VerificationScreen from './components/Pages/VerificationScreen';
import Sports from './components/Pages/Sports';
import LoginPage from './components/Pages/Login/LoginPage';
import Welcome from './components/Pages/Welcome';  

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);  

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        
        {loggedIn && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#f5f5dc',  
              color: '#000',
              padding: '10px 20px',
              height: '70px',
              position: 'relative',  
            }}
          >
            
            <h1 style={{ marginLeft: '20px', fontSize: '24px' }}>University App</h1>

            
            {loggedIn && (
              <div style={{ position: 'absolute', top: '10px', right: '20px' }}>
                <Sidebar />
              </div>
            )}
          </div>
        )}

        
        <div style={{ display: 'flex', flex: 1 }}>
          
          <div
            style={{
              flex: 1,
              backgroundColor: '#ffffff',
              color: '#000',
              overflowY: 'auto',
            }}
          >
            <Routes>
              
              <Route
                path="/"
                element={loggedIn ? <Welcome /> : <LoginPage setLoggedIn={setLoggedIn} />}
              />

              
              <Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn} />} />

              
              {loggedIn && (
                <>
                  <Route path="/Sports" element={<Sports />} />
                  <Route path="/college-map" element={<CollegeMap />} />
                  <Route path="/faculty-info" element={<FacultyInfo />} />
                  <Route path="/announcements" element={<Announcements />} />
                  <Route path="/hall-of-fame" element={<HallOfFame />} />
                  <Route path="/verification-screen" element={<VerificationScreen />} />
                  <Route path="/rules-and-regulations" element={<RulesAndRegulations />} />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                  <Route path="/logout" element={<LogOut />} />
                  <Route path="/study" element={<Study />} />
                  <Route path="/scholarship" element={<Scholarship />} />
                </>
              )}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
