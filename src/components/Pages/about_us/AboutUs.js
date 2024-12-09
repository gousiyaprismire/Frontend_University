import React from 'react';
import './AboutUs.css';
import { Carousel, Typography, Button, Layout, Row, Col, Space } from 'antd';
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';
 
const { Title, Text } = Typography;
const { Footer } = Layout;

const AboutUs = () => {
  return (
    <>
      <h1>About Us</h1>
      <img className='img1'
        src="https://jcpatriot.com/wp-content/uploads/2016/04/REAL-university-of-florida-pic.jpg"
        title="Prismire University"
        alt="university pic"
        style={{ width: '100%', height: '500px' }}
      />
      <p>
        Dalton University is a distinguished institution dedicated to academic excellence, innovation, and community
        engagement. Offering a wide range of undergraduate, graduate, and professional programs, it provides students with
        the knowledge and skills necessary for success in a dynamic world. The university is renowned for its world-class
        faculty, cutting-edge research opportunities, and modern facilities. With a focus on critical thinking, hands-on
        learning, and global perspectives, Prismire prepares students to become leaders in their fields. Beyond academics, the
        university promotes a vibrant campus life through diverse student organizations, extracurricular activities, and cultural
        events, fostering a well-rounded educational experience.
      </p>
     
     
      <div style={{ backgroundColor: '#E0F7FA', padding: '20px' }}>
        <h2>Our Goals</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-auto" style={{ width: '100%', maxWidth: '430px', margin: '0 auto' }}>
              <img
                src="https://www.shutterstock.com/image-vector/realistic-university-building-graduate-cap-600nw-2485116275.jpg"
                className="card-img-top"
                alt="pic1"
                style={{ height: '150px', objectFit: 'fit' }}
              />
              <div className="card-body">
                <h5 className="card-title">Academic Excellence</h5>
                <p className="card-text">
                Providing high-quality education that empowers students with the knowledge, skills, and critical
                thinking needed for personal development and professional success in a dynamic world.
                </p>
              </div>
            </div>
          </div>
 
          <div className="col">
            <div className="card h-auto" style={{ width: '100%', maxWidth: '430px', margin: '0 auto' }}>
              <img
                src="https://corporate.travelclinic.com/wp-content/uploads/2020/07/Services-Innovation-and-research-2048x1367.jpg"
                className="card-img-top"
                alt="pic2"
                style={{ height: '150px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">Research and Innovation</h5>
                <p className="card-text">
                Research and innovation in universities foster knowledge growth, creativity, and solutions to global challenges, advancing academics and societal development.</p>
              </div>
            </div>
          </div>
 
          <div className="col">
            <div className="card h-auto" style={{ width: '100%', maxWidth: '430px', margin: '0 auto' }}>
              <img
                src="https://agribusinessedu.com/wp-content/uploads/2020/12/social-responsibility-and-ethics-for-agribusiness-2020-12-06-450545.jpg"
                className="card-img-top"
                alt="pic3"
                style={{ height: '150px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">Social & Ethical Responsibility</h5>
                <p className="card-text">
                  Encouraging students and faculty to contribute to social causes and work toward the betterment of society. Promoting values such as integrity, respect, sustainability, and justice.
                </p>
              </div>
            </div>
          </div>
 
          <div className="col">
            <div className="card h-auto" style={{ width: '100%', maxWidth: '430px', margin: '0 auto' }}>
              <img
                src="https://centerforhci.org/wp-content/uploads/2022/06/What-are-the-Benefits-of-Career-Planning-1.jpg"
                className="card-img-top"
                alt="pic4"
                style={{ height: '150px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">Career Preparation</h5>
                <p className="card-text">
                  Providing opportunities for students to gain practical experience through internships, cooperative education & professional networks.
                </p>
              </div>
            </div>
          </div>
 
          <div className="col">
            <div className="card h-auto" style={{ width: '100%', maxWidth: '430px', margin: '0 auto' }}>
              <img
                src="https://d3timt52sxdbq0.cloudfront.net/wp-content/uploads/2016/04/benefitsofcollaboration.jpg"
                className="card-img-top"
                alt="pic5"
                style={{ height: '150px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">Collaboration and Partnership</h5>
                <p className="card-text">
                  Encouraging collaboration between students, faculty, industries, and other academic institutions to foster innovation and progress.
                </p>
              </div>
            </div>
          </div>
 
          <div className="col">
            <div className="card h-auto" style={{ width: '100%', maxWidth: '430px', margin: '0 auto' }}>
              <img
                src="https://www.oneeducation.org.uk/wp-content/uploads/2021/04/Personal-Development-Plan-A-Complete-Guide-with-PDP-Template-updated-1.png"
                className="card-img-top"
                alt="pic6"
                style={{ height: '150px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">Personal Development</h5>
                <p className="card-text">
                 It emphasizes enhancing students' self-awareness, emotional intelligence, leadership skills, and overall growth for future success.
                </p>
              </div>
            </div>
          </div>
        </div>
     </div>


    <br/><br/>
    <div className="text">
        <marquee scrollamount="16px">Discover more about our university by watching this informative video!</marquee>
    </div>
    <br/>

     <div className="video-text-container">
      <div className="video-section">
        <iframe
          width="100%"
          height="380"
          src="https://www.youtube.com/embed/RgMBdVvqswM"
          title="YouTube video player"
     
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

    
      <div className="text-section">
        <h2>Inside our University: A Journey of Knowledge and Innovation</h2>
        <p>
        Welcome to Dalton University, where we help students achieve their dreams. With modern facilities, 
        a variety of academic programs, and a supportive campus community, Dalton offers an environment 
        where you can learn, grow, and succeed. Our dedicated faculty guide students to excel and prepare 
        for a successful future. At Dalton, we celebrate diversity, innovation, and collaboration, ensuring 
        every student has the opportunity to thrive. Whether you're focused on academics, career readiness, or 
        personal growth, Dalton University is the perfect place to start your journey.............................
        <b>Join us today and unlock your potential!</b>
        </p>
       
      </div>
    </div>



    <div className="achievements-container">

      <div className="achievements-section">
        
<h2>Discover Dalton University: Excellence, Innovation, and Success!</h2>
        <h2>Our Awards and Achievements</h2>
        <div className="timeline">
      
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <img
                src="https://www.vdgood.org/themes/default/assets/img/research-awards.jpg"
                alt="Top University Award"
                className="achievement-image"
              />
              <h3>Top University in Research</h3>
              <p>
                Dalton University has been recognized as a leader in innovative research, fostering advancements in various fields.
              </p>
            </div>
          </div>

  
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <img
                src="https://www.iul.ac.in/Times/images/ExcellenceAward.JPG"
                alt="Community Engagement Award"
                className="achievement-image"
              />
              <h3>Community Engagement Excellence</h3>
              <p>
                We are proud of our commitment to community development and
                social responsibility through various outreach programs.
              </p>
            </div>
          </div>

      
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8s8evyJVjbWltAGQpwmFeujdCJpbs6E3pMQ&s"
                alt="Best Campus Environment"
                className="achievement-image"
              />
              <h3>Best Campus Environment</h3>
              <p>
                Dalton University is known for its vibrant, green campus that
                encourages creativity, collaboration, and well-being.
              </p>
            </div>
          </div>

      
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <img
                src="https://previews.123rf.com/images/ctrlh/ctrlh1611/ctrlh161100080/68959940-best-employer-of-the-year-business-award-ribbon-golden-red-colors-distinction-with-champions-cup.jpg"
                alt="Top Employer Ranking"
                className="achievement-image"
              />
              <h3>Top Employer Ranking</h3>
              <p>
                Our graduates are sought after by leading global companies,
                thanks to the quality education and career preparation at
                Dalton.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> 
    <div className="university-members-section">
      <h2 className="section-title">Members of the University</h2>
      <div className="members-container">
        <div className="member">
          <img
            src="https://www.nesl.edu/images/default-source/admissions-aid-hero-images/5ef7f25a-a960-47c1-9d70-1a203a6c3ad4.tmb-wide.jpg?Status=Master&Culture=en&sfvrsn=5ba07fa0_1"
            alt="Steven Pinker"
            className="member-image"
          />
          <h4 className="member-name">Steven Pinker</h4>
          <p className="member-role">Chancellor</p>
        </div>

        <div className="member">
          <img
            src="https://www.law.columbia.edu/sites/default/files/styles/260x312/public/2024-11/madhav.0435cc_crop.jpg?h=7f3af489&itok=6HL2hRVM"
            alt="Albert"
            className="member-image"
          />
          <h4 className="member-name">Albert</h4>
          <p className="member-role">Vice Chancellor</p>
        </div>

      
        <div className="member">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj2Zy7VNCVjz8yQ7hUvl-dvmy4n9FURfl33SxqLEbpRqr786QI8lYyO2wtGnUW0m5vwSk&usqp=CAU"
            alt="Edward"
            className="member-image"
          />
          <h4 className="member-name">Edward</h4>
          <p className="member-role">Payroll Manager</p>
        </div>

        <div className="member">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.Kxh2Bu1CQFPBZ_MEYYYjqwHaJQ&pid=Api&P=0&h=180"
            alt="Lusy"
            className="member-image"
          />
          <h4 className="member-name">Lusy</h4>
          <p className="member-role">Dean of Academics</p>
        </div>
      </div>
    </div>

<Footer style={{ backgroundColor: '#001529', color: '#fff', padding: '20px 0', marginTop: '50px' }}>
  <Row justify="center" align="middle">
    <Col span={12} style={{ textAlign: 'center' }}>
      <Title level={4} style={{ color: '#fff' }}>
        University Portal
      </Title>
      <Text style={{ color: '#fff' }}>
        A place where your academic journey begins. Stay connected with us to unlock more opportunities.
      </Text>
      <div style={{ marginTop: '20px' }}>
        <Space size="large">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookOutlined style={{ color: '#fff', fontSize: '24px' }} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterOutlined style={{ color: '#fff', fontSize: '24px' }} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedinOutlined style={{ color: '#fff', fontSize: '24px' }} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramOutlined style={{ color: '#fff', fontSize: '24px' }} />
          </a>
        </Space>
      </div>
    </Col>
  </Row>
</Footer>



    </>
  );
};
 
export default AboutUs;