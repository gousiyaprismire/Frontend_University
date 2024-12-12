import React from 'react';
import './FacultyAchievements.css';

const FacultyAchievements = () => {
  return (
    <div className="faculty-achievements-content">
      <h2>Outstanding Faculty Achievements</h2>
      <div className="faculty-achiever-list">
        <div className="faculty-achievement-item">
          <div className="faculty-image-column">
            <img
              src="https://www.adrtoolbox.com/wp-content/uploads/COLLEGE-PROFESSOR.jpg"
              alt="Dr. Sarah Johnson"
              className="faculty-achiever-image img-fluid"
            />
          </div>
          <div className="faculty-content-column">
            <h3 className='heading'>Dr. Sarah Johnson</h3>
            <p className='ptag'><strong>Achievement:</strong> Published over 50 research papers in AI and ML.</p>
            <p className='ptag'>
              Dr. Johnson's work in Artificial Intelligence and Machine Learning has garnered international recognition. She has been a keynote speaker at several global conferences and is a recipient of the Best Educator Award in 2023.
            </p>
          </div>
        </div>

        <div className="faculty-achievement-item">
          <div className="faculty-image-column">
            <img
              src="https://divisions-prod.s3.amazonaws.com/gps70/People/Michael%20E.%20%28Mike%29%20Brown/images/Brown_Mike_2010.10133a05.fill-310x412-c100.jpg"
              alt="Prof. Michael Brown"
              className="faculty-achiever-image img-fluid"
            />
          </div>
          <div className="faculty-content-column">
            <h3 className='heading'>Prof. Michael Brown</h3>
            <p className='ptag'><strong>Achievement:</strong> Led groundbreaking renewable energy research.</p>
            <p className='ptag'>
              Prof. Brown's research has secured $5 million in grants for sustainable technologies. He is the author of three bestselling books and an advocate for renewable energy solutions worldwide.
            </p>
          </div>
        </div>

        <div className="faculty-achievement-item">
          <div className="faculty-image-column">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9_cUtm7OZWPQJ5bsFQNA0FwcxAzeXDw-DQ&s"
              alt="Dr. Emily Davis"
              className="faculty-achiever-image img-fluid"
            />
          </div>
          <div className="faculty-content-column">
            <h3 className='heading'>Dr. Emily Davis</h3>
            <p className='ptag'><strong>Achievement:</strong> National Science Medal recipient for neuroscience.</p>
            <p className='ptag'>
              Dr. Davis's innovative research in neuroscience has revolutionized our understanding of brain functions. She has mentored over 20 PhD students and is a leader in her field.
            </p>
          </div>
        </div>

        <div className="faculty-achievement-item">
          <div className="faculty-image-column">
            <img
              src="https://www.genengnews.com/wp-content/uploads/2019/02/Jiiim_Wilson_PassageBIO.jpg"
              alt="Prof. James Wilson"
              className="faculty-achiever-image img-fluid"
            />
          </div>
          <div className="faculty-content-column">
            <h3 className='heading'>Prof. James Wilson</h3>
            <p className='ptag'><strong>Achievement:</strong> Collaborated with NASA on space exploration projects.</p>
            <p className='ptag'>
              Prof. Wilson’s contributions to advanced space exploration have been integral to multiple NASA projects. He frequently represents the university as a keynote speaker at international aerospace conferences.
            </p>
          </div>
        </div>

        <div className="faculty-achievement-item">
          <div className="faculty-image-column">
            <img
              src="https://media.licdn.com/dms/image/D5603AQG8jdwMT6E-_w/profile-displayphoto-shrink_200_200/0/1686515504796?e=2147483647&v=beta&t=KyeXNV5y1jnXJCinQJ4Fb6n6a5b6eAYuJ7-xjAsRuFU"
              alt="Dr. Olivia Martinez"
              className="faculty-achiever-image img-fluid"
            />
          </div>
          <div className="faculty-content-column">
            <h3 className='heading'>Dr. Olivia Martinez</h3>
            <p className='ptag'><strong>Achievement:</strong> Recipient of the Global Teaching Excellence Award, 2022.</p>
            <p className='ptag'>
              Dr. Martinez has been recognized for her innovative teaching methodologies in online education. Her work has significantly improved student engagement and learning outcomes.
            </p>
          </div>
        </div>
      </div>
      <p className='ptag'>
        These achievements highlight the dedication and excellence of our faculty members, who are shaping the future through research, education, and leadership. Their work inspires our students and contributes to society at large.
      </p>
    </div>
  );
};

export default FacultyAchievements;

