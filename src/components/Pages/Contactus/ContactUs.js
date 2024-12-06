

import React, { useState } from 'react';
import './ContactUs.css';  
import Email from '../../../images/email.png';
import mapImage from '../../../images/Map.png';
import home from '../../../images/Home.png';
 



const ContactUs = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
    
    <div className="contact-container">
    <div className="card map-card">
    <h4>Contact Us</h4>
    <div className="line"></div> 
    <h3>Keep In Touch</h3>
    
    <div className="map-image-wrapper">
      <img
        src={mapImage}  
        alt="Yogi Vemana University Map"
        className="map-image"
      />
      <p className='view-jntu'>JNTU.Kakinada</p>
      <a
        href="https://www.google.com/maps/dir//Jawaharlal+Nehru+Technological+University,+Kakinada,+Andhra+Pradesh+533003/@16.9796435,82.2350907,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a38299cdd8f2049:0xb7251fd704659869!2m2!1d82.242755!2d16.9782157?entry=ttu"
        target="_blank"
        rel="noopener noreferrer"
        className="view-large-map-link"
      >
        View on Large Map
      </a>
    </div>
  </div>

  <div className="card contact-card">
  <div className="info-item">
    <img
      src={home}
      alt="Registrar Icon"
      className="info-icon"
    />
    <div className="address-container">
      <p className="address-text">
        The Registrar<br />
        Jawaharlal Nehru Technological University, Kakinada<br />
        Kakinada, East Godavari District<br />
        Andhra Pradesh, India<br />
        Zip/Pin Code: 533003
      </p>
    </div>
</div>


    <div className="info-item">
      <img
        src={Email}
        alt="Email Icon"
        className="info-icon"
      />
      <div>
        <p id='gmail'>contact.jntuk@gmail.com</p>
      </div>
    </div>
  </div>
</div>
<br/><br/><br/>
      <h1 style={{ color: 'black', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontWeight: 'bold' ,paddingTop:'0px',marginTop:'0px'}}>
  Submit Your Admission Inquiry
</h1>

    
      <div className="contact-us">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              required
            />
          </div>

          <button type="submit" className="submit-btn">Submit</button>

          {submitted && (
            <p className="submission-status">Thank you for reaching out! We will get back to you soon.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
