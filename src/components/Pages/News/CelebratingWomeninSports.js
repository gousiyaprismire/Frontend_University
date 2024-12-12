import React from 'react';
import './CelebratingWomeninSports.css'; // Ensure you create and import the CSS file
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import News from './News';

const CelebratingWomeninSports = () => {
  return (
    <div className="event-page">
      <h1 className="event-title">Celebrating Women in Sports</h1>
      <Carousel
        className="carouselimg"
        autoPlay
        interval={3000}
        infiniteLoop
        showThumbs={false}
      >
        <div>
          <img src="https://txvalues.org/wp-content/uploads/2021/02/Girls-soccer-team-600-315.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="https://image.cnbcfm.com/api/v1/image/107384190-1709836987441-gettyimages-2062881133-776063888mh143.jpeg?v=1709837070&w=1600&h=900" alt="Slide 2" />
        </div>
        <div>
          <img src="https://www.shutterstock.com/image-photo/happy-womens-soccer-team-carrying-260nw-2196932383.jpg" alt="Slide 3" />
        </div>
      </Carousel>
      <p className="event-description">
        Women have always been at the forefront of sports, breaking barriers and setting records. From track and field to swimming, women athletes have won numerous medals and accolades at international competitions. Their dedication and perseverance have inspired countless others to pursue their passion for sports. The achievements of women in sports are a testament to their hard work and resilience. Celebrating these accomplishments not only honors their contributions but also encourages future generations to dream big and aim high. This event shines a spotlight on the incredible journeys of women athletes who have brought pride and glory to their nations through their outstanding performances and numerous medals.
      </p>
      <div className="card-row">
        <div className="card card1">
          <img src="https://img.etimg.com/thumb/msid-104160378,width-640,height-480,imgsize-62860,resizemode-4/annu-rani-creates-history.jpg" alt="Card 1" className="card-image" />
        </div>
        <div className="card card2">
          <img src="https://assets.telegraphindia.com/telegraph/2022/Aug/1659913056_annurani.JPG" alt="Card 2" className="card-image" />
        </div>
        <div className="card card3">
          <img src="https://alumni.utoronto.ca/sites/default/files/styles/content_scale_width_800px_50/public/inline-images/Michelle%20Li.png?itok=ToyExZ_E" alt="Card 3" className="card-image" />
        </div>
      </div>
      <div className="card-row">
        <div className="card card4">
          <img src="https://liveblog.digitalimages.sky/lc-images-sky/lcimg-3b6b5a5a-4f8a-48e0-bf31-a3720a319e43.jpeg" alt="Card 4" className="card-image" />
        </div>
        <div className="card card5">
          <img src="https://cdn.tuoitre.vn/thumb_w/730/471584752817336320/2024/8/12/2024-08-07t204216z656740678up1ek871lids0rtrmadp3olympics-2024-taekwondo-1723430854586425719913.jpg" alt="Card 5" className="card-image" />
        </div>
        <div className="card card6">
          <img src="https://www.olympics.com.au/_next/image/?url=https%3A%2F%2Fcontent.olympics.com.au%2Fpublic%2Fstyles%2Flandscape_header_section%2Fs3%2F2024-08%2FWrap%2520Hero%2520Image%2520-%2520Diving.png.webp%3Fitok%3Dtxw5Davi&w=768&q=95" alt="Card 6" className="card-image" />
        </div>
      </div>
      <div className="image-text-row">
        <img src="https://a.espncdn.com/photo/2024/0730/r1365733_1296x729_16-9.jpg" alt="University Women Athletes" className="side-image" />
        <p className="side-text">
          Our university has a rich history of women excelling in various sports, bringing home numerous medals from national and international competitions. These athletes have not only showcased their talents but have also become role models for the younger generation. Their success stories inspire and motivate others to pursue their dreams with determination and passion. The dedication and hard work of these women athletes have put our university on the map, making it a hub of excellence in sports. From track and field to team sports, our women have set records and raised the bar for future generations.
        </p>
      </div>
      <p className="large-passage">
        Our university's commitment to supporting women in sports is unwavering. Over the years, we have seen numerous talented female athletes rise to the occasion and achieve greatness. The university's sports programs are designed to nurture and develop these talents from a young age. We provide state-of-the-art facilities, experienced coaching staff, and a supportive environment that allows our athletes to thrive. Our success is not only measured in the number of medals won but also in the personal growth and development of our students. Many of our athletes go on to represent their countries on the international stage, becoming ambassadors for our university and inspiring future generations. The journey of each athlete is a testament to the power of dedication, hard work, and the support of a strong community. As we continue to celebrate their achievements, we remain committed to fostering an inclusive and empowering environment for all athletes. The legacy of our women athletes is a source of pride and motivation for the entire university community.
      </p>
      <News/>
    </div>
  );
};

export default CelebratingWomeninSports;
