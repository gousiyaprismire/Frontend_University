import React from 'react';
import './Announcement.css';
import Announcementitem from './Announcementitem';
import exam from '../../../images/exam.jpg';
import newsem from '../../../images/newsem.jpg';
import graduation from '../../../images/graduation.jpg';
import renovation from '../../../images/renov.jpg';
import sports from '../../../images/sportsevent.jpg';
import workshop from '../../../images/workshop.png';
import culturalEvent from '../../../images/cultural.jpg';

const announcements = [
  { title: 'New Semester Start Date',image:'https://pbs.twimg.com/media/FIrx_OOVEAEQKjP.jpg', content: 'The new semester will start on January 15, 2024. We are excited to welcome all students back to campus. Please ensure you have completed your registration and have all necessary materials ready. Let’s make this semester a great one! The new semester will start on January 15, 2024. We are excited to welcome all students back to campus. Please ensure you have completed your registrat', date: '2024-01-15' },
  { title: 'Library Renovation',image:graduation, content: 'The library will be closed for renovation from February 1 to March 1, 2024. During this period, all library services will be temporarily unavailable. We apologize for any inconvenience this may cause. Students are encouraged to utilize online resources and digital libraries. We look forward to unveiling a newly renovated library with improved facilities and resources to better serve our community.', date: '2024-02-01' },
  { title: 'Graduation Ceremony',image:renovation, content: 'The graduation ceremony for the class of 2024 will take place on June 15, 2024. We are thrilled to celebrate the achievements of our graduates. The ceremony will be held at the main auditorium, starting at 10:00 AM. Families and friends are welcome to join us in honoring the hard work and dedication of our students. Please arrive early to secure seating and enjoy the festivities. Congratulations to the class of 2024!', date: '2025-03-15' },
  { title: 'Exam Schedule Release', image:exam, content: 'The exam schedule for the spring semester will be released on May 1, 2024. Students are advised to check the official website for the detailed timetable. It is important to review the schedule carefully and plan your study time accordingly. If you have any questions or concerns about the exam dates, please contact the academic office. Good luck with your preparations!', date: '2024-05-01' }
];

const Announcements = () => {
  return (
     <div className='announcements'>
      <h1 style={{fontFamily:'Roboto'}}>Announcements</h1>
      <div className='announcement-list'>
      {announcements.map((announcement, index) => (
        <Announcementitem
          key={index}
          title={announcement.title}
          image={announcement.image}
          content={announcement.content}
          date={announcement.date}
        />
      ))}
      </div>
      <div className='general-announcements'>
       <div className='sports-event'>
        <h2 style={{fontFamily:'Roboto'}}>Annual Sports Meet</h2>
         <img src={sports} alt='Sports' className='round-image'/>
          <p style={{fontFamily:'Roboto'}}>Join us for the Annual Sports Meet on March 10, 2024. Participate in various sports activities and showcase your athletic skills. Let's make this event a memorable one!</p>
        </div>
        <div className='sports-event'>
        <h2 style={{fontFamily:'Roboto'}}>WorkShop</h2>
         <img src={workshop} alt='Sports' className='round-image'/>
          <p style={{fontFamily:'Roboto'}}>We are excited to announce a Coding Workshop on April 5, 2024. This workshop is open to all students interested in learning the basics of programming. Register now to secure your spot! </p>
        </div>
        <div className='sports-event'>
        <h2 style={{fontFamily:'Roboto'}}>CulturalEvent</h2>
         <img src={culturalEvent} alt='Sports'className='round-image'/>
          <p style={{fontFamily:'Roboto'}}>Celebrate diversity at our Cultural Festival on May 20, 2024. Enjoy performances, food, and activities from different cultures. Everyone is welcome. This is a wonderful opportunity to learn about and appreciate the rich cultural heritage of our community. Don't miss out on the fun and festivities!</p>
        </div>
        </div>
        <div>
        <div className='announcement-footer'>
        <p>&copy; 2024 University of Dayton Library. All rights reserved.</p>
            <p>Contact us: <a href="mailto:library@university.edu">library@university.edu</a> | Phone: (123) 456-7890</p>
            <p>Follow us on: <a href="https://www.facebook.com/universitylibrary" target="_blank" rel="noopener noreferrer">Facebook</a> | <a href="https://www.twitter.com/universitylibrary" target="_blank" rel="noopener noreferrer">Twitter</a> | <a href="https://www.instagram.com/universitylibrary" target="_blank" rel="noopener noreferrer">Instagram</a></p>
        </div>
        </div>
    </div>
     
  );
};

export default Announcements;