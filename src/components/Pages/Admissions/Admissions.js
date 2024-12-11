import React, { useState } from 'react';
import './Admissions.css';
import admission1 from '../../../images/admission3.avif';
import dayton from  '../../../images/dayton1.jpg';
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
          <div className='student-life'>
            <button onClick={() => setSelectedOption('')}>Back to Admissions</button>
            <div className='student-text1'>
              <h2>Graduate Admissions at the University of Dayton</h2>
              <h3>Advance Your Career with a Graduate Degree from UD</h3>
              <p>The University of Dayton offers a wide range of master's and doctoral programs. Each program has specific requirements and deadlines, so be sure to check the program's page for detailed information.</p>
              <p>Our graduate programs are designed to provide advanced knowledge and skills, preparing you for leadership roles in your field. You'll have the opportunity to work closely with experienced faculty members who are experts
                 in their disciplines. Additionally, many programs offer flexible scheduling options, including evening and online classes, to accommodate working professionals. Explore our diverse offerings and find the program that aligns 
                 with your career goals and interests.</p>
            </div>
                 <div className='student-text2'>
                <h4>Why Choose UD for Your Graduate Studies?</h4>
                <p><strong>Expert Faculty:</strong>Learn from experienced faculty members who are leaders in their disciplines and dedicated to your success.</p>
                <p><strong>Flexible Scheduling</strong>Many programs offer evening and online classes to accommodate your busy schedule.</p>
                <p><strong>Research Opportunities</strong>Engage in cutting-edge research projects that address real-world challenges.</p>
                <p><strong>Supportive Community: </strong>Join a vibrant and inclusive community that supports your academic and professional growth.</p>
                </div>
                <div className='student-text3'>
                  <h2>Application Process</h2>
                  <p>Each program has specific requirements and deadlines. Be sure to check the program's page for detailed information. Generally, the application process includes:</p>
                  <p><strong>Application Form: </strong>Complete the online application form.</p>
                  <p><strong>Transcripts:</strong>Submit official transcripts from all previously attended institutions.</p>
                  <p><strong>Letters of Recommendation:</strong>Provide letters of recommendation from academic or professional references.</p>
                  <p><strong>Personal Statement:</strong> Write a personal statement outlining your goals and reasons for pursuing graduate studies</p>
                  <p><strong>Test Scores:</strong>Some programs may require GRE or other standardized test scores.</p>
                  </div>
                  <div className='student-text4'>
                    <h4>Financial Aid and Scholarships</h4>
                    <p>We are committed to making graduate education affordable. Explore our financial aid options, including scholarships, assistantships, and loans, to help fund your studies.</p>
                  </div>
                
            </div>
        );
      case 'graduate-courses':
        return (
           <div  className='courses'>
             <button onClick={() => setSelectedOption('')}>Back to Admissions</button>
             <div className='course-text1'>
              <h2>Graduate Courses at the University of Dayton</h2>
              <h4>Explore Our Diverse Graduate Programs</h4>
              <p>The University of Dayton offers a comprehensive range of graduate courses designed to equip you with the advanced knowledge and skills needed to 
                excel in your chosen field. Our programs are tailored to meet the needs of both recent graduates and working professionals, providing flexibility and support throughout your academic journey. </p>
              </div>
             <div className='course-text2'>
              <h4>Program Highlights</h4>
              <p><strong>Master's Programs:</strong>Our master's programs cover a wide array of disciplines, including engineering, business, education, and the sciences. Each program is designed to deepen your expertise and enhance your career prospects.</p>
              <p><strong>Doctoral Programs:</strong>Pursue advanced research and contribute to the body of knowledge in your field with our doctoral programs. You'll work closely with faculty mentors and engage in innovative research projects.</p>
              <p><strong>Certificate Programs:</strong>Enhance your skills and credentials with our specialized certificate programs. These programs are ideal for professionals looking to gain expertise in specific areas without committing to a full degree program.</p>
              <h4>Flexible Learning Options</h4>
              <p><strong>Evening and Weekend Classes:</strong>Many of our graduate courses are offered in the evenings and on weekends to accommodate your busy schedule.</p>
              <p><strong>Online Learning:</strong>Take advantage of our online courses, which provide the flexibility to learn from anywhere while maintaining the same high standards of education.</p>
              <p><strong>Hybrid Programs:</strong>Some programs offer a blend of online and in-person classes, giving you the best of both worlds.</p>
             </div>
             <div className='course-text3'>
              <h4>Course Structure</h4>
              <p>Our graduate courses are designed to provide a rigorous and engaging learning experience. You'll participate in lectures, seminars, and hands-on projects that challenge you to apply your knowledge 
                in real-world scenarios. Collaboration with peers and faculty is a key component, fostering a dynamic and supportive learning environment.</p>
              <h4>Research Opportunities</h4>
              <p>Engage in cutting-edge research that addresses real-world challenges. Our graduate programs offer numerous opportunities to collaborate with faculty on research projects, present your findings at conferences, and publish your work in academic journals.</p>
             </div>
             <div className='course-text4'>
              <h4>Support and Resources</h4>
              <p><strong>Academic Advising:</strong>Receive personalized guidance from our academic advisors to help you navigate your course selections and academic requirements</p>
              <p><strong>Career Services:</strong>Take advantage of our career services, including resume workshops, job fairs, and networking events, to help you achieve your professional goals.</p>
              <p><strong>Library and Research Facilities:</strong>Access our extensive library resources and state-of-the-art research facilities to support your studies and research projects.</p>
             </div>
             <div className='course-text5'>
              <h4>Apply Today</h4>
              <p>Ready to take the next step in your academic journey? Explore our graduate courses and find the program that aligns with your career goals and interests. Start your application today and join a community that values innovation, collaboration, and lifelong learning.</p>
             </div>
          </div>
        );
      case 'graduate-fees':
        return (
          <div className='feesfunds'>
            <button onClick={() => setSelectedOption('')}>Back to Admissions</button>
            <div className='fees'>
              <h2>Graduate Fees and Funding</h2>
              <h4>Tuition and Fees</h4>
              <div className='fee-text1'>
              <div className='fee-text-p'> 
              <p><strong>Master's Programs:</strong>$1,085 per credit hour for Arts & Sciences and Engineering</p>
              <p><strong>MBA, MFN, MPAC:</strong>$1,145 per credit hour</p>
              <p><strong>PhD Programs:</strong> $1,180 per credit hour for Biology, Engineering, and CPS</p>
              <p><strong>School of Education and Health Sciences:</strong>$730 per credit hour</p>
              </div>
              <div>
              <img src={dayton} alt='university-image'/>
              </div>
              </div>
              <div className='fee-text2'>
                <h4>Financial Aid</h4>
                <h5>We offer a range of financial aid options to help you finance your undergraduate education</h5>
                <p><strong>Scholarships:</strong>Merit-based scholarships are available for students who demonstrate academic excellence, leadership, and other achievements.</p>
                <p><strong>Grants:</strong>Need-based grants are available to students who demonstrate financial need. These grants do not need to be repaid.</p>
                <p><strong>Loans:</strong>Federal and private loan options are available to help cover the cost of your education. Our financial aid office can assist you in understanding your loan options and responsibilities.</p>
                <p><strong>Assistantships</strong> Graduate students may be eligible for assistantships, which provide a stipend and tuition remission in exchange for teaching or research duties.</p>
              </div>
              <div className='fee-text3'>
                  <h4>How to Apply for Financial Aid</h4>
                  <p><strong>Complete the FAFSA:</strong>Submit the Free Application for Federal Student Aid (FAFSA) to determine your eligibility for federal and state financial aid. The University of Dayton's school code is 003127.</p>
                  <p><strong>Review Your Financial Aid Offer:</strong>Once your FAFSA is processed, you will receive a financial aid offer outlining the types and amounts of aid you are eligible to receive.</p>
                  <p><strong>Accept Your Aid:</strong>Log in to your student portal to accept or decline your financial aid offer. Be sure to complete any additional requirements, such as loan counseling or promissory notes.</p>
                  <h4>Additional Funding Opportunities</h4>
                  <p><strong>External Scholarships:</strong>Explore external scholarship opportunities from private organizations, foundations, and community groups.</p>
                  <p><strong>Payment Plans:</strong>The University of Dayton offers flexible payment plans to help you manage your tuition payments over the course of the academic year.</p>
                </div>
                <div  className='fee-text5'>
                  <h3>Contact Us</h3>
                  <p>Our financial aid office is here to help you navigate the process of financing your education. If you have any questions or need assistance, please contact us at financialaid@udayton.edu or call (937) 229-4311.</p>
                </div>
            </div>
          </div>
        );
      case 'undergraduate-studentlife':
        return (
          <div className='student-life'>
            <button onClick={() => setSelectedOption('')}>Back to Admissions</button>
            <div className='student-text1'>
              <h2>Under Graduate Admissions at the University of Dayton</h2>
              <h3>Advance Your Career with a Under Graduate  from UD</h3>
              <p>The University of Dayton offers a wide range of master's and doctoral programs. Each program has specific requirements and deadlines, so be sure to check the program's page for detailed information.</p>
              <p>Our graduate programs are designed to provide advanced knowledge and skills, preparing you for leadership roles in your field. You'll have the opportunity to work closely with experienced faculty members who are experts
                 in their disciplines. Additionally, many programs offer flexible scheduling options, including evening and online classes, to accommodate working professionals. Explore our diverse offerings and find the program that aligns 
                 with your career goals and interests.</p>
                </div>
                 <div className='student-text2'>
                <h4>Why Choose UD for Your Under Graduate Studies?</h4>
                <p><strong>Expert Faculty:</strong>Learn from experienced faculty members who are leaders in their disciplines and dedicated to your success.</p>
                <p><strong>Flexible Scheduling</strong>Many programs offer evening and online classes to accommodate your busy schedule.</p>
                <p><strong>Research Opportunities</strong>Engage in cutting-edge research projects that address real-world challenges.</p>
                <p><strong>Supportive Community: </strong>Join a vibrant and inclusive community that supports your academic and professional growth.</p>
                </div>
                 <div className='student-text3'>
                  <h2>Application Process</h2>
                  <p>Each program has specific requirements and deadlines. Be sure to check the program's page for detailed information. Generally, the application process includes:</p>
                  <p><strong>Application Form: </strong>Complete the online application form.</p>
                  <p><strong>Transcripts:</strong>Submit official transcripts from all previously attended institutions.</p>
                  <p><strong>Letters of Recommendation:</strong>Provide letters of recommendation from academic or professional references.</p>
                  <p><strong>Personal Statement:</strong> Write a personal statement outlining your goals and reasons for pursuing graduate studies</p>
                  <p><strong>Test Scores:</strong>Some programs may require GRE or other standardized test scores.</p>
                  </div>
                  <div className='student-text4'>
                    <h4>Financial Aid and Scholarships</h4>
                    <p>We are committed to making under graduate education affordable. Explore our financial aid options, including scholarships, assistantships, and loans, to help fund your studies.</p>
                  </div>
                
            </div>
        );
      case 'undergraduate-courses':
        return(
            <div className='courses'>
             <button onClick={() => setSelectedOption('')}>Back to Admissions</button>
            <div className='course-text1'>
              <h2>Undergraduate Courses at the University of Dayton</h2>
              <h4>Discover Your Path with Our Diverse Undergraduate Programs</h4>
              <p>The University of Dayton offers a comprehensive range of undergraduate courses designed to provide a strong foundation in your chosen field. Our programs are tailored to meet the needs of students from various backgrounds, preparing you for a successful future. </p>
              </div>
              <div className='course-text2'>
              <h4>Program Highlights</h4>
              <p><strong>College of Arts and Sciences:</strong>Explore majors in humanities, social sciences, natural sciences, and more. Programs include Biology, Psychology, Political Science, and English.</p>
              <p><strong>School of Business Administration: </strong>Gain practical business skills with majors such as Accounting, Finance, Marketing, and Management Information Systems.</p>
              <p><strong>School of Education and Health Sciences: </strong>Prepare for a career in education or health with programs like Teacher Education, Exercise Science, and Health Science.</p>
              <p><strong>School of Engineering:</strong>Develop technical expertise with majors in Mechanical Engineering, Electrical Engineering, Civil Engineering, and Chemical Engineering.</p>
              <h4>Flexible Learning Options</h4>
              <p><strong>Interdisciplinary Programs:</strong>Combine multiple fields of study to create a unique academic experience that aligns with your interests and career goals.</p>
              <p><strong>Minors and Certificates:</strong>Enhance your major with over 100 minors and nearly 50 certificates, allowing you to customize your education.</p>
              <p><strong>Study Abroad:</strong>Broaden your horizons with study abroad programs that offer global learning experiences.</p>
            </div>
            <div className='course-text3'>
              <h4>Course Structure</h4>
              <p>Our undergraduate courses are designed to provide a rigorous and engaging learning experience. You'll participate in lectures, labs, seminars, and hands-on projects that challenge you to apply your knowledge in real-world scenarios. Collaboration with peers and faculty is a key component, fostering a dynamic and supportive learning environment.</p>
            </div>
            <div className='course-text4'>
              <h4>Support and Resources</h4>
              <p><strong>Academic Advising:</strong>Receive personalized guidance from our academic advisors to help you navigate your course selections and academic requirements</p>
              <p><strong>Career Services:</strong>Take advantage of our career services, including resume workshops, job fairs, and networking events, to help you achieve your professional goals.</p>
              <p><strong>Library and Research Facilities:</strong>Access our extensive library resources and state-of-the-art research facilities to support your studies and research projects.</p>
            </div>
            <div className='course-text5'>
              <h4>Apply Today</h4>
              <p>Ready to start your academic journey at the University of Dayton? Explore our undergraduate courses and find the program that aligns with your career goals and interests. Start your application today and join a community that values innovation, collaboration, and lifelong learning.</p>
            </div>
          </div>
        );
      case 'undergraduate-fees':
        return (
          <div className='feesfunds'>
            <button onClick={() => setSelectedOption('')}>Back to Admissions</button>
            <div className='fees'>
              <h2>Undergraduate Fees and Funding</h2>
              <h4>Tuition and Fees</h4>
              <div className='fee-text1'>
              <div className='fee-text-p'>
              <p><strong>Tuition:</strong> $49,140 per year1</p>
              <p><strong>Housing:</strong>$9,730 per year</p>
              <p><strong>Food:</strong> $6,590 per year</p>
              <p><strong>Total Direct Costs: </strong>$65,460 per year</p>
              </div>
              <div>
              <img src={dayton} alt='university-image'/>
              </div>
              </div>
              <div className='fee-text2'>
                <h4>Financial Aid</h4>
                <h5>We offer a range of financial aid options to help you finance your undergraduate education</h5>
                <p><strong>Scholarships:</strong>Merit-based scholarships are available for students who demonstrate academic excellence, leadership, and other achievements.</p>
                <p><strong>Grants:</strong>Need-based grants are available to students who demonstrate financial need. These grants do not need to be repaid.</p>
                <p><strong>Loans:</strong>Federal and private loan options are available to help cover the cost of your education. Our financial aid office can assist you in understanding your loan options and responsibilities.</p>
                <p><strong>Work-Study Programs:</strong>Eligible students can participate in work-study programs, which provide part-time employment opportunities on campus to help offset educational expenses.</p>
              </div>
              <div className='fee-text3'>
                  <h4>How to Apply for Financial Aid</h4>
                  <p><strong>Complete the FAFSA:</strong>Submit the Free Application for Federal Student Aid (FAFSA) to determine your eligibility for federal and state financial aid. The University of Dayton's school code is 003127.</p>
                  <p><strong>Review Your Financial Aid Offer:</strong>Once your FAFSA is processed, you will receive a financial aid offer outlining the types and amounts of aid you are eligible to receive.</p>
                  <p><strong>Accept Your Aid:</strong>Log in to your student portal to accept or decline your financial aid offer. Be sure to complete any additional requirements, such as loan counseling or promissory notes.</p>
                </div>
                <div className='fee-text4'>
                  <h4>Additional Funding Opportunities</h4>
                  <p><strong>External Scholarships:</strong>Explore external scholarship opportunities from private organizations, foundations, and community groups.</p>
                  <p><strong>Payment Plans:</strong>The University of Dayton offers flexible payment plans to help you manage your tuition payments over the course of the academic year.</p>
                </div>
                <div className='fee-text5'>
                  <h3>Contact Us</h3>
                  <p>Our financial aid office is here to help you navigate the process of financing your education. If you have any questions or need assistance, please contact us at financialaid@udayton.edu or call (937) 229-4311.</p>
                </div>
            </div>
          </div>
        );
      case 'distance':
        return (
          <div className='distance-course'>
            <button onClick={() => setSelectedOption('')}>Back to Admissions</button>
            <div className='distance'>
              <h2>Distance Learning at the University of Dayton</h2>
              <div className='distance2'>
              <h4>Flexible and Convenient Online Education</h4>
              <div>
                <p>The University of Dayton offers a variety of distance learning programs designed to fit your busy schedule. Our online courses provide the same high-quality education as our on-campus programs, delivered by experienced faculty who are experts in their fields.</p>
              </div>
              </div>
              <div className='distance-text1'>
                <h4>Program Highlights</h4>
                <p><strong>High-Quality Academics:</strong>As a top-tier Catholic research university, our online programs are designed to provide rigorous and engaging learning experiences. Our faculty are accomplished scholars who inspire students to think critically and create meaningful change.</p>
                <p><strong>Collaborative Environment:</strong>Our online classes foster a sense of community and collaboration. With small class sizes, you'll have the opportunity to network with peers and form close connections with your professors.</p>
                <p><strong>Practical Knowledge:</strong>Our programs emphasize practical, hands-on learning. Opportunities for online students may include on-campus immersions, fieldwork, capstone projects, and research.</p>
              </div>
              <div className='distance-text2'>
                <h4>Available Programs</h4>
                <p>The University of Dayton offers 39 online degrees, certifications, licensures, and continuing education opportunities1. Some of our popular online programs include:</p>
                <div>
                  <p><strong>Business Administration (MBA):</strong>The online MBA program prepares students to become strategic leaders in the business environment. Accelerated options are available, allowing you to earn your MBA in as little as one year2.</p>
                  <p><strong>Business Analytics (MBAN): </strong>This program provides intensive analytics coursework and prepares students for professional roles in various contexts, including operations, marketing, and finance2.</p>
                  <p><strong>Early Childhood Leadership and Advocacy (M.S.):</strong>Designed for experienced early childhood professionals, this program advances the knowledge and skills required to be effective leaders and advocates in early care and education2.</p>
                  <p><strong>Educational Leadership (MSE):</strong>This program prepares students for careers in school administration and leadership in educational settings. Full- and part-time options are available2.</p>
                </div>
              </div>
              <div className='distance-text3'>
                <h4>Flexible Learning Options</h4>
                <p><strong>Evening and Weekend Classes:</strong>Many of our online courses are offered in the evenings and on weekends to accommodate your busy schedule.</p>
                <p><strong>Hybrid Programs:</strong>Some programs offer a blend of online and in-person classes, giving you the flexibility to learn in a way that suits you best.</p>
              </div>
              <div className='distance-text4'>
                <h4>Support and Resources</h4>
                <p><strong>Academic Advising:</strong>Receive personalized guidance from our academic advisors to help you navigate your course selections and academic requirements.</p>
                <p><strong>Career Services:</strong>Take advantage of our career services, including resume workshops, job fairs, and networking events, to help you achieve your professional goals.</p>
                <p><strong>Library and Research Facilities:</strong>Access our extensive library resources and state-of-the-art research facilities to support your studies and research projects.</p>
              </div>
              <div className='distance-text5'>
                <h4>Apply Today</h4>
                <p>Ready to advance your education with the flexibility of online learning? Explore our distance learning programs and find the one that aligns with your career goals and interests. Start your application today and join a community that values innovation, collaboration, and lifelong learning.</p>
              </div>
            </div>
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
              <div onClick={() => handleSelectChange('graduate-fees')}>Fees And Funding</div>
            </div>
          </div>
          <div className={`tab ${activeTab === 'undergraduate' ? 'active' : ''}`} onMouseEnter={() => setActiveTab('undergraduate')}>
            Undergraduate <span className='arrow'>&#9662;</span>
            <div className='dropdown'>
              <div onClick={() => handleSelectChange('undergraduate-studentlife')}>Student Life</div>
              <div onClick={() => handleSelectChange('undergraduate-courses')}>Courses</div>
              <div onClick={() => handleSelectChange('undergraduate-fees')}>Fees And Funding</div>
            </div>
          </div>
          <div className={`tab ${activeTab === 'continuing-education' ? 'active' : ''}`} onMouseEnter={() => setActiveTab('continuing-education')}>
            Continuing Education <span className='arrow'>&#9662;</span>
            <div className='dropdown'>
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