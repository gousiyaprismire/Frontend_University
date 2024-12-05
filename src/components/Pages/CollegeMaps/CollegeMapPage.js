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
      <img src={classroom2} alt='classrooms' style={{ maxWidth: '35%', height: 'auto' }}/>
      <img src={classroom3} alt='classrooms' style={{ maxWidth: '35%', height: 'auto' }}/>
      </div>
      <p className='center-text'>Our classrooms are equipped with modern facilities to enhance the learning experience.</p>
      <h3>College Ground</h3>
      <div className='image-row'>
      <img src={playground} alt='playground' style={{maxWidth:'35%', height:'auto'}}/>
      <img src={playground2} alt='playground' style={{maxWidth:'35%', height:'auto'}}/>
      <img src={playground3} alt='playground' style={{maxWidth:'35%', height:'auto'}}/>
      </div>
      <p className='center-text'>The college ground is a spacious area for sports and outdoor activities.</p>
      <h3>College Library</h3>
      <div className='image-row'>
      <img src={library} alt='library' style={{maxWidth:'35%', height:'auto'}}/>
      <img src={library2} alt='library' style={{maxWidth:'35%', height:'auto'}}/>
      <img src={library3} alt='library' style={{maxWidth:'35%', height:'auto'}}/>
      </div>
      <p className='center-text'>The library houses a vast collection of books and digital resources for students.</p>
      <h3>College Labs</h3>
      <div className='image-row'>
      <img src={labs} alt='labs' style={{maxWidth:'35%', height:'auto'}}/>
      <img src={clab2} alt='labs' style={{maxWidth:'35%', height:'auto'}}/>
      <img src={clab3} alt='labs' style={{maxWidth:'35%', height:'auto'}}/>
      </div>
      <p className='center-text'>Our labs are well-equipped for practical experiments and research.</p>
      <div className='image-row'>
      <img src={lab2} alt='lab2' style={{maxWidth:'35%', height:'auto'}}/>
      <img src={slab2} alt='lab2' style={{maxWidth:'35%', height:'auto'}}/>
      <img src={slab3} alt='lab2' style={{maxWidth:'35%', height:'auto'}}/>
      </div>
      <p className='center-text'>Additional lab facilities provide ample space for various scientific studies.</p>
      <h3>College Canteen</h3>
      <div className='image-row'>
      <img src={canteen} alt='canteen' style={{maxWidth:'35%', height:'auto'}}/>
      <img src={canteen2} alt='canteen' style={{maxWidth:'35%', height:'auto'}}/>
      <img src={canteen3} alt='canteen' style={{maxWidth:'35%', height:'auto'}}/>
      </div>
      <p className='center-text'>The canteen offers a variety of healthy and delicious food options for students and staff.</p>
    </div>
  );
};

export default CollegeMap;
