import React, { useState } from 'react';
import './CollegeMap.css';
import library from '../../../images/library1.avif';
import library1 from '../../../images/library4.jpeg';
import library5 from '../../../images/library5.webp';
import library6 from '../../../images/library6.jpg';
import admin1 from '../../../images/administration1.webp';
import admin2 from '../../../images/administration2.jpg';
import admin4 from '../../../images/administration4.jpg';
import admin5 from '../../../images/administration5.jpg';
const CollegeMap = () => {
  const [activeTab, setActiveTab] = useState('library');

  const renderContent = () => {
    switch (activeTab) {
      case 'map':
        return (
          <div className='location-container'>
            <h1>Map</h1>
            <div className='classroom'>
             <h4>College ClassRoom</h4>
             <div className='class-images'>
              <img src='https://www.dgicommunications.com/wp-content/uploads/2023/01/college-classroom-design-ideas.jpg' alt='classroom' style={{ maxWidth: '35%', height: 'auto' }} />
              <img src='https://www.smwllc.com/wp-content/uploads/2020/02/Online-Learning-vs-Classroom-Learning.jpg' alt='classroom' style={{ maxWidth: '50%', height: 'auto' }} />
              <img src='https://bloximages.chicago2.vip.townnews.com/ithaca.com/content/tncms/assets/v3/editorial/0/7d/07d36fb0-c545-11e9-8d29-eba5188ac60d/5d5f4113bd848.image.jpg?resize=1396%2C930' alt='classroom' style={{ maxWidth: '35%', height: 'auto' }} />
             </div>
             <p className='center-text' style={{ fontFamily: 'Roboto' }}>
              Our classrooms are equipped with modern facilities to enhance the learning experience. Each classroom features state-of-the-art technology, including interactive whiteboards, high-speed internet access, and comfortable seating arrangements. These facilities are designed to support a variety of teaching methods and provide a conducive environment for both students and teachers. We are committed to creating an engaging and effective learning atmosphere for all.
             </p>
            </div>
            <div className='playground'>
             <h4>College Ground</h4>
             <div className='ground-images'>
              <img src='https://4.imimg.com/data4/XE/WC/MY-1491310/athletic-track.jpg' alt='playground' style={{ maxWidth: '35%', height: 'auto' }} />
              <img src='https://media.istockphoto.com/id/478500151/photo/sunny-soccer-field.jpg?s=612x612&w=0&k=20&c=LDNAHWzcRG3O0zXQTu_8Jsq1Nnhkp65HWvk2dQbuj9U=' alt='playground' style={{ maxWidth: '35%', height: 'auto' }} />
              <img src='https://www.playspots.in/wp-content/uploads/2021/03/2sw6dvTFgT.jpg' alt='playground' style={{ maxWidth: '35%', height: 'auto' }} />
             </div>
             <p className='center-text' style={{ fontFamily: 'Roboto' }}>
              The college ground is a spacious area for sports and outdoor activities. It provides ample space for students to engage in various sports such as football, cricket, and athletics. The ground is well-maintained and equipped with necessary facilities to support these activities. It also serves as a venue for outdoor events and gatherings, fostering a sense of community and teamwork among students. We encourage everyone to make the most of this wonderful resource.
             </p>
            </div>
            <div className='college-library'>
             <h4>College Library</h4>
             <div className='image-row'>
              <img src='https://cdn.prod.website-files.com/604a97c70aee09eed25ce991/61897a35583a9b51db018d3e_MartinPublicSeating-97560-Importance-School-Library-blogbanner1.jpg' alt='library' style={{ maxWidth: '35%', height: 'auto' }} />
              <img src='https://icam-web.org/wp-content/uploads/2019/07/Library_BB_2019_04_24.jpg' alt='library' style={{ maxWidth: '35%', height: 'auto' }} />
              <img src='https://www.eschoolnews.com/files/2024/09/school-libraries.jpeg' alt='library' style={{ maxWidth: '35%', height: 'auto' }} />
             </div>
             <p className='center-text' style={{ fontFamily: 'Roboto' }}>
              The library houses a vast collection of books and digital resources for students. It offers a wide range of academic texts, journals, and reference materials to support your studies. Additionally, the library provides access to numerous online databases and e-books, ensuring that you have the resources you need at your fingertips. Our dedicated staff is always available to assist you in finding the right materials and making the most of the library’s offerings. We encourage all students to take advantage of these valuable resources.
             </p>
            </div>
            <div className='labs'>
            <h4>College Labs</h4>
            <div className='image-row'>
              <img src='https://cloudswyft.co/wp-content/uploads/2021/11/pexels-photo-267507.jpeg' alt='labs' style={{ maxWidth: '35%', height: 'auto' }} />
              <img src='https://itshelp.aurora.edu/hc/article_attachments/17861367511191' alt='labs' style={{ maxWidth: '35%', height: 'auto' }} />
              <img src='https://t3.ftcdn.net/jpg/06/99/54/86/360_F_699548683_PFzyOp06BDjQU3MTCpAaQTMF8jGvvXZE.jpg' alt='labs' style={{ maxWidth: '28%', height: 'auto' }} />
            </div>
            <p className='center-text' style={{ fontFamily: 'Roboto' }}>
              Our labs are well-equipped for practical experiments and research. Each lab is furnished with the latest equipment and technology to support a wide range of scientific and technical studies. Students have access to high-quality instruments and materials, enabling them to conduct experiments and research projects effectively. Our labs are designed to provide a safe and conducive environment for hands-on learning, fostering innovation and discovery. We encourage all students to utilize these facilities to enhance their practical skills and knowledge.
            </p>
            </div>
            <div className='university-location'>
              <p>The University of Dayton is a private, Catholic research university located in Dayton, Ohio. The campus is situated approximately 2 miles southeast of downtown Dayton, making it easily accessible to city amenities1. The university spans 388 acres and includes a mix of historic buildings and modern facilities2.
               Founded in 1850 by the Society of Mary, the University of Dayton is one of three Marianist universities in the United States and the second-largest private university in Ohio2. The campus is noted for landmarks such as the Immaculate Conception Chapel and the University of Dayton Arena2.
               The university's location offers a blend of urban and suburban environments, providing students with a vibrant community and numerous opportunities for internships, research, and cultural experiences. It's about an hour north of Cincinnati and an hour west of Columbus, making it conveniently situated for students from various parts of Ohio and beyond</p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.9630579153167!3d-37.81410797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d0f0f0f0f0f0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1611811234567!5m2!1sen!2sau"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
                 <div className="library-footer">
                  <p>&copy; 2024 University of Dayton Library. All rights reserved.</p>
                  <p>Contact us: <a href="mailto:library@university.edu">library@university.edu</a> | Phone: (123) 456-7890</p>
                  <p>Follow us on: <a href="https://www.facebook.com/universitylibrary" target="_blank" rel="noopener noreferrer">Facebook</a> | <a href="https://www.twitter.com/universitylibrary" target="_blank" rel="noopener noreferrer">Twitter</a> | <a href="https://www.instagram.com/universitylibrary" target="_blank" rel="noopener noreferrer">Instagram</a></p>
                 </div>
          </div>
        );
      case 'library':
        return (
          <div className='location-container2'>
          <h1>Library</h1>
          <div className='library1'>
            <img src={library} alt='library photo'/>
            <p>The library houses a vast collection of books and digital resources for students. It offers a wide range of academic texts, journals, and reference materials to support your studies. Additionally, the library provides access to numerous online databases and e-books, ensuring that you have the resources you need at your fingertips. Our dedicated staff is always available to assist you in finding the right materials and making the most of the library’s offerings. We encourage all students to take advantage of these valuable resources. The library is designed to cater to the diverse needs of our student body. It features quiet study areas for individual work, as well as group study rooms equipped with collaborative tools and technology. These spaces are perfect for group projects, study sessions, and brainstorming meetings.</p>
          </div>
          <div className='library-craft'>
           <img src='https://b3620413.smushcdn.com/3620413/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-04-at-6.22.48-PM.jpeg-1-scaled.jpg?lossy=2&strip=1&webp=1' alt='library-craft'/>
           <img src='https://mctcrlib.weebly.com/uploads/1/1/3/6/11365926/img-20221110-wa0062_orig.jpg' alt='library-craft'/>
           <img src='https://images.stockcake.com/public/5/b/2/5b2c54c4-145d-464d-934b-2057eae643fd_large/studying-in-library-stockcake.jpg'/>
          </div>
          <div className='library2'>
            <p>For those who prefer a more relaxed environment, the library also includes comfortable seating areas where you can read or work on your laptop. High-speed Wi-Fi is available throughout the library, ensuring you can stay connected and productive. In addition to physical resources, the library's digital collection is extensive. Students can access a variety of e-books, academic journals, and research databases from anywhere on campus. This digital library is continually updated to include the latest publications and research in various fields of study.</p>
            <img src={library1} alt='library photo'/>
          </div>
          <div className='library-imagerow'>
            <img src={library5} alt='photo'/>
            <img src={library6} alt='photo'/>
            <img src='https://www.theasianschool.net/blog/wp-content/uploads/2023/01/Why-School-Library-Is-Important.jpg' alt='photo'/>
          </div>
          <div className='library3'>
            <p>The library also hosts workshops and seminars on research skills, academic writing, and effective study techniques. These sessions are designed to help students make the most of the library's resources and improve their academic performance. Furthermore, the library's online catalog system allows you to search for and reserve books, check availability, and even renew your loans from the comfort of your home. This system is user-friendly and ensures that you can efficiently manage your library activities.</p>
          </div>
          <div className="library-footer">
            <p>&copy; 2024 University of Dayton Library. All rights reserved.</p>
            <p>Contact us: <a href="mailto:library@university.edu">library@university.edu</a> | Phone: (123) 456-7890</p>
            <p>Follow us on: <a href="https://www.facebook.com/universitylibrary" target="_blank" rel="noopener noreferrer">Facebook</a> | <a href="https://www.twitter.com/universitylibrary" target="_blank" rel="noopener noreferrer">Twitter</a> | <a href="https://www.instagram.com/universitylibrary" target="_blank" rel="noopener noreferrer">Instagram</a></p>
          </div>;
        </div>
        );
      case 'administration':
        return (
        <div className='location-container3'>
        <h1>Administration</h1>
         <div className='admin-block'>
            <img src={admin1} alt='admin1' className='admin-img'/>
            <p className='admin-text'>The University of Dayton's administration office is located in St. Mary's Hall on the main campus at 300 College Park, Dayton, Ohio1. This office is central to the university's operations and houses key administrative functions, including the Office of the President, the Board of Trustees, and various executive offices1.The administration office is dedicated to providing leadership and support to the entire university community, ensuring that the University of Dayton continues to thrive as a leading institution of higher education.Additionally, the administration office manages government and regional relations, strategic communications, and campus safety, fostering relationships with officials, maintaining the university's public image, and ensuring a secure environment</p>
        </div>
        <div className='admin-key'>
          <p><strong>Key Functions and Services</strong></p>
            <p><strong>Office of the President:</strong>This office oversees the overall administration of the university, ensuring that the institution's mission and goals are met. It includes the President's Council, which consists of senior administrators who advise on strategic decisions</p>
            <p><strong>Board of Trustees:</strong> The board is responsible for the governance of the university, setting policies, and ensuring the institution's financial health. The board consists of 36 members, including alumni and community leaders</p>
            <p><strong>Government and Regional Relations:</strong> This office fosters relationships with local, state, and federal officials, advocating for the university's interests and facilitating community partnerships</p>
        </div>
        <div className='admin-images'>
            <img src={admin2} alt='admin-photo'/>
            <img src={admin4} alt='admin-photo'/>
            <img src={admin5} alt='admin-photo'/>
        </div>
        <h1 className='admin-contact-info'><strong>Contact Information</strong></h1>
        <div className='admin-contact'>
          <p><strong>Mailing Address:</strong>Office of the President, University of Dayton, 300 College Park, Dayton, OH 45469-1624</p>
          <p><strong>Phone:</strong> (937) 229-4122</p>
          <p><strong>Email:</strong>info@udayton.edu</p>
        </div>
        <div className="library-footer">
            <p>&copy; 2024 University of Dayton Library. All rights reserved.</p>
            <p>Contact us: <a href="mailto:library@university.edu">library@university.edu</a> | Phone: (123) 456-7890</p>
            <p>Follow us on: <a href="https://www.facebook.com/universitylibrary" target="_blank" rel="noopener noreferrer">Facebook</a> | <a href="https://www.twitter.com/universitylibrary" target="_blank" rel="noopener noreferrer">Twitter</a> | <a href="https://www.instagram.com/universitylibrary" target="_blank" rel="noopener noreferrer">Instagram</a></p>
          </div>
        </div>
        );
      case 'medical':
        return(
        <div className='location-container4'>
         <h1>Medical Facilities</h1>
         <div className='medical1'>
          <p>The University of Dayton offers comprehensive medical facilities and services to support the health and well-being of its students, faculty, and staff. These facilities are primarily provided through a partnership with Premier Health, a leading healthcare provider in the Dayton area.</p>
          <p><strong>Premier Health Center on Brown Street</strong></p>
          <div className='medical-images'>
          <img src='https://www.shutterstock.com/image-photo/portrait-doctor-intern-medical-students-600nw-2229076213.jpg'/>
          <img src='https://health.universityofcalifornia.edu/sites/default/files/styles/870x580_3_2_/public/2021-05/1280_YEB1FeWF631.jpg?h=8abcec71&itok=kLZVowYD'/>
          </div>
          <p>Located at 1715 Brown Street, the Premier Health Center is centrally situated near the University of Dayton campus. This facility offers a wide range of medical services, including:</p>
         </div>
         <div className='medical-pics'>
            <img src='https://remarkableohio.org/wp-content/uploads/2022/08/35-57_Dayton_VA_Medical_Center_00-e1659993854212.jpg'/>
            <img src='https://apolloimsr.edu.in/wp-content/themes/twentytwentyone/images/dr.jpg'/>
         </div>
         <div className="library-footer">
            <p>&copy; 2024 University of Dayton Library. All rights reserved.</p>
            <p>Contact us: <a href="mailto:library@university.edu">library@university.edu</a> | Phone: (123) 456-7890</p>
            <p>Follow us on: <a href="https://www.facebook.com/universitylibrary" target="_blank" rel="noopener noreferrer">Facebook</a> | <a href="https://www.twitter.com/universitylibrary" target="_blank" rel="noopener noreferrer">Twitter</a> | <a href="https://www.instagram.com/universitylibrary" target="_blank" rel="noopener noreferrer">Instagram</a></p>
          </div>
        </div>
        );
      case 'parkingarea':
        return (
         <div className='location-container5'>
         <h1>Parking Area</h1>
         <div className='parking'>
          <p className='parking-text'>The University of Dayton provides ample parking facilities to accommodate students, faculty, staff, and visitors. The parking services are managed by the university's Public Safety department, ensuring a well-organized and secure parking environment.</p>
          <p  className='parking-text'><strong>Parking Facilities and Services</strong></p>
          <p  className='parking-text'><strong>Student Parking:</strong>Students can purchase parking permits that allow them to park in designated lots on campus. These permits are available for different zones, ensuring convenient access to academic buildings and residence halls.</p>
          <p  className='parking-text'><strong>Employee Parking:</strong>Faculty and staff have access to specific parking areas with permits tailored to their needs. Employee permits are honored in various lots, including Curran Place, at any time.</p>
          <p  className='parking-text'><strong>Visitor Parking:</strong>Visitors to the University of Dayton must display a valid parking permit during weekdays from 6:00 a.m. to 7:30 p.m. Permits can be obtained online or from the Parking Services office. Special arrangements are available for events and extended visits.</p>
         </div>
         <div className='parking-images'>
          <img src='https://www.taxscan.in/wp-content/uploads/2022/03/Car-Parking-Spaces-Car-Parking-Flat-Members-Short-Term-Assets-ITAT-Taxscan.jpg'/>
          <img src='https://media.istockphoto.com/id/480652712/photo/dealer-new-cars-stock.jpg?s=612x612&w=0&k=20&c=Mzfb5oEeovQblEo160df-xFxfd6dGoLBkqjjDWQbd5E='/>
          <img src= 'https://content.jdmagicbox.com/comp/def_content/two-wheeler-parking-management-services/shutterstock-113452357-two-wheeler-parking-management-services-5-v53r4.jpg'/>
         </div>
         <h1>College Canteen</h1>
         <div className='canteen'>
             <div className='canteen-images'>
              <img src='https://media.istockphoto.com/id/641510086/photo/diverse-teenage-friends-eat-lunch-in-school-cafeteria.jpg?s=612x612&w=0&k=20&c=VvJjvfrnriSHIsHee5uKp66fmaSEWBSD4tcFOtaSdSs=' alt='canteen' style={{ maxWidth: '35%', height: 'auto' }} />
              <img src='https://media.istockphoto.com/id/501834369/photo/teen-boy-and-girl-having-lunch-together-in-school-cafeteria.jpg?s=612x612&w=0&k=20&c=8AAB3Z7VWtZk4IvNNUXNH4T7gHArlevl2L36BNf2P-4=' alt='canteen' style={{ maxWidth: '35%', height: 'auto' }} />
              <img src='https://t3.ftcdn.net/jpg/06/29/07/22/360_F_629072294_l7NgGEUvrQOMJXqn10wpF4HGhrDfETOm.jpg' alt='canteen' style={{ maxWidth: '37%', height: 'auto' }} />
             </div>
             <p className='center-text' style={{ fontFamily: 'Roboto' }}>
              The canteen offers a variety of healthy and delicious food options for students and staff. From fresh salads and sandwiches to hot meals and snacks, there is something for everyone. The menu is designed to cater to diverse dietary needs, including vegetarian and vegan options. The canteen is a great place to relax and enjoy a meal with friends between classes. We strive to provide nutritious and tasty food to keep you energized throughout the day. Come and explore the daily specials and enjoy a pleasant dining experience!
             </p>
         </div>
         <div className="library-footer">
            <p>&copy; 2024 University of Dayton Library. All rights reserved.</p>
            <p>Contact us: <a href="mailto:library@university.edu">library@university.edu</a> | Phone: (123) 456-7890</p>
            <p>Follow us on: <a href="https://www.facebook.com/universitylibrary" target="_blank" rel="noopener noreferrer">Facebook</a> | <a href="https://www.twitter.com/universitylibrary" target="_blank" rel="noopener noreferrer">Twitter</a> | <a href="https://www.instagram.com/universitylibrary" target="_blank" rel="noopener noreferrer">Instagram</a></p>
          </div>
         </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className='nav-tabs'>
        <button onClick={() => setActiveTab('library')}>Library</button>
        <button onClick={() => setActiveTab('administration')}>Administration Office</button>
        <button onClick={() => setActiveTab('medical')}>Medical</button>
        <button onClick={() => setActiveTab('parkingarea')}>Parking Area</button>
        <button onClick={() => setActiveTab('map')}>Map</button>
      </div>
      {renderContent()}
    </div>
  );
};

export default CollegeMap;