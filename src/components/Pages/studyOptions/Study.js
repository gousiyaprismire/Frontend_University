import React from 'react';
import './Study.css'; 
import undergraduate from '../../../images/undergraduate.png';
import graduate from '../../../images/graduate.png';

const Study = () => {
  return (
    <>
      <div className="study-container">
        <h1 className="study-heading">Study Options</h1>
        <img 
          src="https://www.fhm-uog.com/fileadmin/_processed_/d/c/csm_Header_Study_Options_68603c5090.jpg" 
          alt="Study Options"
          className="study-image"
        />
      </div>
      
      <h3>Why Career Planning is Important?</h3>
      <p>
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

      <h3>Choose Your Career...</h3><br/>
      <div className='box1'>
        <div className="card bg-light text-white">
          <img src={undergraduate} className="card-img" alt="Undergraduate" />
          <div className="card-img-overlay">
            <h5 className="card-title">Undergraduate Education:</h5>
            <p className="card-text">
              Undergraduate education provides foundational knowledge in various fields, preparing students 
              for entry-level careers or further study. Examples include (BBA), (BSc), (BEng).
            </p>
          </div>
        </div>

        <div className="card bg-light text-white">
          <img src={graduate} className="card-img" alt="Postgraduate" />
          <div className="card-img-overlay">
            <h5 className="card-title">Postgraduate Education:</h5>
            <p className="card-text">
              Postgraduate education offers specialized expertise in specific fields, enhancing skills for advanced careers or research. Examples 
              include (MBA), (MSc), and (MTech).
            </p>
          </div>
        </div>
      </div>
      <br/><br/>
    </>
  );
};

export default Study;
