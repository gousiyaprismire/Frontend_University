import React from 'react';
import { useParams } from 'react-router-dom';
import './StudyDetail.css';

const StudyDetail = () => {
  const { type } = useParams(); 

  const typeDetails = {
    undergraduate: {
      heading: "Undergraduate Programs",
      description: "Undergraduate programs are academic degrees pursued after high school, typically lasting 3–4 years. They include Bachelor’s degrees in a variety of disciplines, such as Arts, Sciences, Engineering, Business, and Social Sciences. These programs provide foundational knowledge, critical thinking skills, and specialized training, preparing students for professional careers or further study.",
    },
    postgraduate: {
      heading: "Postgraduate Programs",
      description: "Postgraduate programs, including Master's degrees, PhDs, and professional diplomas, are advanced academic qualifications pursued after completing an undergraduate degree. These programs focus on specialized knowledge and research in various fields, providing opportunities for career advancement, expertise development, or academic research. They are typically more intensive and offer a deeper understanding of chosen disciplines.",
    },
    studyabroad: {
      heading: "Study Abroad Opportunities",
      description: "Study abroad opportunities enable students to pursue academic programs in foreign countries, offering exposure to different educational systems, cultures, and languages. These programs range from short-term exchanges to full degree courses, providing students with global perspectives, enhancing employability, and fostering international networks for both personal and professional growth.",
    },
    shortcourses: {
      heading: "Short Courses",
      description: "Short courses are focused, time-limited programs designed to help individuals acquire new skills, enhance existing ones, or gain knowledge in specific areas. They typically range from a few days to several months and cater to both personal enrichment and professional development. Short courses are flexible and can be delivered online or in-person.",
    },
  };

  const details = {
    undergraduate: [
      { img: "https://webfiles.amrita.edu/2019/12/rE9oOfim-Elec-3-1384.jpg", 
        title: "Aerospace Engineering", 
        description: "Aerospace Engineering is about designing and building aircraft and spacecraft. Students learn how airplanes and rockets work, studying things like aerodynamics and materials, to help improve flight safety and space exploration." },
      { img: "https://engineering.berkeley.edu/wp-content/uploads/2021/03/ElectricalEngineering.jpg", 
        title: "Electrical Engineering", 
        description: "Electrical Engineering focuses on creating and maintaining electrical systems like power grids and electronics. Students learn how electrical circuits work, how to build electrical systems, and how to use technology to power devices and machines." },
      { img: "https://www.sciencenews.org/wp-content/uploads/2021/01/civil_engineering.jpg", 
        title: "Civil Engineering", 
        description: "Civil Engineering is about designing and building things like bridges, roads, and buildings. Students learn how to plan, create, and maintain structures to ensure they are safe, durable, and efficient for people to use." },
      { img: "https://assets.nature.com/lw800h480/magazine-assets/d41586-021-02740-8.jpg", 
        title: "Mathematics (BSc/MSci)", 
        description: "Mathematics involves studying numbers, shapes, and patterns. Students learn problem-solving skills and techniques that are useful in many fields, like business, technology, and science. The MSci program goes deeper into advanced math topics for those interested in research or higher-level careers." },
      { img: "https://media.istockphoto.com/id/1253648557/photo/architecture-students-at-work.jpg", 
        title: "Accounting and Finance (BSc)", 
        description: "This course teaches how to manage money for businesses and individuals. Students learn about budgeting, taxes, investing, and analyzing financial reports to help businesses make smart financial decisions and stay profitable." },
      { img: "https://images.unsplash.com/photo-1581091870622-2ed8a026f37f", 
        title: "Marketing (BSc)", 
        description: "Marketing is about understanding customer needs and promoting products or services. Students learn how to advertise, do market research, and create marketing strategies to help businesses grow and connect with consumers." },
      { img: "https://cdn.pixabay.com/photo/2017/01/22/19/30/engineer-2006536_960_720.jpg", 
        title: "Environmental Engineering", 
        description: "Environmental Engineering focuses on protecting the environment by finding solutions to pollution and waste problems. Students learn how to create systems for clean water, renewable energy, and managing waste to keep our planet healthy." },
    ],
    postgraduate: [
      { img: "", 
        title: "Medicine and Surgery (MBBS)", 
        description: "The MBBS is a professional degree for students aiming to become doctors. It involves studying human biology, diseases, and treatments, followed by clinical training in hospitals. This program typically lasts 5-6 years and prepares students for a career in medicine, including specializations like surgery, pediatrics, or cardiology." },
      { img: "", 
        title: "Master of Science (MSc)", 
        description: "An MSc is a postgraduate degree focused on scientific and technical fields like biology, engineering, or economics. It combines theory with practical research, providing students with specialized knowledge and skills that are valuable for careers in research, industry, or academia." },
      { img: "", 
        title: "Master of Arts (MA)", 
        description: "An MA is a postgraduate degree in the arts, humanities, or social sciences. Students focus on specialized subjects like history, literature, or philosophy. The program often includes both coursework and research, preparing graduates for careers in education, writing, or research." },
      { img: "",
         title: "Master of Nursing", 
         description: "The Master of Nursing (MNurs) is a postgraduate degree designed to develop advanced nursing skills and leadership in healthcare. It focuses on clinical practice, patient care, and healthcare management. Students can specialize in areas like pediatrics or mental health, preparing them for roles such as nurse practitioner or educator." },
      { img: "",
         title: "Master of Business Administration (MBA)", 
         description: "An MBA is a professional degree aimed at those looking to advance their careers in business or management. It covers topics like leadership, finance, marketing, and strategy, and often includes practical experience or internships. It’s ideal for individuals aiming for senior management roles." },
      { img: "",
         title: "Master of Research (MRes)", 
         description: "An MRes is a postgraduate program focused on research skills and methodology. It is ideal for students wanting to prepare for a PhD or a career that requires in-depth research. The course involves conducting a research project under the guidance of experts in the field." },
      { img: "", 
        title: "Doctor of Philosophy (PhD/DPhil)", 
        description: "A PhD/DPhil is the highest level of academic degree, focused on original research. Students conduct in-depth studies in a specific subject, aiming to contribute new knowledge to their field. It typically takes 3-4 years and involves writing a thesis based on independent research." },
    ],
    studyabroad: [
      { img: "", 
        title: "Studying in the USA", 
        description: "The USA has prestigious universities and diverse programs across various fields. Though tuition fees are high, there are financial aid options and numerous career opportunities, making it a popular choice for international students seeking advanced education." },

      { img: "",
         title: "Studying in Australia",
         description: "Australia offers top-ranked universities and diverse academic programs, especially in business, engineering, and healthcare. English-taught courses, a multicultural environment, and post-study work options make it an attractive choice for international students." },
      { img: "", 
        title: "Studying in Canada",
        description: "Canada is known for its diverse culture and high-quality education. With universities offering strong research programs and English and French courses, it provides international students with a welcoming environment and post-graduation work opportunities." },
      { img: "",
         title: "Studying in Italy", 
         description: "Italy offers rich cultural and academic experiences, especially in arts, design, and engineering. With affordable living and tuition fees, many universities offer English-taught programs, making it a great option for international students." },
      {img: "",
         title: "Studying in France", 
         description: "France provides excellent education in arts, business, and humanities. Many programs are available in English, with affordable tuition and various scholarships, making it an attractive destination for international students." },
      {img: "",
         title: "Studying in Germany", 
         description: "Germany offers high-quality education with low or no tuition fees, especially in engineering and sciences. Many programs are in English, and international students benefit from strong research institutions and numerous scholarships." },
    ],
    shortcourses: [
      { img: "",
        title: "Introduction to Python", 
        description: "This course provides an introduction to Python, one of the most popular programming languages. Students learn basic programming concepts, such as variables, loops, and functions, using Python to build simple projects. It’s ideal for beginners looking to start a career in software development or data science." },
      {img: "",
        title: "Web Development Bootcamp", 
        description: "A Web Development Bootcamp is an intensive, hands-on program that teaches the fundamentals of creating websites and web applications. Students learn HTML, CSS, JavaScript, and popular frameworks, enabling them to build interactive, responsive websites and gain the skills needed to start a career in web development." },
      {img: "",
        title: "Data Science and Machine Learning",
        description: "This course covers the fundamentals of data science, including data analysis, visualization, and statistical methods. It also introduces machine learning algorithms for predictive modeling. Students learn how to extract insights from data and apply machine learning techniques to solve real-world problems." },
      { img: "", 
        title: "Digital Marketing", 
        description: "Digital Marketing teaches strategies for promoting products or services online. Topics include search engine optimization (SEO), social media marketing, content creation, and data analytics. Students learn how to effectively use digital tools to reach and engage customers, driving brand awareness and sales in the digital age." },
      {img: "",
         title: "Advanced Cybersecurity", 
         description: "Advanced Cybersecurity focuses on protecting systems, networks, and data from cyber threats. Topics include ethical hacking, encryption, risk management, and security protocols. This course is ideal for individuals seeking to develop expertise in preventing and mitigating cyber attacks in complex digital environments." },
      { img: "",
         title: "Artificial Intelligence Basics", 
         description: "The Artificial Intelligence Basics course introduces the fundamental concepts of AI, including machine learning, neural networks, and natural language processing. Students learn how AI systems work and explore practical applications in various industries, such as healthcare, robotics, and finance." },
      {img: "",
        title: "Computer Science Fundamentals",
        description: "This course covers the basic principles of computer science, including algorithms, data structures, and programming concepts. It provides foundational knowledge required for further study in computer science and related fields, helping students develop problem-solving and technical skills." },
    ],
  };

  const courseDetails = details[type] || [];
  const typeInfo = typeDetails[type] || {};

  return (
    <div className="study-detail">
      <div className="type-intro">
        <h1 className="type-heading">{typeInfo.heading}</h1>
        <p className="type-description">{typeInfo.description}</p>
      </div>
      {courseDetails.map((course, index) => (
        <div key={index} className={`course-detail ${index % 2 === 0 ? 'left-image' : 'right-image'}`}>
          <div className="image-container">
            <img src={course.img} alt={course.title} className="detail-img" />
          </div>
          <div className="course-content">
            <h2 className="course-title">{course.title}</h2>
            <p className="course-description">{course.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudyDetail;