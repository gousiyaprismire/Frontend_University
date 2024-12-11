import React from 'react';
import './Study.css'; 
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const Study = () => { 
  return (
    <> 
    <h2  style={{ textAlign: 'center' }}>Welcome to study options page</h2>
      <div className="study-container">
        <div id="carouselExampleDark" className="carousel carousel-light slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src="https://webfiles.amrita.edu/2019/12/rE9oOfim-Elec-3-1384.jpg" className="d-block w-100" alt="pic1"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Bachelor of Engineering in Mechanical Engineering</h5>
                <p className="carousel-text">An undergraduate program that focuses on the design, analysis, and manufacturing of mechanical systems and machinery</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="https://www.learningroutes.in/_next/image?url=https%3A%2F%2Faskusedu.com%2Fblogdashboard%2Fwp-content%2Fuploads%2F2024%2F05%2Fmbbs-course-details.webp&w=1920&q=75" className="d-block w-100" alt="pic2"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Bachelor of Medicine, Bachelor of Surgery</h5>
                <p className="carousel-text">An undergraduate medical degree that prepares students to become doctors, focusing on the study of medicine, surgery, and patient care.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://mvnu.edu/content/uploads/2024/01/mvnu-online-difference-between-admin-and-business-management.jpeg.webp" className="d-block w-100" alt="pic3"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Master of Business Administration (MBA)</h5>
                <p className="carousel-text">Graduate degree that provides advanced knowledge and skills in business management, leadership, and strategic decision-making across various industries.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <h3 className='head3'>Why Career Planning is Important?</h3>
      <p className='para'  style={{ textAlign: 'center' }}>
        Career planning is essential for setting clear goals, enhancing decision-making, 
        and identifying strengths and interests. It helps individuals make informed choices, 
        ensuring alignment with their skills and passions. A structured career plan supports 
        professional growth, increases job satisfaction, and reduces stress. It also provides 
        direction during career transitions and boosts confidence. By understanding market trends 
        and personal values, career planning ensures better job stability, adaptability, and 
        work-life balance. Whether advancing in a current role or shifting careers, career planning 
        helps individuals achieve long-term success and fulfillment, while remaining motivated and 
        proactive in pursuing their aspirations.
      </p>

<br></br>

      <div className="study-container">        
        <h2>Study at Dayton University</h2>
     
        <div className="study-options-container">
          <div className="study-option-item">
            <Link to="/study/undergraduate">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT7dCfmk1n57ukb0BVt9SsZRsN-rEM6F2tPw&s" 
                alt="Undergraduate" 
                className="study-option-logo" 
              />
              <p className="study-option-name">Undergraduate</p>
            </Link>
          </div>
          <div className="study-option-item">
            <Link to="/study/postgraduate">
              <img 
                src="https://w7.pngwing.com/pngs/739/4/png-transparent-graduation-ceremony-graduate-university-academic-degree-student-master-s-degree-student-thumbnail.png" 
                alt="Post Graduate" 
                className="study-option-logo" 
              />
              <p className="study-option-name">Post Graduate</p>
            </Link>
          </div>
          <div className="study-option-item">
            <Link to="/study/studyabroad">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmFsyt3SNSIB11YbDxBbsgnfuOQ_ITbDVIqU50GhKUZ6EakMqa4JoJEoUa4bNpY-015ZY&usqp=CAU" 
                alt="Study Abroad" 
                className="study-option-logo" 
              />
              <p className="study-option-name">Study Abroad</p>
            </Link>
          </div>
          <div className="study-option-item">
            <Link to="/study/shortcourses">
              <img 
                src="https://static.vecteezy.com/system/resources/previews/041/041/344/non_2x/courses-logo-icon-brand-identity-sign-symbol-template-vector.jpg" 
                className="study-option-logo" 
                alt='img'
              />
              <p className="study-option-name">Short Courses</p>
            </Link>
          </div>
        </div>
      </div>

      <h2 style={{ textAlign: 'center' }}>Discover Study Together</h2><br></br>
     <div className="study-together-section">
  <div className="study-together-item large">
    <img src="https://images.herzindagi.info/image/2020/Sep/study-room.jpg" alt="Study Room" />
    <div className="study-together-overlay">
      <h4>Study Rooms</h4>
      <p>Quiet and well-equipped spaces designed for individual and focused learning.</p>
    </div>
  </div>
  <div className="study-together-item">
    <img src="https://t3.ftcdn.net/jpg/06/98/15/28/360_F_698152816_iofj0EaoJp6jjKsHkMSoAEawmbKg3at0.jpg" alt="Group Studies" />
    <div className="study-together-overlay">
      <h4>Group Studies</h4>
      <p>Collaborative learning sessions with peers to discuss and solve problems together.</p>
    </div>
  </div>
  <div className="study-together-item">
    <img src="https://img.freepik.com/free-vector/flat-working-day-scene-illustration_23-2148960100.jpg?semt=ais_hybrid" alt="Free Tutors" />
    <div className="study-together-overlay">
      <h4>Free Tutors</h4>
      <p>Accessible tutoring programs offering one-on-one guidance for academic success.</p>
    </div>
  </div>
  
  <div className="study-together-item">
    <img src="https://cdn.hswstatic.com/gif/community-events-ideas.jpg" alt="Community Events" />
    <div className="study-together-overlay">
      <h4>Community Events</h4>
      <p>Engage in workshops, seminars, and activities that foster learning and networking.</p>
    </div>
  </div>
  <div className="study-together-item">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/SanDiegoCityCollegeLearningResource_-_bookshelf.jpg/1200px-SanDiegoCityCollegeLearningResource_-_bookshelf.jpg" alt="Library Zones" />
    <div className="study-together-overlay">
      <h4>Library Zones</h4>
      <p>Dedicated areas in libraries with diverse resources and a conducive environment for studying.</p>
    </div>
  </div>
  <div className="study-together-item">
    <img src="https://vibe.us/blog/10-positive-aspects-to-distance-learning/cover_hu3d03a01dcc18bc5be0e67db3d8d209a6_184197_1280x0_resize_q90_h2_lanczos.fb14c134342d2bea0403db653637a3ce725f63e353d3537016bf81f05e1367bb.webp" alt="Online Learning" />
    <div className="study-together-overlay">
      <h4>Online Learning Platforms</h4>
      <p>Access courses and materials from global institutions right from your home.</p>
    </div>
  </div>

 
</div>

    
      <div className="reviews-section">
        <h2 className="reviews-heading">What Our Students Say</h2>
        <div className="reviews-container">
          <div className="review-item">
            <p className="review-text">"The MBA program has transformed my career! The knowledge and skills I gained here were invaluable. I highly recommend Dayton University for anyone looking to pursue higher education!"</p>
            <p className="review-author">- Anil, MBA Graduate</p>
          </div>
          <div className="review-item">
            <p className="review-text">"Studying Medicine at Dayton University was an enriching experience. The faculty and resources helped me excel in my studies. I feel prepared to take on any challenge in the medical field."</p>
            <p className="review-author">- Sarah singh, MBBS Graduate</p>
          </div>
          <div className="review-item">
            <p className="review-text">"The undergraduate program in Engineering gave me a solid foundation for my career. The campus and faculty support made my journey smooth and memorable!"</p>
            <p className="review-author">- Antony, Engineering Graduate</p>
          </div>
        </div>
      </div>


<Footer/>

</>
  );
};

export default Study;
