import React from 'react';
import './SportsandWellness.css'; // Ensure you create and import the CSS file
import News from './News';

const SportsandWellness = () => {
  return (
    <div className="event-page">
      <h1 className="event-title">Sports and Wellness</h1>
      <img
        src="https://media.istockphoto.com/id/966295656/photo/every-step-taken-towards-fitness-pays-off.jpg?s=612x612&w=0&k=20&c=w6P5ALkC8LqBuAvi0jDOGWhWDaZQRF4XQS4eOSi51ck=" // Replace with your image URL
        alt="Sports and Wellness"
        className="event-image"
      />
      <p className="event-passage">
        At our university, sports and wellness are integral parts of campus life. We believe that physical fitness and mental well-being are essential for academic success and personal growth. Our state-of-the-art sports facilities include fully equipped gyms, swimming pools, sports fields, and courts for various indoor and outdoor activities. We offer a wide range of fitness programs, including group exercise classes, personal training sessions, and wellness workshops. Our dedicated team of coaches and wellness experts is committed to helping students achieve their fitness goals and maintain a healthy lifestyle. The university regularly hosts sports tournaments, wellness fairs, and intramural competitions to encourage participation and foster a sense of community. Our wellness initiatives also focus on mental health, offering resources and support for stress management, mindfulness, and overall well-being. We are proud of the achievements of our student-athletes who have excelled in various sports at national and international levels, bringing honor to the university. Their success stories serve as inspiration for the entire campus community. By promoting a culture of health and wellness, we aim to create a balanced and enriching environment where students can thrive both academically and personally.
      </p>
      <div className="image-text-row">
        <img src="https://www.adu.ac.ae/images/default-source/adu-revised-layout-images/life/sports-wellness/slider/sports-wellness-3.jpeg?sfvrsn=d950125c_8" alt="University Women Athletes" className="side-image" />
        <p className="side-text">
          Our university has a rich history of women excelling in various sports, bringing home numerous medals from national and international competitions. These athletes have not only showcased their talents but have also become role models for the younger generation. Their success stories inspire and motivate others to pursue their dreams with determination and passion. The dedication and hard work of these women athletes have put our university on the map, making it a hub of excellence in sports. From track and field to team sports, our women have set records and raised the bar for future generations.
        </p>
      </div>
      <div className="text-image-row">
        <p className="side-text">
          Our wellness programs are designed to address both physical and mental health. We offer a variety of services, including counseling, stress management workshops, and wellness coaching. These programs aim to provide students with the tools they need to manage stress, build resilience, and maintain a positive outlook. Our wellness center is a safe and supportive space where students can seek help and connect with others who share similar experiences. The university is committed to creating a culture of well-being that encourages students to take care of their minds and bodies, ensuring they have the best possible experience during their time here.
        </p>
        <img src="https://www.sru.edu//images/news/2022/February/021022a-Inline.jpg" alt="University Wellness Programs" className="side-image" />
      </div>
      <div className="card-row">
        <div className="card">
          <img src="https://www.shutterstock.com/image-photo/full-length-side-view-determined-260nw-2403266479.jpg" alt="Card 1" className="card-image" />
        </div>
        <div className="card">
          <img src="https://giving.uoregon.edu/s/1540/images/gid2/editor/sport_and_wellness/sport_and_wellness_resized_1200_800.png" alt="Card 2" className="card-image" />
        </div>
      </div>
      <div className="card-row">
        <div className="card">
          <img src="https://www.insidehighered.com/sites/default/files/styles/max_650x650/public/2024-01/GettyImages-1323475045.jpg?itok=SCcfBf6t" alt="Card 3" className="card-image" />
        </div>
        <div className="card">
          <img src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_863/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/qihyadwnzmfefmxnoxee/HongKongFitnessAndWellnessExpoExternal%7CAsiaWorldExpo.jpg" alt="Card 4" className="card-image" />
        </div>
      </div>
      <p className="final-passage">
        As we look forward to the future, our commitment to promoting sports and wellness remains steadfast. We continue to invest in our facilities and programs, ensuring that our students have access to the best resources available. We believe that a healthy body and mind are the foundations of a successful and fulfilling life, and we strive to create an environment where our students can achieve their full potential. Whether it’s through competitive sports, fitness classes, or wellness programs, we are dedicated to supporting the overall well-being of our university community. Together, we can achieve greatness and make a lasting impact on the world around us.
      </p>
      <News/>
    </div>
  );
};

export default SportsandWellness;
