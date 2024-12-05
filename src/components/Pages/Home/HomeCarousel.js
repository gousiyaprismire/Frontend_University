import React from 'react';
import { Carousel, Typography, Button, Layout, Row, Col, Space } from 'antd';
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';
import './HomeCarousel.css';

const { Title, Text } = Typography;
const { Footer } = Layout;

const HomeCarousel = () => {
  const carouselContent = [
    {
      image: '/d.jpg',
      title: 'Welcome to the University Portal',
      description: 'Explore all the resources you need for your academic journey.',
    },
    {
      image: '/s.jpg',
      title: 'Discover Our Campus',
      description: 'Take a tour of our state-of-the-art facilities and vibrant campus life.',
    },
    {
      image: '/g.jpg',
      title: 'Achieve Your Goals',
      description: 'Join hands with our exceptional faculty to reach your dreams.',
    },
    {
      image: '/v.jpg',
      title: 'Innovate and Create',
      description: 'Be a part of groundbreaking research and innovation.',
    },
  ];


  const director = {
    name: 'Dr. Jane Doe',
    position: 'Director of the University',
    bio: 'Dr. Doe has been leading the university with a focus on academic excellence and innovation. With over 20 years in higher education, he has made significant contributions to the growth and success of the university.',
    image: '/prof.jpg', 
  };
  

  return (
    <div>
      <div className="carousel-container">
        <Carousel autoplay>
          {carouselContent.map((item, index) => (
            <div key={index} className="carousel-slide">
              <div className="image-wrapper">
                <img src={item.image} alt={`slide-${index}`} className="carousel-image" />
              </div>
              <div className="carousel-caption">
                <Title level={2} style={{ color: '#fff' }}>{item.title}</Title>
                <Text style={{ color: '#f5f5f5' }}>{item.description}</Text>
                <div style={{ marginTop: '20px' }}>
                  <Button type="primary" size="large">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

     
      <div className="director-section">
        <Title level={2} style={{ textAlign: 'center', margin: '40px 0' }}>
          Meet Our Director
        </Title>
        <Row justify="center">
          <Col span={8} style={{ textAlign: 'center' }}>
            <img src={director.image} alt={director.name} className="director-image" />
            <Title level={4}>{director.name}</Title>
            <Text style={{ display: 'block', fontStyle: 'italic' }}>{director.position}</Text>
            <Text>{director.bio}</Text>
          </Col>
        </Row>
      </div>

      
      <Footer style={{ backgroundColor: '#001529', color: '#fff', padding: '20px 0', marginTop: '50px' }}>
        <Row justify="center" align="middle">
          <Col span={12} style={{ textAlign: 'center' }}>
            <Title level={4} style={{ color: '#fff' }}>
              University Portal
            </Title>
            <Text style={{ color: '#fff' }}>
              A place where your academic journey begins. Stay connected with us to unlock more opportunities.
            </Text>
            <div style={{ marginTop: '20px' }}>
              <Space size="large">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FacebookOutlined style={{ color: '#fff', fontSize: '24px' }} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <TwitterOutlined style={{ color: '#fff', fontSize: '24px' }} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <LinkedinOutlined style={{ color: '#fff', fontSize: '24px' }} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <InstagramOutlined style={{ color: '#fff', fontSize: '24px' }} />
                </a>
              </Space>
            </div>
          </Col>
        </Row>
      </Footer>
    </div>
  );
};

export default HomeCarousel;
