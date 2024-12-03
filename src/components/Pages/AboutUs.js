import React from 'react';

const AboutUs = () => {
  return (
     
    <>
      <style>
        {`
          h1 {
            text-align: center;
            margin-top: 30px;
            font-size: 2.5rem;
            color: #333;
          }

          h2 {
            text-align: center;
            margin-top: 30px;
            font-size: 2rem;
            color: #555;
          }

          img {
            display: block;
            margin: 0 auto;
            width: 80%;
            height: 200px; 
            object-fit: cover;
          }

          .card {
            border: 1px solid #ddd;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s;
          }

          .card:hover {
            transform: scale(1.05);
          }

          .card-body {
            padding: 15px;
          }

          .card-title {
            font-size: 1.25rem;
            font-weight: bold;
            color: #333;
          }

          .card-text {
            font-size: 1rem;
            color: #666;
          }

          .row {
            margin-top: 20px;
          }

          .col {
            margin-bottom: 20px;
          }

          .main {
            height: 490px;
            width: 100%;
          }
 p {
      font-size: 16px;
      color: #333; 
      line-height: 1.8; 
      margin: 20px auto;
      width: 93%;
      text-align: justify; 
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); 
    }
        `}
      </style>

      <h1>About Us</h1>
      <img
        className="main"
        src="https://jcpatriot.com/wp-content/uploads/2016/04/REAL-university-of-florida-pic.jpg"
        title="Prismire University"
        alt="university pic"
      />
      <p>
        Prismire University is a distinguished institution dedicated to academic excellence, innovation, and community
        engagement. Offering a wide range of undergraduate, graduate, and professional programs, it provides students with
        the knowledge and skills necessary for success in a dynamic world. The university is renowned for its world-class
        faculty, cutting-edge research opportunities, and modern facilities. With a focus on critical thinking, hands-on
        learning, and global perspectives, Prismire prepares students to become leaders in their fields. Beyond academics, the
        university promotes a vibrant campus life through diverse student organizations, extracurricular activities, and cultural
        events, fostering a well-rounded educational experience.
      </p>

      <div>
        <h2>Our Goals</h2>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img
                src="https://image.freepik.com/free-vector/academic-excellence-illustration_24877-52359.jpg"
                className="card-img-top"
                alt="pic1"
              />
              <div className="card-body">
                <h5 className="card-title">Academic Excellence</h5>
                <p className="card-text">
                  Providing high-quality education that equips students with the knowledge, skills, and critical thinking
                  abilities necessary for personal and professional success.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://corporate.travelclinic.com/wp-content/uploads/2020/07/Services-Innovation-and-research-2048x1367.jpg"
                className="card-img-top"
                alt="pic2"
              />
              <div className="card-body">
                <h5 className="card-title">Research and Innovation</h5>
                <p className="card-text">Advancing knowledge through research, encouraging creativity, and developing solutions to global challenges.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://agribusinessedu.com/wp-content/uploads/2020/12/social-responsibility-and-ethics-for-agribusiness-2020-12-06-450545.jpg"
                className="card-img-top"
                alt="pic3"
              />
              <div className="card-body">
                <h5 className="card-title">Social and Ethical Responsibility</h5>
                <p className="card-text">
                  Encouraging students and faculty to contribute to social causes and work toward the betterment of society. Promoting values such as integrity, respect, sustainability, and justice.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://centerforhci.org/wp-content/uploads/2022/06/What-are-the-Benefits-of-Career-Planning-1.jpg"
                className="card-img-top"
                alt="pic4"
              />
              <div className="card-body">
                <h5 className="card-title">Career Preparation</h5>
                <p className="card-text">
                  Providing opportunities for students to gain practical experience through internships, cooperative education, and professional networks.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://d3timt52sxdbq0.cloudfront.net/wp-content/uploads/2016/04/benefitsofcollaboration.jpg"
                className="card-img-top"
                alt="pic5"
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
            <div className="card h-100">
              <img
                src="https://www.continents.us/wp-content/uploads/2023/11/why-is-higher-education-important-to-you-personally-and-professionally-1-600x600.jpg"
                className="card-img-top"
                alt="pic6"
              />
              <div className="card-body">
                <h5 className="card-title">Personal Development</h5>
                <p className="card-text">
                  University goals focus on academic excellence, research, career preparation, social responsibility, global perspectives, personal development, leadership, and emotional intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default AboutUs;
