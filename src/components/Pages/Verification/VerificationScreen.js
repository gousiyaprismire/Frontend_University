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
      additionalInfo: "Computer Science",
      status: "Pending",
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
      additionalInfo: "Full Scholarship",
      status: "Approved",
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
      additionalInfo: "Football Team Captain",
      status: "Pending",
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
      additionalInfo: "Football Team Captain",
      status: "Approved",
    },
    {
      id: 5,
      name: "John",
      email: "john@example.com",
      phone: "+919876523456",
      country: "USA",
      university: "Stanford University",
      enrollDate: "2024-12-05",
      imageUrl: "https://i.pinimg.com/originals/c3/33/27/c333273fcfc3198e93df380c0cfc0437.jpg",
      additionalInfo: "Data Science",
      status: "Pending",
    },
    {
      id: 6,
      name: "Sarah",
      email: "sarah@example.com",
      phone: "+917899123456",
      country: "Canada",
      university: "McGill University",
      enrollDate: "2024-12-06",
      imageUrl: "https://myedit.online/seo_content/images/section_05/passport_photo_maker_01.webp",
      additionalInfo: "Physics",
      status: "Approved",
    },
    {
      id: 7,
      name: "Mia",
      email: "mia@example.com",
      phone: "+918736542345",
      country: "UK",
      university: "Oxford University",
      enrollDate: "2024-12-07",
      imageUrl: "https://www.shutterstock.com/image-photo/passport-photo-portrait-woman-on-260nw-2438031869.jpg",
      additionalInfo: "Biology",
      status: "Pending",
    },
    {
      id: 8,
      name: "Ali",
      email: "ali@example.com",
      phone: "+919876532345",
      country: "Pakistan",
      university: "Lahore University",
      enrollDate: "2024-12-08",
      imageUrl: "https://us.123rf.com/450wm/nightunter/nightunter2012/nightunter201200414/160793834-portrait-of-handsome-young-businessman-holding-credit-card-over-black-background.jpg?ver=6",
      additionalInfo: "Mathematics",
      status: "Approved",
    },
    {
      id: 9,
      name: "Emma",
      email: "emma@example.com",
      phone: "+917865432109",
      country: "Australia",
      university: "University of Melbourne",
      enrollDate: "2024-12-09",
      imageUrl: "https://5.imimg.com/data5/SELLER/Default/2023/1/MP/FI/PC/181464906/women-formal-blazer-500x500.png",
      additionalInfo: "Engineering",
      status: "Pending",
    },
    {
      id: 10,
      name: "Jake",
      email: "jake@example.com",
      phone: "+919876543789",
      country: "New Zealand",
      university: "Auckland University",
      enrollDate: "2024-12-10",
      imageUrl: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/passport/1-change1.jpg",
      additionalInfo: "Chemistry",
      status: "Approved",
    },
    {
      id: 11,
      name: "Sophia",
      email: "sophia@example.com",
      phone: "+918765432198",
      country: "USA",
      university: "Harvard University",
      enrollDate: "2024-12-11",
      imageUrl: "https://www.azypo.com/wp-hx74pk/wp-content/uploads/2024/02/passport-outfit.jpg",
      additionalInfo: "Medicine",
      status: "Pending",
    },
    {
      id: 12,
      name: "Liam",
      email: "liam@example.com",
      phone: "+919876543210",
      country: "Canada",
      university: "University of Toronto",
      enrollDate: "2024-12-12",
      imageUrl: "https://pics.craiyon.com/2024-09-02/7OcQy__mT_-d4hI54eaXeQ.webp",
      additionalInfo: "Law",
      status: "Approved",
    }
  ];

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleViewDetails = (studentId) => {
    const student = students.find(s => s.id === studentId);
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
    }
  };

  const handleReject = () => {
    if (selectedStudent) {
      selectedStudent.status = "Rejected";
      setSelectedStudent({ ...selectedStudent });
    }
  };

  return (
    <div className="app-container">
      <h1 className="verificationscreen-h1">
        Check Student Enrollment Information
      </h1>

      <div className="student-table-container">
        <table className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Uploaded ID</th>
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
                <td>{student.id}</td>
                <td>
                  <img src={student.imageUrl} alt={student.name} />
                </td>
                <td>{student.name}</td>
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

              <div><strong>Name:</strong> <span>{selectedStudent.name}</span></div>
              <div><strong>Email:</strong> <span>{selectedStudent.email}</span></div>
              <div><strong>Phone:</strong> <span>{selectedStudent.phone}</span></div>
              <div><strong>Country:</strong> <span>{selectedStudent.country}</span></div>
              <div><strong>Enroll Date:</strong> <span>{new Date(selectedStudent.enrollDate).toLocaleDateString()}</span></div>
              <div><strong>Additional Info:</strong> <span>{selectedStudent.additionalInfo}</span></div>

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
