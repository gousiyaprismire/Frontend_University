import React from 'react';

import './Announcement.css';
const Announcementitem = ({title, content, date}) => {
  return (
    <div className='announcement-item'>
      <h2>{title}</h2>
      <p>{content}</p>
      <p><strong>Date:</strong>{date}</p>
    </div>
  );
};

export default Announcementitem;
