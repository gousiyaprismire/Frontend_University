import React from 'react';
import './CollegeMap.css';
import classroom from '../../../images/classroom.jpg';
import playground  from '../../../images/playground.jpg';
import library from '../../../images/library.jpg';
import labs from '../../../images/labs.jpg';
import lab2 from '../../../images/lab2.jpg';
import canteen from '../../../images/canteen.png';
const CollegeMap = () => {
  return (
    <div className='container'>
      <h1>College Map</h1>
      <h3>College ClassRooms</h3>
      <img src={classroom} alt='classrooms' style={{ maxWidth: '100%', height: 'auto' }}/>
      <p>Our classrooms are equipped with modern facilities to enhance the learning experience.</p>
      <h3>College Ground</h3>
      <img src={playground} alt='playground' style={{maxWidth:'100%', height:'auto'}}/>
      <p>The college ground is a spacious area for sports and outdoor activities.</p>
      <h3>College Library</h3>
      <img src={library} alt='library' style={{maxWidth:'100%', height:'auto'}}/>
      <p>The library houses a vast collection of books and digital resources for students.</p>
      <h3>College Labs</h3>
      <img src={labs} alt='labs' style={{maxWidth:'100%', height:'auto'}}/>
      <p>Our labs are well-equipped for practical experiments and research.</p>
      <img src={lab2} alt='lab2' style={{maxWidth:'100%', height:'auto'}}/>
      <p>Additional lab facilities provide ample space for various scientific studies.</p>
      <h3>College Canteen</h3>
      <img src={canteen} alt='canteen' style={{maxWidth:'100%', height:'auto'}}/>
      <p>The canteen offers a variety of healthy and delicious food options for students and staff.</p>
    </div>
  );
};

export default CollegeMap;
