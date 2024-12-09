import React, { useState } from 'react';
import './VerificationScreen.css';
 
function VerificationScreen() {
    const students = [
    {
      id: 1,
      name: "Balaji",
      email: "balaji@example.com",
      phone: "+916302956301",
      country: "USA",
      university: "California University",
      enrollDate: "2024-12-04",
      imageUrl: "https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-260nw-2437772333.jpg",
      additionalInfo: "Computer Science"
    },
    {
      id: 2,
      name: "Manoj",
      email: "manoj@example.com",
      phone: "+919876543210",
      country: "Canada",
      university: "The Kings University",
      enrollDate: "2024-12-04",
      imageUrl: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/9-1-change.jpg",
      additionalInfo: "Full Scholarship"
    },
    {
      id: 3,
      name: "Riya",
      email: "riya@example.com",
      phone: "+919876535210",
      country: "UK",
      university: "University Victoria",
      enrollDate: "2024-12-04",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLS1UILlUEhOYZnCC5w7FLCkQgZXV_hcbyi8bc5jm7Bjsdaz4pUf1wiYDJ6YnzqiYD8PQ&usqp=CAU",
      additionalInfo: "Football Team Captain"
    },
    {
      id: 4,
      name: "Sathvik",
      email: "sathvik@example.com",
      phone: "+919876543210",
      country: "UK",
      university: "The Kings University",
      enrollDate: "2024-12-04",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSzhGRI8aidd2BKPB1xRuFd0mFD_TkWrxjxQ&s",
      additionalInfo: "Football Team Captain"
    }
  ];
 
  const [selectedStudent, setSelectedStudent] = useState(null);
 
  const handleViewDetails = (studentId) => {
    const student = students.find(s => s.id === studentId);
    setSelectedStudent(student);
  };
 
  const handleBackToTable = () => {
    setSelectedStudent(null);
  };
 
  return (
    <div className="app-container">
      <h1 style={{ backgroundColor: 'white', fontSize: '2rem',fontWeight:"Bold",textShadow:" 2px 2px 4px rgba(0,0,0,0.5)",marginTop:"15px" }}>Check Student Enrollment Information</h1>
 
      <div className="student-table-container">
        <h2 className="student-table-header">Student Table</h2>
 
        <table className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Country</th>
              <th>Email</th>
              <th>University</th>
              <th>Enroll Date</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>
                  <img src={student.imageUrl} alt={student.name} />
                </td>
                <td>{student.name}</td>
                <td>{student.country}</td>
                <td>{student.email}</td>
                <td>{student.university}</td>
                <td>{new Date(student.enrollDate).toLocaleDateString()}</td>
                <td>
                  <button onClick={() => handleViewDetails(student.id)}>
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
 
        {selectedStudent && (
          <div className="student-details-container">
            <h3 className="student-details-header">Student Details</h3>
 
            <div><strong>Name:</strong> <span>{selectedStudent.name}</span></div>
            <div><strong>Email:</strong> <span>{selectedStudent.email}</span></div>
            <div><strong>Phone:</strong> <span>{selectedStudent.phone}</span></div>
            <div><strong>Country:</strong> <span>{selectedStudent.country}</span></div>
            <div><strong>University:</strong> <span>{selectedStudent.university}</span></div>
            <div><strong>Enroll Date:</strong> <span>{new Date(selectedStudent.enrollDate).toLocaleDateString()}</span></div>
            <div><strong>Additional Info:</strong> <span>{selectedStudent.additionalInfo}</span></div>
 
            <div className="student-details-back-btn-container">
              <button className="student-details-back-btn" onClick={handleBackToTable}>
                Back to Table
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
 
export default VerificationScreen;