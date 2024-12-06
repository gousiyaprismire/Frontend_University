import React from 'react';
import './Study.css'; 
import undergraduate from '../../../images/undergraduate.png';
import graduate from '../../../images/graduate.png';

const Study = () => {
  return (
    <>
      <div className="study-container">
        <h1 className="study-heading">Study Options</h1>
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

      <h3>Why Career Planning is Important?</h3>
      <p style={{ textAlign: 'center' }}>
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

      <h3>Choose Your Career...</h3>
      
    </>
  );
};

export default Study;
