import React from 'react';
import './OnlineCourses.css'; 

const OnlineCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Introduction to Computer Science",
      description: "Learn the basics of programming and computer science.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLHhPbqmAdxNJxbzBVa7oxNowuslQ7nBer6Q&s",
      duration: "6 weeks",
      instructor: "Dr. John Doe",
      rating: 4.5,
      link: "/courses/computer-science"
    },
    {
      id: 2,
      title: "Data Structures and Algorithms",
      description: "Master key data structures and algorithms used in software development.",
      image: "https://e1.pxfuel.com/desktop-wallpaper/478/924/desktop-wallpaper-abstract-technology-on-dog-white-tech.jpg",
      duration: "8 weeks",
      instructor: "Prof. Jane Smith",
      rating: 4.7,
      link: "/courses/data-structures"
    },
    {
      id: 3,
      title: "Web Development with React",
      description: "Learn to build modern web applications using React.js.",
      image: "https://images8.alphacoders.com/137/1372179.jpeg",
      duration: "5 weeks",
      instructor: "Dr. Michael Lee",
      rating: 4.8,
      link: "/courses/react-web-development"
    },
    {
      id: 4,
      title: "Machine Learning Basics",
      description: "Understand the fundamentals of machine learning.",
      image: "https://img.freepik.com/premium-photo/3d-rendering-robot-learning-machine-learning-with-education-hud-interface_493806-5980.jpg",
      duration: "10 weeks",
      instructor: "Prof. Sarah Connor",
      rating: 4.9,
      link: "/courses/machine-learning"
    },
    {
      id: 5,
      title: "Artificial Intelligence for Beginners",
      description: "Dive into AI concepts and their real-world applications.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvw5YMOt0q6WtWdXa2SCzDMyJyDF70xXl2IQ&s",
      duration: "8 weeks",
      instructor: "Dr. Alan Turing",
      rating: 4.6,
      link: "/courses/ai-for-beginners"
    },
    {
      id: 6,
      title: "Cybersecurity Essentials",
      description: "Learn the fundamentals of cybersecurity and network protection.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS586JmMDdnUViCxv-pVyvdyPu_073VdB_Gzg&s",
      duration: "12 weeks",
      instructor: "Prof. Mark Zuckerberg",
      rating: 4.7,
      link: "/courses/cybersecurity-essentials"
    },
    {
      id: 7,
      title: "Blockchain Technology",
      description: "Explore the world of blockchain and how it is transforming industries.",
      image: "https://t3.ftcdn.net/jpg/01/96/96/86/360_F_196968684_zp8obttcJzlY4tWhFHzDGOTbPkdY0Q3p.jpg",
      duration: "6 weeks",
      instructor: "Prof. Chris Nolan",
      rating: 4.8,
      link: "/courses/blockchain"
    },
    {
      id: 8,
      title: "Cloud Computing Fundamentals",
      description: "Learn about cloud services, deployment models, and cloud architecture.",
      image: "https://img.freepik.com/premium-photo/cloud-computing-concept_445983-2121.jpg",
      duration: "10 weeks",
      instructor: "Dr. Jeff Bezos",
      rating: 4.9,
      link: "/courses/cloud-computing"
    },
    {
      id: 9,
      title: "Digital Marketing Strategies",
      description: "Master the techniques of digital marketing for business growth.",
      image: "https://img.freepik.com/premium-vector/digital-marketing-technology-concept-virtual-screen-robotic-hand-touching-digital-interface_127544-390.jpg?semt=ais_hybrid",
      duration: "8 weeks",
      instructor: "Prof. Gary Vaynerchuk",
      rating: 4.5,
      link: "/courses/digital-marketing"
    }
  ];

  return (
    <div className="online-courses-container">
      <h2 className="online-courses-title">Available Online Courses</h2>
      <div className="course-list">
        {courses.map((course) => (
          <div key={course.id} className="course-item">
            <img className="course-image" src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Rating:</strong> {course.rating} ★</p>
            <a href={course.link} className="course-link">Enroll Now</a>
          </div>
        ))}
      </div>
    </div>

  );
};

export default OnlineCourses;
