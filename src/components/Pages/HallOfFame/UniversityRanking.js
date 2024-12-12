import React from 'react';
import './UniversityRanking.css';

const UniversityRanking = () => {
  return (
    <div className="university-ranking-content">
      <h2 className='header'>University Rankings & Awards</h2>
      <p className='statement'>
        Recognized nationally and globally, our university continues to set new benchmarks in education, research, and innovation. Here are some of our most notable achievements:
      </p>

      <div className="ranking-highlights">
        <div className="ranking-item">
          <div className="content-column">
            <h3 className='heading'>Global Rankings</h3>
            <ul className='unordered'>
              <li className='list-items'>
                Ranked among the <strong>Top 100 Universities Worldwide</strong> by the Times Higher Education World University Rankings.
              </li>
              <li className='list-items'>
                Listed in the <strong>Top 50 Universities for Research Impact</strong> in 2023.
              </li>
              <li className='list-items'>
                Achieved a 5-star rating in the QS Stars University Ratings for academic excellence and facilities.
              </li>
            </ul>
          </div>
          <div className="image-column">
            <img
              src="https://www.timeshighereducation.com/sites/default/themes/custom/the_responsive/img/social/ranking-share.jpg"
              alt="Global Rankings"
              className="ranking-image"
            />
          </div>
        </div>

        <div className="ranking-item">
          <div className="content-column">
            <h3 className='heading'>National Accolades</h3>
            <ul className='unordered'>
              <li className='list-items'>
                Consistently ranked as the <strong>#1 University in the State</strong> for the past five years.
              </li>
              <li className='list-items'>
                Recognized as the <strong>Best University for Engineering and Technology</strong> in the 2023 National Education Awards.
              </li>
              <li className='list-items'>
                Awarded "Excellence in Education" by the Ministry of Education in 2022.
              </li>
            </ul>
          </div>
          <div className="image-column">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWlOR0PwGRe8eimdcM4HMTZzAeSiDHhxJ-8A&s"
              alt="National Accolades"
              className="ranking-image"
            />
          </div>
        </div>

        <div className="ranking-item">
          <div className="content-column">
            <h3 className='heading'>Research and Innovation</h3>
            <ul className='unordered'>
              <li className='list-items'>
                Ranked in the <strong>Top 10 Universities for Research Publications</strong> in AI and Machine Learning.
              </li>
              <li className='list-items'>
                Recognized for pioneering research in renewable energy and biotechnology.
              </li>
              <li className='list-items'>
                Secured over $10 million in research grants from global funding organizations.
              </li>
            </ul>
          </div>
          <div className="image-column">
            <img
              src="https://media.istockphoto.com/id/1363405922/photo/big-data-concept-digital-neural-network-business-woman-hand-touching-introduction-of.jpg?s=612x612&w=0&k=20&c=RalKiggho8m_33tXSMceal_0wmkFSPk1EPH-7o76N6Y="
              alt="Research and Innovation"
              className="ranking-image"
            />
          </div>
        </div>

        <div className="ranking-item">
          <div className="content-column">
            <h3 className='heading'>Student Success</h3>
            <ul className='unordered'>
              <li className='list-items'>
                Ranked in the <strong>Top 20 Universities Worldwide for Graduate Employability</strong>.
              </li>
              <li className='list-items'>
                Alumni network includes CEOs, Nobel Laureates, and leaders across diverse fields.
              </li>
              <li className='list-items'>
                Over 90% of graduates secure employment within six months of graduation.
              </li>
            </ul>
          </div>
          <div className="image-column">
            <img
              src="https://media.istockphoto.com/id/1406888053/photo/a-group-of-cheerful-people-at-graduation-holding-diplomas-or-certificates-up-together-and.jpg?s=612x612&w=0&k=20&c=8LRkx77cpb1clqj2tHqOY--uO8Mj6DB8Qd1Y3RdDRyQ="
              alt="Student Success"
              className="ranking-image"
            />
          </div>
        </div>
      </div>
      <p className='last-tag'>
        Our unwavering commitment to academic excellence, cutting-edge research, and societal impact continues to position our university as a leader in global education.
      </p>
    </div>
  );
};

export default UniversityRanking;
