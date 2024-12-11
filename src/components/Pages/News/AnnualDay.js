import React from 'react';
import './AnnualDay.css'; // Ensure you create and import the CSS file

const AnnualDay = () => {
  return (
    <div className="annual-day">
      <h1>Annual Day</h1>
      <img
        src="https://www.uoftplasticsurgery.ca/wp-content/uploads/resident-research-day-2022/2022006-01.jpg" // Replace with your image URL
        alt="Annual Day"
        className="annual-day-image"
      />
      <p className="annual-day-passage">
      Annual Day is one of the most eagerly awaited events of the year. It brings together students, faculty, and parents for a day of celebration and recognition. The day usually starts with a grand opening ceremony, featuring performances by students showcasing their talents in dance, music, and drama. Speeches by the school leadership and honored guests highlight the achievements of the past year and set the tone for the future. Awards are given to students for academic excellence, sports achievements, and other notable contributions. The event concludes with a grand finale, leaving everyone with unforgettable memories. It's a day that fosters community spirit and celebrates the diverse talents within the school. Throughout the day, various exhibitions and stalls are set up, providing a platform for students to display their projects and innovations. The food stalls offer a variety of delicious treats, adding to the festive atmosphere. Parents and visitors often participate in games and activities, making it a day of fun and bonding for everyone involved
      </p>
    </div>
  );
};

export default AnnualDay;
