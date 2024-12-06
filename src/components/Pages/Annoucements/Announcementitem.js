import React from 'react';
import './Announcement.css';
const Announcementitem = ({title,image, content, date}) => {
  return (
    <div className='announcement-item'>
      <h2 style={{fontFamily:'Roboto'}}>{title}</h2>
      <img className='announcement-image' src={image} alt='photo'/>
      <p style={{fontFamily:'Roboto'}}>{content}</p>
      <p style={{fontFamily:'Roboto'}}><strong>Date:</strong>{date}</p>
    </div>
  );
};

export default Announcementitem;
