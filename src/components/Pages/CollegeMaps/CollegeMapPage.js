import React from 'react';
import './CollegeMap.css';
import classroom from '../../../images/classroom.jpg';
import classroom2 from '../../../images/classroom2.jpg';
import classroom3 from '../../../images/classroom3.jpg';
import playground  from '../../../images/playground.jpg';
import playground2 from '../../../images/ground2.jpg'
import playground3 from '../../../images/ground3.jpg'
import library from '../../../images/library.jpg';
import library2 from '../../../images/library2.jpg';
import library3 from '../../../images/library3.jpg';
import labs from '../../../images/labs.jpg';
import clab2 from '../../../images/clab2.jpg';
import clab3 from '../../../images/clab3.png';
import lab2 from '../../../images/lab2.jpg';
import slab2 from '../../../images/slab2.jpg';
import slab3 from '../../../images/slab3.jpg';
import canteen from '../../../images/canteen.png';
import canteen2 from '../../../images/canteen2.webp';
import canteen3 from '../../../images/canteen3.jpg';
const CollegeMap = () => {
  return (
    <div className='container'>
      <div className='location-container'>
        <h3>College Map</h3> 
       <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.9630579153167!3d-37.81410797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d0f0f0f0f0f0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1611811234567!5m2!1sen!2sau"
         width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <h3>College ClassRooms</h3>
      <div className='image-row'>
      <img src={classroom} alt='classrooms' style={{ maxWidth: '35%', height: 'auto' }}/>
      <img src={classroom2} alt='classrooms' style={{ maxWidth: '50%', height: 'auto' }}/>
      <img src={classroom3} alt='classrooms' style={{ maxWidth: '35%', height: 'auto' }}/>
      </div>
      <p className='center-text'style={{fontFamily:'Roboto'}}>Our classrooms are equipped with modern facilities to enhance the learning experience. Each classroom features state-of-the-art technology, including interactive whiteboards, high-speed internet access, and comfortable seating arrangements. These facilities are designed to support a variety of teaching methods and provide a conducive environment for both students and teachers. We are committed to creating an engaging and effective learning atmosphere for all.</p>
      <h3>College Ground</h3>
      <div className='image-row'>
      <img src={playground} alt='playground' style={{maxWidth:'35%', height:'auto'}}/>
      <img src={playground2} alt='playground' style={{maxWidth:'35%', height:'auto'}}/>
      <img src={playground3} alt='playground' style={{maxWidth:'35%', height:'auto'}}/>
      </div>
      <p className='center-text'style={{fontFamily:'Roboto'}}>The college ground is a spacious area for sports and outdoor activities. It provides ample space for students to engage in various sports such as football, cricket, and athletics. The ground is well-maintained and equipped with necessary facilities to support these activities. It also serves as a venue for outdoor events and gatherings, fostering a sense of community and teamwork among students. We encourage everyone to make the most of this wonderful resource..</p>
      <h3>College Library</h3>
      <div className='image-row'>
      <img src={library} alt='library' style={{maxWidth:'35%', height:'auto'}}/>
      <img src={library2} alt='library' style={{maxWidth:'35%', height:'auto'}}/>
      <img src={library3} alt='library' style={{maxWidth:'35%', height:'auto'}}/>
      </div>
      <p className='center-text'style={{fontFamily:'Roboto'}}>The library houses a vast collection of books and digital resources for students. It offers a wide range of academic texts, journals, and reference materials to support your studies. Additionally, the library provides access to numerous online databases and e-books, ensuring that you have the resources you need at your fingertips. Our dedicated staff is always available to assist you in finding the right materials and making the most of the library’s offerings. We encourage all students to take advantage of these valuable resources.</p>
      <h3>College Labs</h3>
      <div className='image-row'>
      <img src={labs} alt='labs' style={{maxWidth:'35%', height:'auto'}}/>
      <img src={clab2} alt='labs' style={{maxWidth:'35%', height:'auto'}}/>
      <img src={clab3} alt='labs' style={{maxWidth:'28%', height:'auto'}}/>
      </div>
      <p className='center-text'style={{fontFamily:'Roboto'}}>Our labs are well-equipped for practical experiments and research. Each lab is furnished with the latest equipment and technology to support a wide range of scientific and technical studies. Students have access to high-quality instruments and materials, enabling them to conduct experiments and research projects effectively. Our labs are designed to provide a safe and conducive environment for hands-on learning, fostering innovation and discovery. We encourage all students to utilize these facilities to enhance their practical skills and knowledge.</p>
      <div className='image-row'>
      <img src={lab2} alt='lab2' style={{maxWidth:'35%', height:'auto'}}/>
      <img src={slab2} alt='lab2' style={{maxWidth:'35%', height:'auto'}}/>
      <img src={slab3} alt='lab2' style={{maxWidth:'35%', height:'auto'}}/>
      </div>
      <p className='center-text'style={{fontFamily:'Roboto'}}>Additional lab facilities provide ample space for various scientific studies. These labs are equipped with advanced tools and equipment to support a wide range of experiments and research activities. Students can explore different scientific disciplines, from biology and chemistry to physics and engineering. The spacious layout ensures a comfortable and efficient working environment, promoting collaboration and innovation. We encourage students to take full advantage of these facilities to enhance their learning and research capabilities.</p>
      <h3>College Canteen</h3>
      <div className='image-row'>
      <img src={canteen} alt='canteen' style={{maxWidth:'35%', height:'auto'}}/>
      <img src={canteen2} alt='canteen' style={{maxWidth:'35%', height:'auto'}}/>
      <img src={canteen3} alt='canteen' style={{maxWidth:'37%', height:'auto'}}/>
      </div>
      <p className='center-text'style={{fontFamily:'Roboto'}}>The canteen offers a variety of healthy and delicious food options for students and staff. From fresh salads and sandwiches to hot meals and snacks, there is something for everyone. The menu is designed to cater to diverse dietary needs, including vegetarian and vegan options. The canteen is a great place to relax and enjoy a meal with friends between classes. We strive to provide nutritious and tasty food to keep you energized throughout the day. Come and explore the daily specials and enjoy a pleasant dining experience!</p>
    </div>
  );
};

export default CollegeMap;
