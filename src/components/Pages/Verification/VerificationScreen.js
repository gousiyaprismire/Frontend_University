import React, { useState, useEffect } from 'react';
import './VerificationScreen.css';  
import axios from 'axios';

function VerificationScreen() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  let serialNumber = 1;
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/students');
        const studentsWithCustomId = response.data.map((student, index) => {
          const randomIncrement = Math.floor(Math.random() * 1000) + 1; 
          const customId = `PSS${index + randomIncrement}`; 
  
          return {
            ...student,
            customId, 
            status: student.status || "Pending" 
          };
        });
        setStudents(studentsWithCustomId);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };
    fetchStudents();
  }, []);
  
 
  const handleViewDetails = (studentId) => {
    const student = students.find((s) => s.id === studentId);
    setSelectedStudent(student);
    setShowModal(true);
  };
 
  const handleBackToTable = () => {
    setShowModal(false);
    setSelectedStudent(null);
  };
 
  const handleApprove = () => {
    if (selectedStudent) {
      selectedStudent.status = "Approved";
      setSelectedStudent({ ...selectedStudent });
      axios.put(`http://localhost:8080/api/students/${selectedStudent.id}`, selectedStudent);
    }
  };
 
  const handleReject = () => {
    if (selectedStudent) {
      selectedStudent.status = "Rejected";
      setSelectedStudent({ ...selectedStudent });
      axios.put(`http://localhost:8080/api/students/${selectedStudent.id}`, selectedStudent);
    }
  };
  return (
    <div className="app-container">
      <h1 className="verificationscreen-h1">Check Student Enrollment Information</h1>
      <div className="student-table-container">
        <table className="student-table" >
          <thead>
            <tr>
              <th>S.No</th>
              <th>Student ID</th>
              <th>Name</th>
              <th>Country</th>
              <th>Email</th>
              <th>Enroll Date</th>
              <th>Status</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
  {students.map((student) => (
    <tr key={student.id}>
      <td>{serialNumber++}</td>
      <td>{student.customId}</td> {/* Display the custom ID */}
      <td>{student.fullname}</td>
      <td>{student.country}</td>
      <td>{student.email}</td>
      <td>{new Date(student.enrollDate).toLocaleDateString()}</td>
      <td>{student.status}</td>
      <td>
        <button onClick={() => handleViewDetails(student.id)}>
          View Details
        </button>
      </td>
    </tr>
  ))}
</tbody>

        </table>
        {showModal && selectedStudent && (
          <div className="modal">
            <div className="student-details-container">
              <h3 className="student-details-header">Student Details</h3>
              <div><strong>Name:</strong> <span>{selectedStudent.fullname}</span></div>
              <div><strong>Email:</strong> <span>{selectedStudent.email}</span></div>
              <div><strong>Phone:</strong> <span>{selectedStudent.mobile}</span></div> 
              <div><strong>Country:</strong> <span>{selectedStudent.country}</span></div>
              <div><strong>Enroll Date:</strong> <span>{new Date(selectedStudent.enrollDate).toLocaleDateString()}</span></div>
              <div><strong>Status:</strong> <span>{selectedStudent.status}</span></div>
              {selectedStudent.status === "Pending" && (
                <div className="approval-buttons">
                  <button onClick={handleApprove} style={{ backgroundColor: 'green' }}>Approve</button>
                  <button onClick={handleReject} style={{ backgroundColor: 'red' }}>Reject</button>
                </div>
              )}
              <div className="student-details-back-btn-container">
                <button className="student-details-back-btn" onClick={handleBackToTable}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
 
export default VerificationScreen;