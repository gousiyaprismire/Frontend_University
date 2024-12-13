import React from 'react';
import './AlumniSuccess.css';
const AlumniSuccess = () => {
  return (
    <div className="alumni-success-content">
      <h2>Outstanding Alumni Success Stories</h2>
      <div className="alumni-achiever-list">
        <div className="alumni-achievement-item">
          <div className="alumni-image-column">
            <img
              src="https://m.media-amazon.com/images/S/amzn-author-media-prod/8qpmg9ha48dlhrjrm580g3kta3._SY450_CR0%2C0%2C450%2C450_.jpg"
              alt="Dr. Alex Carter"
              className="alumni-achiever-image img-fluid"
            />
          </div>
          <div className="content-column">
            <h3 className='heading'>Dr. Alex Carter</h3>
            <p className='ptag'><strong>Achievement:</strong> Founder of AI Healthcare Solutions.</p>
            <p className='ptag'>
              Alex Carter founded a groundbreaking AI company focused on advancing healthcare diagnostics. His innovations have saved thousands of lives worldwide and earned him the "Innovator of the Year" award.
            </p>
          </div>
        </div>
        <div className="alumni-achievement-item">
          <div className="alumni-image-column">
            <img
              src="https://coloringpagescenter.com/upload/author/Emily%20Johnson%20-%20Content%20Writer.jpg"
              alt="Emily Johnson"
              className="alumni-achiever-image img-fluid"
            />
          </div>
          <div className="content-column">
            <h3 className='heading'>Emily Johnson</h3>
            <p className='ptag'><strong>Achievement:</strong> Global Environmental Leader.</p>
            <p className='ptag'>
              Emily's environmental initiatives have planted over a million trees worldwide. She is a recipient of the "Global Green Award" and a leading voice in sustainable development.
            </p>
          </div>
        </div>
        <div className="alumni-achievement-item">
          <div className="alumni-image-column">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLpzqa1tJRjy2bndyGQrj0qIT3h5R25mUwAg&s"
              alt="Michael Lee"
              className="alumni-achiever-image img-fluid"
            />
          </div>
          <div className="content-column">
            <h3 className='heading'>Michael Lee</h3>
            <p className='ptag'><strong>Achievement:</strong> Oscar-winning Film Director.</p>
            <p className='ptag'>
              Michael’s cinematic masterpieces have earned global acclaim, including an Academy Award. His storytelling continues to inspire millions around the world.
            </p>
          </div>
        </div>
        <div className="alumni-achievement-item">
          <div className="alumni-image-column">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfoE2MpCU7mm1eOygZ4weg8xa3iwoDWjLzzA&s"
              alt="Dr. Olivia White"
              className="alumni-achiever-image img-fluid"
            />
          </div>
          <div className="content-column">
            <h3 className='heading'>Dr. Olivia White</h3>
            <p className='ptag'><strong>Achievement:</strong> Nobel Prize Winner in Medicine.</p>
            <p className='ptag'>
              Olivia's medical breakthroughs in genetic research have paved the way for new treatments of rare diseases. Her contributions earned her a Nobel Prize in Medicine.
            </p>
          </div>
        </div>
        <div className="alumni-achievement-item">
          <div className="alumni-image-column">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNcANBEQjqfkiGhdQYExKpGQNlZFP-Vm8i7Q&s"
              alt="David Brown"
              className="alumni-achiever-image img-fluid"
            />
          </div>
          <div className="content-column">
            <h3 className='heading'>David Brown</h3>
            <p className='ptag'><strong>Achievement:</strong> SpaceX Lead Engineer.</p>
            <p className='ptag'>
              David played a key role in designing SpaceX’s reusable rocket systems. His work has significantly reduced the cost of space exploration and inspired future engineers.
            </p>
          </div>
        </div>
      </div>
      <p className='ptag'>
        These remarkable alumni continue to make their mark in diverse fields, embodying the values and education they received at our university. Their achievements inspire our community to strive for excellence.
      </p>
    </div>
  );
};

export default AlumniSuccess;