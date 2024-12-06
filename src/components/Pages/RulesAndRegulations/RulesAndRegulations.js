
import React, { useEffect, useState } from 'react';
import './RulesAndRegulations.css';

const defaultRules = [
  {
    rule: "Attendance Policy",
    description: "Students must maintain at least 75% attendance in all classes to be eligible for examinations.",
  //  image:"https://static.vecteezy.com/system/resources/thumbnails/009/690/753/small/rules-and-regulations-word-under-torn-green-paper-photo.jpg",
  },
  {
    rule: "Code of Conduct",
    description: "All students are expected to behave respectfully towards faculty, staff, and fellow students at all times."
  },
  {
    rule: "Dress Code",
    description: "Students should adhere to the college dress code. Casual wear is not permitted during academic hours."
  },
  {
    rule: "Library Usage",
    description: "Library books should be returned on or before the due date. Late returns will attract a fine."
  },
  {
    rule: "Examination Policy",
    description: "Cheating during examinations is strictly prohibited. Any student caught cheating will face disciplinary action."
  },
  {
    rule: "Extracurricular Participation", 
    description: "Students are encouraged to participate in extracurricular activities, which help in developing a well-rounded personality. Active participation in at least one club or activity is recommended."
  },
  {
    rule: "Anti-Bullying Policy", 
    description: "Bullying, harassment, and discrimination are strictly prohibited. Any student found engaging in such behavior will face immediate disciplinary action."
  },
  {
    rule: "Environmental Responsibility",
    description: "Students are expected to contribute to environmental sustainability. This includes proper disposal of waste, participating in recycling programs, and minimizing the use of plastic on campus.",
  //   image:"https://static.vecteezy.com/system/resources/thumbnails/009/690/753/small/rules-and-regulations-word-under-torn-green-paper-photo.jpg",
   },
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
          <li key={index}>
            <h2>{ruleItem.rule}</h2>
            <p>{ruleItem.description}</p>
          </li>
        ))}
      </ul>
      {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/009/690/753/small/rules-and-regulations-word-under-torn-green-paper-photo.jpg" className="rules-image"/> */}
    </div>
  );
};
export default RulesAndRegulations;