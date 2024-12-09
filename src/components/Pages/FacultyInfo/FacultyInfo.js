import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './FacultyInfo.css';
// import Footer from '../Footer/Footer';

const defaultFaculty = [
  {
    name: "Mr. Surya Teja Reddy",
    designation: "Professor of Mathematics",
    biodata: "Mr. Surya Teja Reddy has been teaching Mathematics at our college for the past 15 years. He specializes in Differential Equations and Linear Algebra.",
    email: "suryateja@college",
    image: "https://blog.prepscholar.com/hs-fs/hubfs/body_professor_laptop.jpg"
  },
  {
    name: "Mr. Rakesh Kumar",
    designation: "Assistant Professor of Computer Science",
    biodata: "Mr. Rakesh Kumar is an expert in Artificial Intelligence and Machine Learning. He has published several papers in reputed journals.",
    email: "rakeshkumar@college",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlNkuK_iAY5DqUzDfgPHR_Zrjvn7Tmg3RT7w&s"
  },
  {
    name: "Dr. Akram Syed",
    designation: "Associate Professor of Physics",
    biodata: "Dr. Akram Syed has been with the college for 10 years, focusing on Quantum Mechanics and Astrophysics.",
    email: "akramsyed@college",
    image: "https://www.top-business-degrees.net/wp-content/uploads/2013/07/Eric-Sussman21.jpg"
  },
  {
    name: "Mr. Arjun Singh",
    designation: "Lecturer of English",
    biodata: "Mr. Arjun Singh is known for his engaging lectures in Modern Literature. He has a keen interest in post-colonial studies.",
    email: "arjunsingh@college",
    image: "https://res.cloudinary.com/dg5ir1kvd/image/fetch/f_auto,fl_advanced_resize%2Cc_thumb%2Cw_675%2Ch_425/https://www.ccu.edu/_files/images/spotlights/cus-faculty/martin-beeson.jpg%3Fv%3D1721107816231"
  },
  {
    name: "Ms. Preeti Joshi",
    designation: "Professor of Chemistry",
    biodata: "Ms. Preeti Joshi has an extensive background in Organic Chemistry and has been awarded for her research on bio-organic synthesis.",
    email: "preetijoshi@college",
    image: "https://t4.ftcdn.net/jpg/02/37/57/23/360_F_237572349_g2HeC2jG2QpCoNrehJJVpZ2ZwvEFpNpL.jpg"
  },
  {
    name: "Dr. Sunita Sharma",
    designation: "Professor of Biology",
    biodata: "Dr. Sunita Sharma has been teaching Biology at our college for 12 years. She specializes in Genetics and Molecular Biology.",
    email: "sunitasharma@college",
    image: "https://i2.cdn.turner.com/money/2011/02/17/news/companies/worlds_best_business_professors_under_40.fortune/zeynep_ton.top.jpg"
  },
  {
    name: "Mr. Rajesh Gupta",
    designation: "Assistant Professor of History",
    biodata: "Mr. Rajesh Gupta has a deep knowledge of Ancient and Medieval History. He has been part of our college for 8 years.",
    email: "rajeshgupta@college",
    image: "https://t3.ftcdn.net/jpg/06/89/60/46/360_F_689604602_9I3sZbzcT7qcn9ePNwvisROtmRGuuQem.jpg"
  },
  {
    name: "Dr. Priya Mehta",
    designation: "Associate Professor of Economics",
    biodata: "Dr. Priya Mehta is an expert in Macroeconomics and International Trade. She has published several research papers and books.",
    email: "priyamehta@college",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTgXWDqc-Qia34sGM5hPBwRo2PPQa5NMrKag&s"
  },
  {
    name: "Ms. Anita Patel",
    designation: "Lecturer of Political Science",
    biodata: "Ms. Anita Patel is known for her insightful lectures in Political Theory and International Relations. She has been with the college for 5 years.",
    email: "anitapatel@college",
    image: "https://t3.ftcdn.net/jpg/03/86/32/00/360_F_386320054_sAmhnME1msYbVLMTcWhFBLwkHXNahQJP.jpg"
  },
  { 
    name: "Mr. Deepak Verma", 
    designation: "Professor of Mechanical Engineering",
    biodata: "Mr. Deepak Verma has over 20 years of experience in Mechanical Engineering. He specializes in Thermodynamics and Material Science.",
    email: "deepakverma@college",
    image: "https://www.shutterstock.com/image-photo/asian-elderly-man-holding-book-600nw-2204006681.jpg"
  },
  { 
    name: "Dr. Neha Sharma", 
    designation: "Professor of Electrical Engineering", 
    biodata: "Dr. Neha Sharma is an expert in Circuit Design and Renewable Energy. She has published numerous research papers in reputed journals.",
    email: "nehasharma@college",
    image: "https://www.asc.upenn.edu/sites/default/files/styles/260x260/public/2020-09/Julia_Ticona_360.jpg?h=5273c5c2&itok=6Zqf8Rhl" 
  },
  { 
    name: "Mr. Sanjay Patel",
    designation: "Assistant Professor of Civil Engineering", 
    biodata: "Mr. Sanjay Patel has been teaching Civil Engineering for the past 10 years, specializing in Structural Analysis and Geotechnical Engineering.",
    email: "sanjaypatel@college",
    image: "https://poetsandquantsforexecs.com/wp-content/uploads/sites/2/2023/10/Ken-Carow.jpg"
  }
];

const FacultyInfo = () => {
  const [faculty, setFaculty] = useState(defaultFaculty);

  useEffect(() => {
    fetch('http://localhost:8080/api/college/faculty')
      .then(response => response.json())
      .then(data => setFaculty(data))
      .catch(error => {
        console.error('Error fetching faculty data:', error);
      });
  }, []);
  
  const hod = {
    name: "Will Smith",
    designation: "Head of the Department",
    biodata: "Will Smith is an accomplished academic and educator with over 15 years of experience in the field of Applied Physics. He currently serves as the Head of the Department of Physics, overseeing faculty development, research initiatives, and academic programs. Will specializes in experimental physics, with a particular focus on renewable energy systems and sustainable technologies. He has led numerous pioneering projects that have significantly advanced clean energy solutions.",
    email: "will.smith@college.com",
    image: "https://img.freepik.com/premium-photo/portrait-senior-teacher-sitting-desk-classroom-teacher-best-friend-learners-school-teach_265223-80232.jpg"
  };

  return (
    <div className="faculty-container">
      <h2>Faculty Info</h2>
      <div className="carousel-container">
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          <div>
            <img src="https://t3.ftcdn.net/jpg/08/60/24/04/360_F_860240482_eEgkLFXyY5SKnIUT9d7vVSeR0IZpwz6S.jpg" alt="Carousel Image 1" />
          </div>
          <div>
            <img src="https://youthde.com/wp-content/uploads/2024/11/iStock-1142918319_WENR_Ranking_740_430.jpg" alt="Carousel Image 2" />
          </div>
          <div>
            <img src="https://www.uni-wuerzburg.de/fileadmin/_processed_/9/c/csm_Programmes-at-the-University-of-Wuerzburg_aa2de5617f.jpg" alt="Carousel Image 3" />
          </div>
        </Carousel>
      </div>
      <div className="faculty-student-bonding">
         <p>Our faculty members foster strong, collaborative relationships with students by providing mentorship and guidance both academically and personally. We prioritize open communication, ensuring that students feel supported and encouraged throughout their academic journey. Beyond the classroom, our faculty play a key role in students' growth, offering career advice, personal development, and a sense of community within the college.</p>
     </div>
      <div className="hod-info">
  <div className="hod-image">
    <img src={hod.image} alt={hod.name} className="hod-image-circle" />
  </div>
  <div className="hod-details">
    <h3>{hod.name}</h3>
    <p><strong>Designation:</strong>{hod.designation}</p>
    <p><strong>Biodata:</strong>{hod.biodata}</p>
    <p><strong>Email: </strong><a href={`mailto:${hod.email}`}>{hod.email}</a></p>
  </div>
</div>
      <div className="card-container">
        {faculty.map((facultyMember, index) => (
          <div key={index} className="card">
            <img src={facultyMember.image} alt={facultyMember.name} className="card-image" />
            <div className="card-content">
              <h2>{facultyMember.name}</h2>
              <p><strong>Designation:</strong> {facultyMember.designation}</p>
              <p><strong>Biodata:</strong> {facultyMember.biodata}</p>
              <p><strong>Official Email Address:</strong> <a href={`mailto:${facultyMember.email}`}>{facultyMember.email}</a></p>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-container">
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          <div>
            <img src="https://www.sru.edu//images/news/2020/October/101620a-Inline.jpg" alt="Carousel Image 1" />
          </div>
          <div>
            <img src="https://media.istockphoto.com/id/1363276368/photo/lecturer-helps-scholar-with-project-advising-on-their-work-teacher-giving-lesson-to-diverse.jpg?s=612x612&w=0&k=20&c=izS5nDGf1wUvYht3TJXFIrGpc_2P6FFI0RMW0MoCKJI=" alt="Carousel Image 2" />
          </div>
          <div>
            <img src="https://t4.ftcdn.net/jpg/01/81/15/43/360_F_181154305_oxrxOHRDC47sHsrD1HnVkAEy8MNXRzL5.jpg" alt="Carousel Image 3" />
          </div>
        </Carousel>
      </div>
      <div className="faculty-summary">
        <h3>About Our Faculty</h3>
        <p>Our faculty members are renowned experts in their fields, with decades of combined experience in academia and industry. They are dedicated to fostering a supportive learning environment and encouraging students to reach their full potential. Each professor brings unique insights and a wealth of knowledge, making our institution a hub of innovation and excellence. Our faculty actively engage in cutting-edge research, contributing to advancements in their respective disciplines. They also collaborate with industry partners to ensure that the curriculum remains relevant and up-to-date. Their commitment to academic excellence is reflected in their numerous publications, awards, and recognitions. Beyond the classroom, our faculty members serve as mentors, advisors, and role models to our students. They are passionate about education and go above and beyond to inspire and motivate the next generation of leaders and innovators.</p>
      </div>
    {/* <Footer/> */}
    </div>
  );
};
export default FacultyInfo;