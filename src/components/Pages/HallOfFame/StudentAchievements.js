import React from 'react';
import './StudentAchievements.css'; 

const StudentAchievements = () => {
  return (
    <div className="student-achievements-content">
      <h2>Outstanding Student Achievements</h2>
      <div className="student-achiever-list">
        <div className="student-achievement-item">
          <div className="student-image-column">
            <img
              src="https://as2.ftcdn.net/v2/jpg/01/82/04/15/1000_F_182041578_lONY3gqsIz5uGveQfl0tdcUF0HXG4r7f.jpg"
              alt="John Doe"
              className="achiever-image img-fluid"
            />
          </div>
          <div className="student-content-column">
            <h3 className='heading'>John Doe</h3>
            <p className='ptag'><strong>Achievement:</strong> Awarded the National Mathematics Championship in 2021.</p>
            <p className='ptag'>
              John’s exceptional problem-solving skills and deep understanding of mathematical concepts led him to win the prestigious National Mathematics Championship in 2021, placing him among the brightest minds in the country.
            </p>
          </div>
        </div>

        <div className="student-achievement-item">
          <div className="student-image-column">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSobOFp1KLhXqTdx77xB6Krrpci5kfXwxGJFA&s"
              alt="Jane Smith"
              className="achiever-image img-fluid"
            />
          </div>
          <div className="student-content-column">
            <h3 className='heading'>Jane Smith</h3>
            <p  className='ptag'><strong>Achievement:</strong> Published groundbreaking research on renewable energy technologies.</p>
            <p  className='ptag'>
              Jane’s research on renewable energy technologies was published in a leading scientific journal. Her innovative approach to improving energy efficiency has already attracted interest from energy companies and environmental organizations.
            </p>
          </div>
        </div>

        <div className="student-achievement-item">
          <div className="student-image-column">
            <img
              src="https://cdn.pixabay.com/photo/2018/06/27/07/45/college-student-3500990_1280.jpg"
              alt="Michael Brown"
              className="achiever-image img-fluid"
            />
          </div>
          <div className="student-content-column">
            <h3 className='heading'> Michael Brown</h3>
            <p  className='ptag'><strong>Achievement:</strong> Gold medalist in the International Physics Olympiad.</p>
            <p  className='ptag'>
              Michael excelled in the International Physics Olympiad, securing a gold medal for his extraordinary performance in a range of challenging physics problems. His achievement has brought pride to the university and set a high bar for future physics students.
            </p>
          </div>
        </div>

        <div className="student-achievement-item">
          <div className="student-image-column">
            <img
              src="https://www.euroschoolindia.com/wp-content/uploads/2023/10/Yale-university-admission-jpg.webp"
              alt="Emily White"
              className="achiever-image img-fluid"
            />
          </div>
          <div className="student-content-column">
            <h3 className='heading'>Emily White</h3>
            <p  className='ptag'><strong>Achievement:</strong> Represented the university in the World Debate Championship and secured first place.</p>
            <p  className='ptag'>
              Emily's exceptional public speaking and critical thinking skills helped her lead the university debate team to victory at the World Debate Championship. Her team's first-place finish showcased the high caliber of our students in global competitions.
            </p>
          </div>
        </div>

        <div className="student-achievement-item">
          <div className="student-image-column">
            <img
              src="https://previews.123rf.com/images/dolgachov/dolgachov1812/dolgachov181200486/113368901-group-of-students-over-university-background.jpg"
              alt="Team Innovators"
              className="achiever-image img-fluid"
            />
          </div>
          <div className="student-content-column">
            <h3 className='heading'>Team Innovators</h3>
            <p  className='ptag'><strong>Achievement:</strong> Developed an award-winning app for mental health awareness, recognized by the Global Tech Forum.</p>
            <p  className='ptag'>
              A team of talented students developed an app aimed at raising mental health awareness, which has since received recognition at the Global Tech Forum. The app uses AI to provide personalized mental health resources and support.
            </p>
          </div>
        </div>
      </div>

      <p  className='ptag'>
        These are just a few examples of how our students continue to inspire and lead in academics, sports, and extracurricular activities. Their hard work, creativity, and dedication contribute not only to the university’s legacy but also to society at large.
      </p>
    </div>
  );
};

export default StudentAchievements;
