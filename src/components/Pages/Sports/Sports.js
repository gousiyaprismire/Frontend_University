import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spin, Row, Col } from "antd";
import {
  TrophyOutlined,
  TeamOutlined,
  CrownOutlined,
  SmileOutlined,
  FlagOutlined,
} from "@ant-design/icons";
import "./Sports.css";

const sportStyles = {
  Soccer: { color: "#3498db", icon: <FlagOutlined /> },
  Cricket: { color: "#27ae60", icon: <TrophyOutlined /> },
  Rugby: { color: "#e74c3c", icon: <TeamOutlined /> },
  Tennis: { color: "#f1c40f", icon: <SmileOutlined /> },
  Golf: { color: "#9b59b6", icon: <CrownOutlined /> },
};

const App = () => {
  const [sportsData, setSportsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("YOUR_SPORTS_API_URL")
      .then((response) => {
        setSportsData(response.data);
        setLoading(false);
      })
      .catch(() => {
        const mockData = [
          {

            name: "Cricket Tournament",
            category: "Cricket",
            date: "2024-12-12",
            location: "UK Grounds",
            image: "https://images.tv9kannada.com/wp-content/uploads/2023/12/test-cricket-6.jpg", 
            description: "Join us for an exciting Cricket Tournament at UK Grounds.",
            
          },
          {
            name: "Soccer Cup",
            category: "Soccer",
            date: "2024-12-10",
            location: "Oxford University",
            image: "https://venturebeat.com/wp-content/uploads/2024/06/UFL-Game-Ronaldo.jpg", 
            description: "Experience the thrill of the Soccer Cup at Oxford University.",
          },
          {
            name: "Rugby Championship",
            category: "Rugby",
            date: "2024-12-15",
            location: "London Stadium",
            image: "https://images.ctfassets.net/uiu4umqyl5b5/4zJKfLWaQvScMWIUfK4qQu/b033b376eb798d133da2a152cd54081a/inpho_02135425.jpg?fm=webp&f=center", 
            description: "Feel the energy at the Rugby Championship in London Stadium.",
          },
          {
            name: " Tennis Tournment",
            category: "Tennis",
            date: "2024-12-20",
            location: "USA Arena",
            image: "https://files.satsportnews.com/Document/Blog/4ac9d682c23c4472a83ff62b2f37c2c2_indiantennisplayers730x371.jpg", 
            description: "Watch the best college players compete at USA Arena.",
          },
          {
            name: "Golf Open",
            category: "Golf",
            date: "2024-12-25",
            location: "Hyderabad Golf Course",
            image: "https://images.ctfassets.net/56u5qdsjym8c/SPzCzheqtbdmSFuksn6al/e59fab16c644c1e92a24dc0df7eab1ce/_FAM8746-Enhanced-NR_copy.jpg", 
            description: "Enjoy a prestigious day at the Golf Open in Hyderabad.",
          },
        ];
        setSportsData(mockData);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <h1>UK University Sports Dashboard</h1>
      {loading ? (
        <Spin size="large" style={{ marginTop: "20px" }} />
      ) : (
        <div className="events-list" style={{ marginTop: 20 }}>
          {sportsData.map((event, index) => (
            <Row
              key={index}
              gutter={[16, 16]}
              className="event-section"
              style={{
                marginBottom: "40px",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderLeft: `5px solid ${sportStyles[event.category]?.color}`,
              }}
            >
              
              {index % 2 === 0 ? (
                <>
                  
                  <Col xs={24} md={12} style={{ paddingRight: "20px" }}>
                    <h2 style={{ color: sportStyles[event.category]?.color }}>
                      {sportStyles[event.category]?.icon} {event.name}
                    </h2>
                    <p>
                      <strong>Description:</strong> {event.description}
                    </p>
                    <p>
                      <strong>Category:</strong> {event.category}
                    </p>
                    <p>
                      <strong>Date:</strong> {event.date}
                    </p>
                    <p>
                      <strong>Location:</strong> {event.location}
                    </p>
                  </Col>
                  
                  <Col xs={24} md={12} style={{ textAlign: "center" }}>
                    <img
                      src={event.image}
                      alt={event.name}
                      style={{
                        width: "100%",
                        maxHeight: "400px",
                        borderRadius: "10px",
                        objectFit: "cover",
                      }}
                    />
                  </Col>
                </>
              ) : (
                <>
                  
                  <Col xs={24} md={12} style={{ textAlign: "center" }}>
                    <img
                      src={event.image}
                      alt={event.name}
                      style={{
                        width: "100%",
                        maxHeight: "400px",
                        borderRadius: "10px",
                        objectFit: "cover",
                      }}
                    />
                  </Col>
                  
                  <Col xs={24} md={12} style={{ paddingLeft: "20px" }}>
                    <h2 style={{ color: sportStyles[event.category]?.color }}>
                      {sportStyles[event.category]?.icon} {event.name}
                    </h2>
                    <p>
                      <strong>Description:</strong> {event.description}
                    </p>
                    <p>
                      <strong>Category:</strong> {event.category}
                    </p>
                    <p>
                      <strong>Date:</strong> {event.date}
                    </p>
                    <p>
                      <strong>Location:</strong> {event.location}
                    </p>
                  </Col>
                </>
              )}
            </Row>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
