import React from 'react';
import './HallOfFame.css';
<<<<<<< HEAD
import Footer from '../Footer/Footer'; 
=======
>>>>>>> b96bdb5fb6fcee1e4b7cb8f7a2b2cc048a230839

const HallOfFame = () => {
  const achievers = [
    {
      name: 'John',
      title: 'Nobel Laureate in Physics',
<<<<<<< HEAD
      image: 'https://atozsports.com/.image/t_share/MjA4MzA4NjA1NzI2NzYyNjQw/usatsi_23898251.jpg',
      description: 'Awarded the Nobel Prize for groundbreaking work in quantum mechanics.The Nobel Prize in Physics has been awarded 118 times to 227 Nobel Prize laureates between 1901 and 2024. John Bardeen is the only laureate who has been awarded the Nobel Prize in Physics twice, in 1956 and 1972.',
=======
      image: 'https://atozsports.com/.image/t_share/MjA4MzA4NjA1NzI2NzYyNjQw/usatsi_23898251.jpg', // Replace with the image path
      description: 'Awarded the Nobel Prize for groundbreaking work in quantum mechanics.',
>>>>>>> b96bdb5fb6fcee1e4b7cb8f7a2b2cc048a230839
    },
    {
      name: 'Smith',
      title: 'CEO of TechCorp',
      image: 'https://i.cbc.ca/1.7351783.1728876751!/fileImage/httpImage/image.jpg_gen/derivatives/4x3_1180/2178281531.jpg',
<<<<<<< HEAD
      description: 'Founder and CEO of a Fortune 500 tech company.When Steve Smith joined Zayo as CEO, he found himself at the head of a company that was a Frankenstein of 46 acquisitions. And while the company’s decentralized approach had served it well in the early years, Steve',
    },
    
    
=======
      description: 'Founder and CEO of a Fortune 500 tech company.',
    },
    {
      name: 'Johnson',
      title: 'Olympic Gold Medalist',
      image: 'https://i.pinimg.com/736x/cf/0b/74/cf0b7475f26c043b55fe50cfb98c15d5.jpg',
      description: 'Won gold in swimming at the Summer Olympics.',
    },
>>>>>>> b96bdb5fb6fcee1e4b7cb8f7a2b2cc048a230839
    {
      name: 'Michael Lee',
      title: 'Renowned Author',
      image: 'https://t3.ftcdn.net/jpg/06/89/60/46/360_F_689604602_9I3sZbzcT7qcn9ePNwvisROtmRGuuQem.jpg',
<<<<<<< HEAD
      description: 'Bestselling author of the "Future World" series.Michael Lee is a Norwegian-American writer, youth worker, and organizer. He has received grants and scholarships from the Minnesota State Arts Board, the LOFT Literary Center, and the Bread Loaf Writers’ Conference. ',
=======
      description: 'Bestselling author of the "Future World" series.',
>>>>>>> b96bdb5fb6fcee1e4b7cb8f7a2b2cc048a230839
    },
    {
      name: 'Alice Williams',
      title: 'World Champion Chess Player',
      image: 'https://www.hrmagazine.co.uk/media/fz5bjg2e/article-images-2f212668-2falice-2520williams-2520-2520photo.jpg?width=1002&height=564&bgcolor=White&v=1d9420efc364250',
<<<<<<< HEAD
      description: 'First woman to win the World Chess Championship.On Sunday 18th July the charity "Chess in Schools and Communities" is staging the UK’s biggest-ever outdoor chess festival, ChessFest, in Trafalgar Square, London’s most famous public space. It is to commemorate',
=======
      description: 'First woman to win the World Chess Championship.',
>>>>>>> b96bdb5fb6fcee1e4b7cb8f7a2b2cc048a230839
    },
    {
      name: 'David Brown',
      title: 'Astronaut',
      image: 'https://www.unisys.com/siteassets/images/leadership/headshot/leadership-david-brown-3.jpg',
<<<<<<< HEAD
      description: 'Participated in multiple space missions and research on the ISS.David McDowell Brown (April 16, 1956 – February 1, 2003) was a United States Navy captain and NASA astronaut. He died on his first spaceflight, when the Space Shuttle Columbia (STS-107) ',
    },
    
=======
      description: 'Participated in multiple space missions and research on the ISS.',
    },
    {
      name: 'Olivia Harper',
      title: 'Award-Winning Film Director',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdgXz-iD7wcfIX-FRfJ25zbAtV6xKX-v5CLbXEy05Q214LgjsGk6t85auW2iw1vy1hLFo&usqp=CAU',
      description: 'Director of several critically acclaimed films.',
    },
>>>>>>> b96bdb5fb6fcee1e4b7cb8f7a2b2cc048a230839
    {
      name: 'James Carter',
      title: 'Professional Basketball Player',
      image: 'https://frontofficesports.com/wp-content/uploads/2023/10/USATSI_19435449_168393969_lowres-scaled-e1697819953633.jpg?quality=100',
<<<<<<< HEAD
      description: 'NBA MVP and multiple-time champion.James Raymond Carter Gaudino (born March 27, 1964) is a retired Puerto Rican basketball player. Carter spent most of his career as a point guard for the Brujos de Guayama of the Baloncesto Superior Nacional (BSN). Carter is currently the all-time assists leader of the league.[1] During his 20-year career,',
    },
   
    
    
=======
      description: 'NBA MVP and multiple-time champion.',
    },
   
    {
      name: 'Sophia Davis',
      title: 'Pioneering Neuroscientist',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQHCeaO8HYOWZw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730064288498?e=2147483647&v=beta&t=IpB5zkoWOr4BAbdGHHXHdkWabGTWn-S7Q1pPh4MtWY0',
      description: 'Discovered key insights into brain plasticity.',
    },
>>>>>>> b96bdb5fb6fcee1e4b7cb8f7a2b2cc048a230839
    {
      name: 'Mark Wilson',
      title: 'Famous Architect',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD8rXdP4nsuuGUddhKtq688joFVn9q2J3R_A&s',
<<<<<<< HEAD
      description: 'Designed iconic structures worldwide, including the global tech headquarters.Mark Roland Wilson Jones (born 1956) is an architect and architectural historian whose research covers varied aspects of classical architecture while concentrating on that of ancient Greece and Rome. He is best known for his work on the design of monumental.',
=======
      description: 'Designed iconic structures worldwide, including the global tech headquarters.',
>>>>>>> b96bdb5fb6fcee1e4b7cb8f7a2b2cc048a230839
    },
    {
      name: 'Lily Zhang',
      title: 'Human Rights Advocate',
      image: 'https://www.jonesday.com/-/media/images/attorneys/z/lilyzhang.jpg?rev=bb3ddc48a54f4003a16a4fc087126b27&hash=61F9D929B65FF8AFA5F9215D3B859E52',
<<<<<<< HEAD
      description: 'Fought for the rights of refugees and displaced persons globally.During law school, Lily was an associate editor of the UBC Law Review, a student director and clinician of the Law Students’ Legal Advice Program, and a volunteer with the Access Pro Bono Civil Chambers Program. Lily also worked as a research assistant and competed in the BC Law Schools Moot.',
=======
      description: 'Fought for the rights of refugees and displaced persons globally.',
>>>>>>> b96bdb5fb6fcee1e4b7cb8f7a2b2cc048a230839
    },
    {
      name: 'Robert Green',
      title: 'Philanthropist and Business Leader',
      image: 'https://nextshark.b-cdn.net/wp-content/uploads/2014/06/MellyLee-RobertGreene-1hr-e1411342654107.jpg?width=1536&auto_optimize=medium&quality=85',
<<<<<<< HEAD
      description: 'Built a global charity organization and revolutionized sustainable business practices.The younger son of Jewish parents,[8] Greene grew up in Los Angeles and attended the University of California, Berkeley, before finishing his degree at the University of Wisconsin–Madison with a B.A. degree in classical studies.[9] Prior to becoming an author, Greene estimates ',
=======
      description: 'Built a global charity organization and revolutionized sustainable business practices.',
>>>>>>> b96bdb5fb6fcee1e4b7cb8f7a2b2cc048a230839
    },
    {
      name: 'Jessica Clark',
      title: 'Renowned Chef',
      image: 'https://m.media-amazon.com/images/M/MV5BNDY0YzQyZTQtZWVmMS00ODJkLWI4NGEtZDY0NjRmOWRmOGI0XkEyXkFqcGc@._V1_.jpg',
<<<<<<< HEAD
      description: 'Received Michelin stars for her innovative restaurant concepts.Michelin stars are awards coveted by chefs worldwide who want their restaurants to be put on the gastronomic map. It’s a badge of honor, for sure. However, it’s not always the indication of quality that many of us assume it to be.With three weeks of kaleidoscopic lighting displays, exhilarating live.',
    },
    
=======
      description: 'Received Michelin stars for her innovative restaurant concepts.',
    },
    {
      name: 'Matthew Richards',
      title: 'World Champion F1 Driver',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJ-TkGa4S5jiswur3N1zcoH5LwXvjL5isTw&s',
      description: 'Won multiple Formula 1 World Championships.',
    },
    {
      name: 'Angela White',
      title: 'Tech Innovator and Entrepreneur',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJSBARYU6rS4CYzDDitW97M8upuLAeeURYw&s',
      description: 'Launched breakthrough software products that transformed global industries.',
    },
>>>>>>> b96bdb5fb6fcee1e4b7cb8f7a2b2cc048a230839
  ];

  return (
    <div className="hall-of-fame-container">
      <h1 className="hall-of-fame-title">Hall of Fame</h1>
      <div className="achievers-container">
        {achievers.map((achiever, index) => (
<<<<<<< HEAD
          <div className="row mb-4" key={index}>
            {/* Alternating image and text layout */}
            <div className={`col-md-6 ${index % 2 === 0 ? 'order-md-1' : 'order-md-2'}`}>
              <img
                src={achiever.image}
                alt={achiever.name}
                className="achiever-image img-fluid"
              />
            </div>
            <div className={`col-md-6 ${index % 2 === 0 ? 'order-md-2' : 'order-md-1'}`}>
              <div className="achiever-card-content">
                <h2 className="achiever-name">{achiever.name}</h2>
                <p className="achiever-title">{achiever.title}</p>
                <p className="achiever-description">{achiever.description}</p>
              </div>
=======
          <div key={index} className="achiever-card">
            <img
              src={achiever.image}
              alt={achiever.name}
              className="achiever-image"
            />
            <div className="achiever-card-content">
              <h2 className="achiever-name">{achiever.name}</h2>
              <p className="achiever-title">{achiever.title}</p>
              <p className="achiever-description">{achiever.description}</p>
>>>>>>> b96bdb5fb6fcee1e4b7cb8f7a2b2cc048a230839
            </div>
          </div>
        ))}
      </div>
<<<<<<< HEAD

      <Footer/>
=======
>>>>>>> b96bdb5fb6fcee1e4b7cb8f7a2b2cc048a230839
    </div>
  );
};

export default HallOfFame;
