import React from 'react';

const ContactUs = () => {
  return (
    <div>
    
      <div className="contact-container">
        <div className="card map-card">
          <h4>Contact Us</h4>
          <div className="line"></div>
          <h3>Keep In Touch</h3>

          <div className="map-image-wrapper">
            {/* <img
              src={mapImage}  
              alt="Yogi Vemana University Map"
              className="map-image"
            /> */}
            <p className='view-jntu'> JNTU.Kakinada</p>
            <a
              href="https://www.google.com/maps/dir//Jawaharlal+Nehru+Technological+University,+Kakinada,+Andhra+Pradesh+533003/@16.9796435,82.2350907,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a38299cdd8f2049:0xb7251fd704659869!2m2!1d82.242755!2d16.9782157?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="view-large-map-link"
            >
              View on Large   Map
            </a>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default ContactUs;
