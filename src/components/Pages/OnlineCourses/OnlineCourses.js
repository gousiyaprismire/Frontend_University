import React from 'react';
import './OnlineCourses.css'; 
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom'; 

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
    
    },
    {
      id: 2,
      title: "Data Structures and Algorithms",
      description: "Master key data structures and algorithms used in software development.",
      image: "https://e1.pxfuel.com/desktop-wallpaper/478/924/desktop-wallpaper-abstract-technology-on-dog-white-tech.jpg",
      duration: "8 weeks",
      instructor: "Prof. Jane Smith",
      rating: 4.7,
     
    },
    {
      id: 3,
      title: "Web Development with React",
      description: "Learn to build modern web applications using React.js.",
      image: "https://images8.alphacoders.com/137/1372179.jpeg",
      duration: "5 weeks",
      instructor: "Dr. Michael Lee",
      rating: 4.8,
  
    },
    {
      id: 4,
      title: "Machine Learning Basics",
      description: "Understand the fundamentals of machine learning.",
      image: "https://img.freepik.com/premium-photo/3d-rendering-robot-learning-machine-learning-with-education-hud-interface_493806-5980.jpg",
      duration: "10 weeks",
      instructor: "Prof. Sarah Connor",
      rating: 4.9,
    
    },
    {
      id: 5,
      title: "Artificial Intelligence",
      description: "Dive into AI concepts and their real-world applications.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvw5YMOt0q6WtWdXa2SCzDMyJyDF70xXl2IQ&s",
      duration: "8 weeks",
      instructor: "Dr. Alan Turing",
      rating: 4.6,
      
    },
    {
      id: 6,
      title: "Cybersecurity Essentials",
      description: "Learn the fundamentals of cybersecurity and network protection.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS586JmMDdnUViCxv-pVyvdyPu_073VdB_Gzg&s",
      duration: "12 weeks",
      instructor: "Prof. Mark Zuckerberg",
      rating: 4.7,
      
    },
    {
      id: 7,
      title: "Blockchain Technology",
      description: "Explore the world of blockchain and how it is transforming industries.",
      image: "https://t3.ftcdn.net/jpg/01/96/96/86/360_F_196968684_zp8obttcJzlY4tWhFHzDGOTbPkdY0Q3p.jpg",
      duration: "6 weeks",
      instructor: "Prof. Chris Nolan",
      rating: 4.8,
      
    },
    {
      id: 8,
      title: "Cloud Computing Fundamentals",
      description: "Learn about cloud services, deployment models",
      image: "https://img.freepik.com/premium-photo/cloud-computing-concept_445983-2121.jpg",
      duration: "10 weeks",
      instructor: "Dr. Jeff Bezos",
      rating: 4.9,
    
    },
    {
      id: 9,
      title: "Digital Marketing Strategies",
      description: "Master the techniques of digital marketing for business growth.",
      image: "https://img.freepik.com/premium-vector/digital-marketing-technology-concept-virtual-screen-robotic-hand-touching-digital-interface_127544-390.jpg?semt=ais_hybrid",
      duration: "8 weeks",
      instructor: "Prof. Gary Vaynerchuk",
      rating: 4.5,
      
    },
    {
      id: 10,
      title: "Game Development with Unity",
      description: "Learn how to build interactive 2D and 3D games using Unity.",
      image: "https://img-c.udemycdn.com/course/750x422/4039334_8373_2.jpg",
      duration: "8 weeks",
      instructor: "Dr. Lara Croft",
      rating: 4.6,
   
    },
    {
      id: 11,
      title: "Quantum Computing",
      description: "Explore the fundamentals of quantum computing and its potential applications.",
      image: "https://informationage-production.s3.amazonaws.com/uploads/2024/09/GettyImages-2156615862.jpg",
      duration: "12 weeks",
      instructor: "Prof. Richard Feynman",
      rating: 4.8,
     
    },
    {
      id: 12,
      title: "Advanced Python Programming",
      description: "Master advanced Python concepts for data science and web development.",
      image: "https://djgeqya1wekbj.cloudfront.net/product-images/600-600/Python-Advanced-L4---1200x600.jpg.webp",
      duration: "8 weeks",
      instructor: "Dr. Ada Lovelace",
      rating: 4.7,
      
    },
    {
      id: 13,
      title: "Robotics Engineering",
      description: "Learn how to design and build robots for real-world applications.",
      image: "https://blog-assets.3ds.com/uploads/2023/12/robotics-ai-delmia-1istock-1654943682-1024x576.jpg",
      duration: "12 weeks",
      instructor: "Prof. Nikola Tesla",
      rating: 4.9,
      
    },
    {
      id: 14,
      title: "UX/UI Design Fundamentals",
      description: "Understand the principles of user experience and interface design.",
      image: "https://png.pngtree.com/thumb_back/fh260/background/20231002/pngtree-illustration-of-a-3d-render-showcasing-a-concept-of-web-ui-image_13584942.png",
      duration: "6 weeks",
      instructor: "Prof. Steve Jobs",
      rating: 4.8,
     
    },
    {
      id: 15,
      title: "Introduction to Augmented Reality",
      description: "Learn how augmented reality is changing the tech industry.",
      image: "https://media.licdn.com/dms/image/v2/D4D12AQGfzeFkMwFX0w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1713868588181?e=2147483647&v=beta&t=0enrQwP2Qt3OgDrUyvzOyqMqU9aAeAUEZaiRLAKzwQs",
      duration: "8 weeks",
      instructor: "Dr. Mark Zuckerberg",
      rating: 4.7,
      
    }
  ];

  return (
    <div className="online-courses-container">
      <h2 className="online-courses-title">Available Online Courses</h2>
      <div className="course-list">
        {courses.map((course) => (
          <div key={course.id} className="course-item">
            <img className="course-image" src={course.image} alt={course.title} />
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <p className="course-duration"><strong>Duration:</strong> {course.duration}</p>
            <p className="course-instructor"><strong>Instructor:</strong> {course.instructor}</p>
            <p className="course-rating"><strong>Rating:</strong> {course.rating} ★ </p>
            <Link to="/login" className="course-link">Enroll Now</Link>
            </div>
        ))}
      </div>
      
      <Footer/>
    </div>
    
 

  );
};

export default OnlineCourses;






