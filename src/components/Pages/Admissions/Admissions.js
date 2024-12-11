import React, { useState } from 'react';
import './Admissions.css';
import admission1 from '../../../images/admission3.avif';
const Admissions = () => {
  const [activeTab, setActiveTab] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'graduate-studentlife':
        return (
          <div className='graduate-student-life'>
            <button onClick={() => setSelectedOption('')}>Back to Admissions</button>
            <div className='gstudent1'>
              <h2>Graduate Admissions at the University of Dayton</h2>
              <h3>Advance Your Career with a Graduate Degree from UD</h3>
              <p>The University of Dayton offers a wide range of master's and doctoral programs. Each program has specific requirements and deadlines, so be sure to check the program's page for detailed information.</p>
              <p>Our graduate programs are designed to provide advanced knowledge and skills, preparing you for leadership roles in your field. You'll have the opportunity to work closely with experienced faculty members who are experts
                 in their disciplines. Additionally, many programs offer flexible scheduling options, including evening and online classes, to accommodate working professionals. Explore our diverse offerings and find the program that aligns 
                 with your career goals and interests.</p>
                </div>
                 <div className='gstudent2'>
                <h4>Why Choose UD for Your Graduate Studies?</h4>
                <p><strong>Expert Faculty:</strong>Learn from experienced faculty members who are leaders in their disciplines and dedicated to your success.</p>
                <p><strong>Flexible Scheduling</strong>Many programs offer evening and online classes to accommodate your busy schedule.</p>
                <p><strong>Research Opportunities</strong>Engage in cutting-edge research projects that address real-world challenges.</p>
                <p><strong>Supportive Community: </strong>Join a vibrant and inclusive community that supports your academic and professional growth.</p>
                </div>
                <div className='gstudent3'>
                  <h2>Application Process</h2>
                  <p>Each program has specific requirements and deadlines. Be sure to check the program's page for detailed information. Generally, the application process includes:</p>
                  <p><strong>Application Form: </strong>Complete the online application form.</p>
                  <p><strong>Transcripts:</strong>Submit official transcripts from all previously attended institutions.</p>
                  <p><strong>Letters of Recommendation:</strong>Provide letters of recommendation from academic or professional references.</p>
                  <p><strong>Personal Statement:</strong> Write a personal statement outlining your goals and reasons for pursuing graduate studies</p>
                  <p><strong>Test Scores:</strong>Some programs may require GRE or other standardized test scores.</p>
                  <div className='gstudent4'>
                    <h4>Financial Aid and Scholarships</h4>
                    <p>We are committed to making graduate education affordable. Explore our financial aid options, including scholarships, assistantships, and loans, to help fund your studies.</p>
                  </div>
                </div>
            </div>
        );
      case 'graduate-courses':
        return (
          <div>
            <button onClick={() => setSelectedOption('')}>Back to Admissions</button>
            <div>
              <h2>Graduate Courses at the University of Dayton</h2>
              <h4>Explore Our Diverse Graduate Programs</h4>
              <p>The University of Dayton offers a comprehensive range of graduate courses designed to equip you with the advanced knowledge and skills needed to 
                excel in your chosen field. Our programs are tailored to meet the needs of both recent graduates and working professionals, providing flexibility and support throughout your academic journey. </p>
              <h4>Program Highlights</h4>
              <p><strong>Master's Programs:</strong>Our master's programs cover a wide array of disciplines, including engineering, business, education, and the sciences. Each program is designed to deepen your expertise and enhance your career prospects.</p>
              <p><strong>Doctoral Programs:</strong>Pursue advanced research and contribute to the body of knowledge in your field with our doctoral programs. You'll work closely with faculty mentors and engage in innovative research projects.</p>
              <p><strong>Certificate Programs:</strong>Enhance your skills and credentials with our specialized certificate programs. These programs are ideal for professionals looking to gain expertise in specific areas without committing to a full degree program.</p>
              <h4>Flexible Learning Options</h4>
              <p><strong>Evening and Weekend Classes:</strong>Many of our graduate courses are offered in the evenings and on weekends to accommodate your busy schedule.</p>
            </div>
          </div>
        );
      case 'graduate-colleges':
        return (
          <div>
            <button onClick={() => setSelectedOption('')}>Back to Admissions</button>
            <p>Information about graduate student life...</p>
          </div>
        );
      case 'graduate-fees':
        return (
          <div>
            <button onClick={() => setSelectedOption('')}>Back to Admissions</button>
            <p>Information about graduate student life...</p>
          </div>
        );
      case 'graduate-funding':
        return (
          <div>
            <button onClick={() => setSelectedOption('')}>Back to Admissions</button>
            <p>Information about graduate student life...</p>
          </div>
        );
      case 'undergraduate-studentlife':
        return (
          <div className='graduate-student-life'>
            <button onClick={() => setSelectedOption('')}>Back to Admissions</button>
            <div className='gstudent1'>
              <h2>Under Graduate Admissions at the University of Dayton</h2>
              <h3>Advance Your Career with a Under Graduate  from UD</h3>
              <p>The University of Dayton offers a wide range of master's and doctoral programs. Each program has specific requirements and deadlines, so be sure to check the program's page for detailed information.</p>
              <p>Our graduate programs are designed to provide advanced knowledge and skills, preparing you for leadership roles in your field. You'll have the opportunity to work closely with experienced faculty members who are experts
                 in their disciplines. Additionally, many programs offer flexible scheduling options, including evening and online classes, to accommodate working professionals. Explore our diverse offerings and find the program that aligns 
                 with your career goals and interests.</p>
                </div>
                 <div className='gstudent2'>
                <h4>Why Choose UD for Your Under Graduate Studies?</h4>
                <p><strong>Expert Faculty:</strong>Learn from experienced faculty members who are leaders in their disciplines and dedicated to your success.</p>
                <p><strong>Flexible Scheduling</strong>Many programs offer evening and online classes to accommodate your busy schedule.</p>
                <p><strong>Research Opportunities</strong>Engage in cutting-edge research projects that address real-world challenges.</p>
                <p><strong>Supportive Community: </strong>Join a vibrant and inclusive community that supports your academic and professional growth.</p>
                </div>
                <div className='gstudent3'>
                  <h2>Application Process</h2>
                  <p>Each program has specific requirements and deadlines. Be sure to check the program's page for detailed information. Generally, the application process includes:</p>
                  <p><strong>Application Form: </strong>Complete the online application form.</p>
                  <p><strong>Transcripts:</strong>Submit official transcripts from all previously attended institutions.</p>
                  <p><strong>Letters of Recommendation:</strong>Provide letters of recommendation from academic or professional references.</p>
                  <p><strong>Personal Statement:</strong> Write a personal statement outlining your goals and reasons for pursuing graduate studies</p>
                  <p><strong>Test Scores:</strong>Some programs may require GRE or other standardized test scores.</p>
                  <div className='gstudent4'>
                    <h4>Financial Aid and Scholarships</h4>
                    <p>We are committed to making under graduate education affordable. Explore our financial aid options, including scholarships, assistantships, and loans, to help fund your studies.</p>
                  </div>
                </div>
            </div>
        );
      case 'undergraduate-courses':
        return(
          <div>
            <button onClick={() => setSelectedOption('')}>Back to Admissions</button>
            <p>Information about graduate student life...</p>
          </div>
        );
      case 'undergraduate-colleges':
        return (
          <div>
            <button onClick={() => setSelectedOption('')}>Back to Admissions</button>
            <p>Information about graduate student life...</p>
          </div>
        );
      case 'undergraduate-fees':
        return (
          <div>
            <button onClick={() => setSelectedOption('')}>Back to Admissions</button>
            <p>Information about graduate student life...</p>
          </div>
        );
      case 'undergraduate-funding':
        return (
          <div>
            <button onClick={() => setSelectedOption('')}>Back to Admissions</button>
            <p>Information about graduate student life...</p>
          </div>
        );
      case 'online':
        return (
          <div>
            <button onClick={() => setSelectedOption('')}>Back to Admissions</button>
            <p>Information about graduate student life...</p>
          </div>
        );
      case 'distance':
        return (
          <div>
            <button onClick={() => setSelectedOption('')}>Back to Admissions</button>
            <p>Information about graduate student life...</p>
          </div>
        );
      default:
        return (
          <div>
          <div className='admission-default'>
           <h1>Welcome to University of Dayton Admissions</h1>
           <h2><strong>Discover Your Future at UD</strong></h2>
           <p>At the University of Dayton, we believe in the power of education to transform lives. Our admissions process is designed to identify students who will thrive in our inclusive and vibrant community. Whether you're a high school student, a transfer student,
             or looking to pursue graduate studies, we are here to support you every step of the way.
           Our dedicated admissions team is committed to making your application process as smooth as possible. We offer personalized guidance and resources to help you showcase your unique strengths and achievements. With a focus on holistic review, we consider not just your academic performance, but also your extracurricular involvement, leadership qualities, and personal experiences. Join us at UD, where your potential is nurtured, 
            and your future is bright. Apply today and become part of a community that values innovation, collaboration, and lifelong learning.</p>
          </div>
          <div className='admission-image'>
            <img src={admission1} alt='admission-photo'/>
          </div>
          <div className='default2'>
            <h3><strong>Visit Our Campus</strong></h3>
            <p>Experience the University of Dayton firsthand by scheduling a campus visit. Can't make it in person? Take a virtual tour and see what makes our community special.
             Explore our state-of-the-art facilities, meet our dedicated faculty, and connect with current students to get a true feel for life at UD. Discover why so many choose to call the University of Dayton their home away from home.</p>
            <h3><strong>Apply Today</strong></h3>
            <p>Ready to join the Flyer family? Start your application today and take the first step towards your future at the University of Dayton.
             Embrace the opportunity to grow academically, personally, and professionally in a supportive environment. Our community is excited to welcome you and help you achieve your dreams. Apply now and begin your journey with us!</p>
          </div>
          </div>
        );
    }
  };

  return (
      <div className='tab-container'>
        <div className='tabs'>
          <div className={`tab ${activeTab === 'graduate' ? 'active' : ''}`} onMouseEnter={() => setActiveTab('graduate')}>
            Graduate <span className='arrow'>&#9662;</span>
            <div className='dropdown'>
              <div onClick={() => handleSelectChange('graduate-studentlife')}>Student Life</div>
              <div onClick={() => handleSelectChange('graduate-courses')}>Courses</div>
              <div onClick={() => handleSelectChange('graduate-colleges')}>Colleges</div>
              <div onClick={() => handleSelectChange('graduate-fees')}>Fees</div>
              <div onClick={() => handleSelectChange('graduate-funding')}>Funding</div>
            </div>
          </div>
          <div className={`tab ${activeTab === 'undergraduate' ? 'active' : ''}`} onMouseEnter={() => setActiveTab('undergraduate')}>
            Undergraduate <span className='arrow'>&#9662;</span>
            <div className='dropdown'>
              <div onClick={() => handleSelectChange('undergraduate-studentlife')}>Student Life</div>
              <div onClick={() => handleSelectChange('undergraduate-courses')}>Courses</div>
              <div onClick={() => handleSelectChange('undergraduate-colleges')}>Colleges</div>
              <div onClick={() => handleSelectChange('undergraduate-fees')}>Fees</div>
              <div onClick={() => handleSelectChange('undergraduate-funding')}>Funding</div>
            </div>
          </div>
          <div className={`tab ${activeTab === 'continuing-education' ? 'active' : ''}`} onMouseEnter={() => setActiveTab('continuing-education')}>
            Continuing Education <span className='arrow'>&#9662;</span>
            <div className='dropdown'>
              <div onClick={() => handleSelectChange('online')}>Online Courses</div>
              <div onClick={() => handleSelectChange('distance')}>Distance Courses</div>
            </div>
          </div>
        </div>
        <div className='tab-content'>
          {renderContent()}
        </div>
      </div>
  );
};

export default Admissions;