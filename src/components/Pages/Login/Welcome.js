import React from 'react';
import HomeCarousel from '../Home/HomeCarousel';

const Welcome = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <div style={{ marginTop: '40px' }}>
        <h2>Welcome to the University Portal</h2>
        <p>
          Our portal offers access to everything you need, from announcements to campus maps, and much more.
          Login to explore or register to start your journey!
        </p>
      </div>
      <HomeCarousel />
    </div>
  );
};

export default Welcome;
