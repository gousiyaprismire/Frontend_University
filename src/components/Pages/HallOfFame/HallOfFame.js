import React from 'react';
import './HallOfFame.css';

const HallOfFame = () => {
  const achievers = [
    {
      name: 'John',
      title: 'Nobel Laureate in Physics',
      image: 'https://atozsports.com/.image/t_share/MjA4MzA4NjA1NzI2NzYyNjQw/usatsi_23898251.jpg', // Replace with the image path
      description: 'Awarded the Nobel Prize for groundbreaking work in quantum mechanics.',
    },
    {
      name: 'Smith',
      title: 'CEO of TechCorp',
      image: 'https://i.cbc.ca/1.7351783.1728876751!/fileImage/httpImage/image.jpg_gen/derivatives/4x3_1180/2178281531.jpg',
      description: 'Founder and CEO of a Fortune 500 tech company.',
    },
    {
      name: 'Johnson',
      title: 'Olympic Gold Medalist',
      image: 'https://i.pinimg.com/736x/cf/0b/74/cf0b7475f26c043b55fe50cfb98c15d5.jpg',
      description: 'Won gold in swimming at the Summer Olympics.',
    },
    {
      name: 'Michael Lee',
      title: 'Renowned Author',
      image: 'https://t3.ftcdn.net/jpg/06/89/60/46/360_F_689604602_9I3sZbzcT7qcn9ePNwvisROtmRGuuQem.jpg',
      description: 'Bestselling author of the "Future World" series.',
    },
    {
      name: 'Alice Williams',
      title: 'World Champion Chess Player',
      image: 'https://www.hrmagazine.co.uk/media/fz5bjg2e/article-images-2f212668-2falice-2520williams-2520-2520photo.jpg?width=1002&height=564&bgcolor=White&v=1d9420efc364250',
      description: 'First woman to win the World Chess Championship.',
    },
    {
      name: 'David Brown',
      title: 'Astronaut',
      image: 'https://www.unisys.com/siteassets/images/leadership/headshot/leadership-david-brown-3.jpg',
      description: 'Participated in multiple space missions and research on the ISS.',
    },
    {
      name: 'Olivia Harper',
      title: 'Award-Winning Film Director',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdgXz-iD7wcfIX-FRfJ25zbAtV6xKX-v5CLbXEy05Q214LgjsGk6t85auW2iw1vy1hLFo&usqp=CAU',
      description: 'Director of several critically acclaimed films.',
    },
    {
      name: 'James Carter',
      title: 'Professional Basketball Player',
      image: 'https://frontofficesports.com/wp-content/uploads/2023/10/USATSI_19435449_168393969_lowres-scaled-e1697819953633.jpg?quality=100',
      description: 'NBA MVP and multiple-time champion.',
    },
   
    
    {
      name: 'Sophia Davis',
      title: 'Pioneering Neuroscientist',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQHCeaO8HYOWZw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730064288498?e=2147483647&v=beta&t=IpB5zkoWOr4BAbdGHHXHdkWabGTWn-S7Q1pPh4MtWY0',
      description: 'Discovered key insights into brain plasticity.',
    },
    {
      name: 'Mark Wilson',
      title: 'Famous Architect',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD8rXdP4nsuuGUddhKtq688joFVn9q2J3R_A&s',
      description: 'Designed iconic structures worldwide, including the global tech headquarters.',
    },
    {
      name: 'Lily Zhang',
      title: 'Human Rights Advocate',
      image: 'https://www.jonesday.com/-/media/images/attorneys/z/lilyzhang.jpg?rev=bb3ddc48a54f4003a16a4fc087126b27&hash=61F9D929B65FF8AFA5F9215D3B859E52',
      description: 'Fought for the rights of refugees and displaced persons globally.',
    },
    {
      name: 'Robert Green',
      title: 'Philanthropist and Business Leader',
      image: 'https://nextshark.b-cdn.net/wp-content/uploads/2014/06/MellyLee-RobertGreene-1hr-e1411342654107.jpg?width=1536&auto_optimize=medium&quality=85',
      description: 'Built a global charity organization and revolutionized sustainable business practices.',
    },
    {
      name: 'Jessica Clark',
      title: 'Renowned Chef',
      image: 'https://m.media-amazon.com/images/M/MV5BNDY0YzQyZTQtZWVmMS00ODJkLWI4NGEtZDY0NjRmOWRmOGI0XkEyXkFqcGc@._V1_.jpg',
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
  ];

  return (
    <div className="hall-of-fame-container">
      <h1 className="hall-of-fame-title">Hall of Fame</h1>
      <div className="achievers-container">
        {achievers.map((achiever, index) => (
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HallOfFame;
