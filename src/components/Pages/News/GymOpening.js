import React from 'react';
import './GymOpening.css'; // Ensure you create and import the CSS file
import News from './News';
const GymOpening = () => {
  return (
    <div className="event-page">
      <h1 className="event-title">Gym Opening</h1>
      <img
        src="https://www.garagegymreviews.com/wp-content/uploads/Best-Univeristy-Football-Weight-Rooms.png" // Replace with your image URL
        alt="Gym Opening"
        className="event-image"
      />
      <p className="event-passage">
        The newly inaugurated gym at the university marks a significant milestone in promoting health and wellness among students and faculty. Equipped with state-of-the-art machines and facilities, it offers a comprehensive range of fitness programs tailored to different needs and levels. The gym's opening ceremony was attended by prominent figures from the university, who emphasized the importance of physical fitness in academic success. Students now have access to personal training sessions, group classes, and wellness workshops. The facility is designed to foster a community of healthy living and provide a space for relaxation and rejuvenation. With dedicated areas for cardiovascular exercises, strength training, and flexibility workouts, the gym caters to all aspects of physical well-being. The gym was officially opened on April 4th, 2023, amidst much enthusiasm and anticipation. The ceremony featured speeches from university officials, cutting-edge fitness demonstrations, and tours of the facility. Students, faculty, and guests were thrilled to explore the new space and participate in various fitness activities designed to showcase the gym's offerings. The gym is expected to become a cornerstone of the university's commitment to holistic education, emphasizing the importance of physical fitness alongside academic excellence.
      </p>
      <div className="image-row">
        <div className="card">
          <img src="https://www.fitness-world.in/wp-content/uploads/2019/10/09-blogbanner.jpg" alt="Gym Image 1" className="event-thumb" />
        </div>
        <div className="card">
          <img src="https://images.contentstack.io/v3/assets/blt22d99ecc27f694ac/blt982139a5631cb154/65b8056d3090d24e8649f316/1534_2785?branch=prod&v=4&width=789&auto=webp&quality=90" alt="Gym Image 2" className="event-thumb" />
        </div>
        <div className="card">
          <img src="https://www.galgotiasuniversity.edu.in/public/uploads/media/XrfI1TmWNDnxePYUTUddRDdpAQgLTYGvmiZmzL48.jpg" alt="Gym Image 3" className="event-thumb" />
        </div>
      </div>
      <div className="image-row">
        <div className="card">
          <img src="https://www.city.ac.uk/__data/assets/image/0005/639833/City_University_Prospectus_2018_L5A3860.jpg" alt="Gym Image 4" className="event-thumb" />
        </div>
        <div className="card">
          <img src="https://media.istockphoto.com/id/894242814/photo/cheerful-male-athlete-talking-to-his-friend-on-exercising-training-in-a-health-club.jpg?s=612x612&w=0&k=20&c=LWfxClwkYXbXclssb-mD1_-ZxRREkcJ3pg211PEhzDU=" alt="Gym Image 5" className="event-thumb" />
        </div>
        <div className="card">
          <img src="https://static.vecteezy.com/system/resources/previews/029/561/969/large_2x/a-group-of-happy-people-posing-in-a-gym-free-photo.jpg" alt="Gym Image 6" className="event-thumb" />
        </div>
      </div>
      <div className="image-row">
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNC49eegJdPKLIE4DufIzJmjr9EI-7pyFUL7mz5ZnI4moCiHTeoiXzE2tcpJJUGf4wgew&usqp=CAU" alt="Gym Image 4" className="event-thumb" />
        </div>
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1XcKibZN2doY-FP4WeHXw2yDdDjZjBgVT4CfssLJqciG9Z8FzwArbiM4ON2TzfFBI9oU&usqp=CAU" alt="Gym Image 5" className="event-thumb" />
        </div>
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqXjmSqZpgcbJ3sFmsuY1NjxPXnwMUbhjqKtce-SenDlVEkT7cZNe6_qHm7tqKRprj2mg&usqp=CAU" alt="Gym Image 6" className="event-thumb" />
        </div>
      </div>
      <p className="gym-culture"> Gym culture at the university has always been vibrant, promoting a balanced approach to both academic and physical excellence. The state-of-the-art facilities ensure that students and faculty alike have access to top-tier equipment and resources for their fitness needs. The university offers a variety of fitness classes, from yoga and pilates to high-intensity interval training and martial arts, catering to diverse interests and fitness levels. This commitment to physical health is reflected in the enthusiastic participation seen at university sports events and fitness challenges. Community events such as health and wellness workshops, nutrition seminars, and mental health awareness programs further bolster the university's holistic approach to student well-being. The gym is more than just a place to work out; it's a hub of community activity, fostering connections and promoting a culture of lifelong fitness and health. The opening of the new gym facility is set to further enhance this culture, providing an inspiring environment where the university community can thrive both physically and mentally. </p>
     <News/>
    </div>
    
  );
};

export default GymOpening;
