import React from 'react';

import Announcementitem from './Announcementitem';

const announcements = [
  { title: 'New Semester Start Date', content: 'The new semester will start on January 15, 2024.', date: '2024-01-15' },
  { title: 'Library Renovation', content: 'The library will be closed for renovation from February 1 to March 1, 2024.', date: '2024-02-01' },
  { title: 'Graduation Ceremony', content: 'The graduation ceremony for the class of 2024 will take place on June 15, 2024.', date: '2025-03-15' },
  { title: 'Exam Schedule Release', content: 'The exam schedule for the spring semester will be released on May 1, 2024.', date: '2024-05-01' }
];

const Announcements = () => {
  return (
    <div className='announcement-list'>
      <h1>Announcements</h1>
      {announcements.map((announcement, index) => (
        <Announcementitem
          key={index}
          title={announcement.title}
          content={announcement.content}
          date={announcement.date}
        />
      ))}
    </div>
  );
};

export default Announcements;