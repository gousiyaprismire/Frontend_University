import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Row, Col } from "antd";
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
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    
    axios
      .get("YOUR_SPORTS_API_URL")
      .then((response) => {
        setSportsData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        let data = [
          {
            "name": "Soccer Cup",
            "category": "Soccer",
            "date": "2024-12-10",
            "location": "Oxford University"
          },
          {
            "name": " Cricket Tournament",
            "category": "Cricket",
            "date": "2024-12-12",
            "location": "UK Grounds"
          },
          {
            "name": "Rugby Championship",
            "category": "Rugby",
            "date": "2024-12-15",
            "location": "London Stadium"
          },
          {
            "name": " College Tennis",
            "category": "Tennis",
            "date": "2024-12-20",
            "location": "USA Arena"
          },
          {
            "name": " Golf Open",
            "category": "Golf",
            "date": "2024-12-25",
            "location": "Hyderabad Golf Course"
          }
        ];
        
        setSportsData(data);
        setFilteredData(data);
        console.error("Error fetching sports data:", error);
      });
  }, []);

  const handleFilterChange = (category) => {
    setFilter(category);
    if (category === "All") {
      setFilteredData(sportsData);
    } else {
      const filtered = sportsData.filter(
        (event) => event.category === category
      );
      setFilteredData(filtered);
    }
  };

  return (
    <div className="app">
      <h1>UK University Sports Dashboard</h1>
      <div className="filters">
        {["All", "Soccer", "Cricket", "Rugby", "Tennis", "Golf"].map((sport) => (
          <Button
            key={sport}
            type={filter === sport ? "primary" : "default"}
            onClick={() => handleFilterChange(sport)}
          >
            {sport}
          </Button>
        ))}
      </div>
      <div className="cards-container">
        <Row
          gutter={[16, 16]}
          justify="center"
          style={{ marginTop: 20, width: "100%" }}
        >
          {filteredData.map((event, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <Card
                title={event.name}
                bordered={false}
                style={{
                  borderLeft: `5px solid ${sportStyles[event.category]?.color}`,
                  borderRadius: 10,
                }}
              >
                <div className="card-icon" style={{ fontSize: 40 }}>
                  {sportStyles[event.category]?.icon}
                </div>
                <p>
                  <strong>Category:</strong> {event.category}
                </p>
                <p>
                  <strong>Date:</strong> {event.date}
                </p>
                <p>
                  <strong>Location:</strong> {event.location}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default App;
