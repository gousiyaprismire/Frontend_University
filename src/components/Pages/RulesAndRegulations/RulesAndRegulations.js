import React, { useEffect, useState } from 'react';
import './RulesAndRegulations.css';

const defaultRules = [
  {
    rule: "Attendance Policy",
    description: "Students must maintain at least 75% attendance in all classes to be eligible for examinations. Attendance will be monitored regularly, and students falling below the required percentage will receive warnings. Consistent attendance is crucial for academic success and understanding course material. Make sure to attend all your classes and participate actively.",
    image: "https://ttn-media.s3.amazonaws.com/wp-content/uploads/2021/11/05130948/AttendancePolicyTowardsGrade_EthanCarrolltif.png"
  },
  {
    rule: "Code of Conduct",
    description: "All students are expected to behave respectfully towards faculty, staff, and fellow students at all times. Any form of harassment, discrimination, or disruptive behavior will not be tolerated. Respectful communication and actions are essential to maintain a positive learning environment. Treat everyone with dignity and follow the ethical guidelines set by the college.",
    image: "https://royaleducationalinstitute.com/uploads/pagesection/1587859679-PRBX-Code-of-conduct-1300x800.jpg"
  },
  {
    rule: "Dress Code",
    description: "Students should adhere to the college dress code. Casual wear is not permitted during academic hours. Professional and appropriate attire is expected to promote a conducive learning environment. Ensure you are dressed neatly and modestly, reflecting the college's standards.",
    image: "https://5.imimg.com/data5/ID/VL/HK/SELLER-45263310/student-college-uniform.png"
  },
  {
    rule: "Library Usage",
    description: "Library books should be returned on or before the due date. Late returns will attract a fine. Respect library resources and maintain silence to ensure a quiet study environment for all. Handle books with care and avoid marking or damaging them. Utilize the library's vast resources to support your academic endeavors.",
    image: "https://media.istockphoto.com/id/1248521772/photo/gifted-black-girl-uses-laptop-writes-notes-for-the-paper-essay-study-for-class-assignment.jpg?s=612x612&w=0&k=20&c=A0edhfi3pw8twj7mrANFmQ0V_opWS72k7cgMr0NyoZI="
  },
  {
    rule: "Examination Policy",
    description: "Cheating during examinations is strictly prohibited. Any student caught cheating will face disciplinary action. Integrity is vital to academic success. Prepare thoroughly for exams and do your best without resorting to dishonest methods. Uphold academic integrity and follow all examination guidelines.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkn9ty_OurAAcGhpJCY47MNLu3Psz3-dqe_ZZvcuA7mlcQuhgVcKH4zUa_TK48ihafFA8&usqp=CAU"
  },
  {
    rule: "Extracurricular Participation", 
    description: "Students are encouraged to participate in extracurricular activities, which help in developing a well-rounded personality. Active participation in at least one club or activity is recommended. These activities provide opportunities for personal growth, leadership, and teamwork. Explore your interests and make the most of the college's extracurricular programs.",
    image: "https://enrollbasis.com/wp-content/uploads/2023/01/Benefits-of-Extra-Curricular-Activities-990x500-1.jpg"
  },
  {
    rule: "Anti-Bullying Policy", 
    description: "Bullying, harassment, and discrimination are strictly prohibited. Any student found engaging in such behavior will face immediate disciplinary action. The college is committed to providing a safe and inclusive environment for everyone. Report any incidents of bullying to the authorities and support your peers.",
    image: "https://www.teachingchannel.com/wp-content/uploads/2023/03/stop-bully-logo-s4qc08_full.jpg"
  },
  {
    rule: "Environmental Responsibility",
    description: "Students are expected to contribute to environmental sustainability. This includes proper disposal of waste, participating in recycling programs, and minimizing the use of plastic on campus. Take initiatives to protect the environment and be conscious of your ecological footprint. Support green practices and encourage others to do the same.",
    image: "https://media.istockphoto.com/id/629358800/photo/generating-growth-by-joining-forces.jpg?s=612x612&w=0&k=20&c=L0zf6AG7vuywKCfzMWwAjbX8gKtYOvAsymSZATO-a9w="
  },
  { rule: "Technology Usage", 
    description: "Students are expected to use technology responsibly. This includes adhering to the college’s internet usage policies and avoiding activities such as cyberbullying or accessing inappropriate content. Use college-provided devices and resources for educational purposes only. Respect the digital rights and privacy of others.",
     image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg" 
    },
   { rule: "Health and Safety",
     description: "The health and safety of students are of utmost importance. Follow all safety protocols and guidelines provided by the college. This includes participating in safety drills, reporting hazards, and taking care of your personal health. Utilize the college's health services when needed, and encourage a healthy lifestyle.", 
     image: "https://handbooks.bmh.manchester.ac.uk/2019-20/wp-content/uploads/sites/11/121.png" 
    },
   { rule: "Respect for College Property", 
    description: "Students should respect college property and facilities. This includes keeping classrooms, restrooms, and common areas clean and reporting any damage or maintenance issues promptly. Treat college property with care and contribute to a tidy and well-maintained campus environment.",
     image: "https://m.media-amazon.com/images/I/61zwVkFx1-L._AC_UF894,1000_QL80_.jpg" 
    }
];

const RulesAndRegulations = () => {
  const [rules, setRules] = useState(defaultRules);

  useEffect(() => {
    fetch('http://localhost:8080/api/college/rules')
      .then(response => response.json())
      .then(data => setRules(data))
      .catch(error => console.error('Error fetching rules:', error));
  }, []);

  return (
    <div className="rules-container">
      <h1>College Rules & Regulations</h1>
      <p>The college’s policies and guidelines are outlined below. Please read them carefully to understand the standards and expectations.</p>
      <br />
      <ul>
        {rules.map((ruleItem, index) => (
          <li key={index} className="rule-item">
            <div className="rule-content">
              <h2>{ruleItem.rule}</h2>
              <p>{ruleItem.description}</p>
            </div>
            <div className="rule-image">
              <img src={ruleItem.image} alt={ruleItem.rule} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RulesAndRegulations;
