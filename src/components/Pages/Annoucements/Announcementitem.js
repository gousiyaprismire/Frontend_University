import React from 'react';
import './Announcement.css';

const Announcementitem = ({ title, image, content, date }) => {
  return (
    <div className='announcement-item'>
      <img className='announcement-image' src={image} alt='photo' />
      <div className='announcement-details'>
        <h2 style={{fontFamily:'Roboto'}}>{title}</h2>
        <p style={{fontFamily:'Roboto'}}>{content}</p>
        <p style={{fontFamily:'Roboto'}}><strong>Date:</strong> {date}</p>
      </div>
    </div>
  );
};

export default Announcementitem;
