import React, { useState } from 'react';
import './HallOfFame.css';
import Footer from '../Footer/Footer';
import StudentAchievements from './StudentAchievements';
import FacultyAchievements from './FacultyAchievements';
import AlumniSuccess from './AlumniSuccess';
import UniversityRanking from './UniversityRanking';

const HallOfFame = () => {
  const [activePage, setActivePage] = useState("all");

  const achievers = [
    {
      name: 'John',
      title: 'Nobel Laureate in Physics',
      image: 'https://atozsports.com/.image/t_share/MjA4MzA4NjA1NzI2NzYyNjQw/usatsi_23898251.jpg',
      description: 'Awarded the Nobel Prize for groundbreaking work in quantum mechanics.The Nobel Prize in Physics has been awarded 118 times to 227 Nobel Prize laureates between 1901 and 2024. John Bardeen is the only laureate who has been awarded the Nobel Prize in Physics twice, in 1956 and 1972. This means that a total of 226 individuals have received the Nobel Prize in Physics. Click on the links to get more information.',
    },
    {
      name: 'Smith',
      title: 'CEO of TechCorp',
      image: 'https://i.cbc.ca/1.7351783.1728876751!/fileImage/httpImage/image.jpg_gen/derivatives/4x3_1180/2178281531.jpg',
      description: 'Founder and CEO of a Fortune 500 tech company.When Steve Smith joined Zayo as CEO, he found himself at the head of a company that was a Frankenstein of 46 acquisitions. And while the company’s decentralized approach had served it well in the early years, Steve saw an opportunity to take the company further. This time — and almost paradoxically — through centralization.',
    },
    {
      name: 'Michael Lee',
      title: 'Renowned Author',
      image: 'https://t3.ftcdn.net/jpg/06/89/60/46/360_F_689604602_9I3sZbzcT7qcn9ePNwvisROtmRGuuQem.jpg',
      description: 'Bestselling author of the "Future World" series.Michael Lee is a Norwegian-American writer, youth worker, and organizer. He has received grants and scholarships from the Minnesota State Arts Board, the LOFT Literary Center, and the Bread Loaf Writers’ Conference. Winner of the Scotti Merrill Award for poetry from the Key West Literary Seminar, his poetry has appeared in Ninth Letter, Poetry Northwest, Copper Nickel, and Best New Poets 2018 among others.',
    },
    {
      name: 'Alice Williams',
      title: 'World Champion Chess Player',
      image: 'https://www.hrmagazine.co.uk/media/fz5bjg2e/article-images-2f212668-2falice-2520williams-2520-2520photo.jpg?width=1002&height=564&bgcolor=White&v=1d9420efc364250',
      description: 'First woman to win the World Chess Championship.On Sunday 18th July the charity "Chess in Schools and Communities" is staging the UK’s biggest-ever outdoor chess festival, ChessFest, in Trafalgar Square, London’s most famous public space. It is to commemorate the 150th anniversary of the children’s classic "Through the Looking Glass." Tim Wall looks at what visitors can expect to see, and examines our lasting fascination with Lewis Carroll’s epic fantasy tale. Big pictorial preview.',
    },
    {
      name: 'David Brown',
      title: 'Astronaut',
      image: 'https://www.unisys.com/siteassets/images/leadership/headshot/leadership-david-brown-3.jpg',
      description: 'Participated in multiple space missions and research on the ISS.David McDowell Brown (April 16, 1956 – February 1, 2003) was a United States Navy captain and NASA astronaut. He died on his first spaceflight, when the Space Shuttle Columbia (STS-107) disintegrated during orbital reentry into the Earths atmosphere. Brown became an astronaut in 1996 but had not served on a space mission prior to the Columbia disaster. He was posthumously awarded the Congressional Space Medal of Honor.',
    },
    {
      name: 'James Carter',
      title: 'Professional Basketball Player',
      image: 'https://frontofficesports.com/wp-content/uploads/2023/10/USATSI_19435449_168393969_lowres-scaled-e1697819953633.jpg?quality=100',
      description: 'NBA MVP and multiple-time champion.James Raymond Carter Gaudino (born March 27, 1964) is a retired Puerto Rican basketball player. Carter spent most of his career as a point guard for the Brujos de Guayama of the Baloncesto Superior Nacional (BSN). Carter is currently the all-time assists leader of the league.[1] During his 20-year career, he also played for the Indios de Mayagüez, Criollos de Caguas, Maratonistas de Coamo, and Capitanes de Arecibo. Carter also played since 1992 to the year 2000 for the Explosivos de Moca of the Liga de Baloncesto Puertorriqueña.',
    },
    {
      name: 'Mark Wilson',
      title: 'Famous Architect',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD8rXdP4nsuuGUddhKtq688joFVn9q2J3R_A&s',
      description: 'Designed iconic structures worldwide, including the global tech headquarters.Mark Roland Wilson Jones (born 1956) is an architect and architectural historian whose research covers varied aspects of classical architecture while concentrating on that of ancient Greece and Rome. He is best known for his work on the design of monumental buildings, especially the Pantheon, Rome, and that of the Architectural orders in both Roman and Greek contexts. He is the author of two important books of classical architecture, and is currently a senior lecturer .',
    },
    {
      name: 'Lily Zhang',
      title: 'Human Rights Advocate',
      image: 'https://www.jonesday.com/-/media/images/attorneys/z/lilyzhang.jpg?rev=bb3ddc48a54f4003a16a4fc087126b27&hash=61F9D929B65FF8AFA5F9215D3B859E52',
      description: 'Fought for the rights of refugees and displaced persons globally.During law school, Lily was an associate editor of the UBC Law Review, a student director and clinician of the Law Students’ Legal Advice Program, and a volunteer with the Access Pro Bono Civil Chambers Program. Lily also worked as a research assistant and competed in the BC Law Schools Moot. She received the Blake, Cassels & Graydon Prize in Commercial Transactions, the John K. Campbell Scholarship, the Business Law Clinic Award, and the Thorsteinssons Prize in Taxation.',
    },
    {
      name: 'Robert Green',
      title: 'Philanthropist and Business Leader',
      image: 'https://nextshark.b-cdn.net/wp-content/uploads/2014/06/MellyLee-RobertGreene-1hr-e1411342654107.jpg?width=1536&auto_optimize=medium&quality=85',
      description: 'Built a global charity organization and revolutionized sustainable business practices.The younger son of Jewish parents,[8] Greene grew up in Los Angeles and attended the University of California, Berkeley, before finishing his degree at the University of Wisconsin–Madison with a B.A. degree in classical studies.[9] Prior to becoming an author, Greene estimates that he worked about 50 jobs, including as a construction worker, translator, magazine editor, and Hollywood movie writer.[4] In 1995, Greene worked as a writer at Fabrica.',
    },
    {
      name: 'Jessica Clark',
      title: 'Renowned Chef',
      image: 'https://m.media-amazon.com/images/M/MV5BNDY0YzQyZTQtZWVmMS00ODJkLWI4NGEtZDY0NjRmOWRmOGI0XkEyXkFqcGc@._V1_.jpg',
      description: 'Received Michelin stars for her innovative restaurant concepts.Michelin stars are awards coveted by chefs worldwide who want their restaurants to be put on the gastronomic map. It’s a badge of honor, for sure. However, it’s not always the indication of quality that many of us assume it to be.With three weeks of kaleidoscopic lighting displays, exhilarating live music and deep-dive discussions with thought-leaders from around the world, the festival of creativity, innovation and technology is set to hypnotise Sydneysiders and visitors once again when the sun sets on Friday.',
    },

  ];

  const renderContent = () => {
    switch (activePage) {
      case "all":
        return (
          <div className="all-achievers-container">
            {achievers.map((achiever, index) => (
              <div className="row mb-4" key={index}>
                <div className={`col-md-6 ${index % 2 === 0 ? 'order-md-1' : 'order-md-2'}`}>
                  <img
                    src={achiever.image}
                    alt={achiever.name}
                    className="all-achiever-image img-fluid"
                  />
                </div>
                <div className={`col-md-6 ${index % 2 === 0 ? 'order-md-2' : 'order-md-1'}`}>
                  <div className="all-achiever-card-content">
                    <h2 className="all-achiever-name">{achiever.name}</h2>
                    <p className="all-achiever-title">{achiever.title}</p>
                    <p className="all-achiever-description">{achiever.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case "student-achievements":
        return <StudentAchievements />;
      case "faculty-achievements":
        return <FacultyAchievements />;
      case "alumni-success":
        return <AlumniSuccess />;
      case "university-ranking":
        return <UniversityRanking />;
      default:
        return null;
    }
  };

  return (
    <div className="hall-of-fame-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">Hall of Fame</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={() => setActivePage("all")}>
                  All Achievers
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={() => setActivePage("student-achievements")}>
                  Student Achievements
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={() => setActivePage("faculty-achievements")}>
                  Faculty Achievements
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={() => setActivePage("alumni-success")}>
                  Alumni Success
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={() => setActivePage("university-ranking")}>
                  University Rankings
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="content-container">{renderContent()}</div>

      <Footer />
    </div>
  );
};

export default HallOfFame;
