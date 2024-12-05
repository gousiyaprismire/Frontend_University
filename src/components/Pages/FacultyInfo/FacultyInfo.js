import React, { useEffect, useState } from 'react';
import './FacultyInfo.css';

const defaultFaculty = [
  {
    name: "Mr.Surya Teja Reddy",
    designation: "Professor of Mathematics",
    biodata: "Dr. Asha Rao has been teaching Mathematics at our college for the past 15 years. She specializes in Differential Equations and Linear Algebra.",
    email: "suryateja@college"
  },

  {
    name: "Mr.Rakesh Kumar",
    designation: "Assistant Professor of Computer Science",
    biodata: "Mr. Rakesh Kumar is an expert in Artificial Intelligence and Machine Learning. He has published several papers in reputed journals.",
    email: "rakeshkumar@college"
  },
  {
    name: "Mr.Akram Syed",
    designation: "Associate Professor of Physics",
    biodata: "Dr. Kavita Sharma has been with the college for 10 years, focusing on Quantum Mechanics and Astrophysics.",
    email: "Akramsyed@college"
  },
  {
    name: "Mr Arjun Singh",
    designation: "Lecturer of English",
    biodata: "Mr. Arjun Singh is known for his engaging lectures in Modern Literature. He has a keen interest in post-colonial studies.",
    email: "arjunsingh@college"
  },
  {
    name: "Miss.Preeti Joshi",
    designation: "Professor of Chemistry",
    biodata: "Dr. Preeti Joshi has an extensive background in Organic Chemistry and has been awarded for her research on bio-organic synthesis.",
    email: "preetijoshi@college"
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
  return (
    <div className="faculty-container">
      <h1>Faculty Info</h1>
      <ul>
        {faculty.map((facultyMember, index) => (
          <li key={index}>
            <h2>{facultyMember.name}</h2>
            <p><strong>Designation:</strong> {facultyMember.designation}</p>
            <p><strong>Biodata:</strong> {facultyMember.biodata}</p>
            <p><strong>Official Email Address:</strong> <a href={`mailto:${facultyMember.email}`}>{facultyMember.email}</a></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacultyInfo;
