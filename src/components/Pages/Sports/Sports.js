import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spin, Row, Col, Button, Card } from "antd";
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

const SoccerDescription = `Soccer is the world’s most popular ball game in numbers of participants and spectators. Simple in its principal rules and essential equipment, the sport can be played almost anywhere, from official football playing fields (pitches) to gymnasiums, streets, school playgrounds, parks, or beaches. Football’s governing body, the Fédération Internationale de Football Association (FIFA), estimated that at the turn of the 21st century there were approximately 250 million football players and over 1.3 billion people “interested” in football; in 2010 a combined television audience of more than 26 billion watched football’s premier tournament, the quadrennial monthlong World Cup finals.`;

const cricketDescription = `Cricket is a bat-and-ball game played between two teams of eleven players each. It is known for its rich history, especially in the United Kingdom and countries that were part of the British Empire. The game can be played outdoors on a large field or indoors on a smaller field. The objective is to score more runs than the opposition by hitting the ball and running between the wickets or hitting it over the boundary. Cricket matches can last anywhere from a few hours to several days, and they include formats like Test cricket, One Day Internationals, and Twenty20 matches.`;

const rugbyDescription = `Rugby is a full-contact team sport known for its high-energy, physical nature. It involves two teams of 15 players each, who attempt to carry, pass, and kick the ball towards the opposing team's goal area to score points. Rugby is distinguished from American football by its continuous play style without the extensive use of helmets and pads. Popular globally, especially in countries like New Zealand, South Africa, and the UK, rugby comes in several formats, including Rugby Union and Rugby League.`;

const tennisDescription = `Tennis is a racket sport that can be played individually against a single opponent (singles) or between two teams of two players each (doubles). The objective is to hit a rubber ball over a net into the opponent's side of the court. The sport is known for its competitive nature and is played professionally in Grand Slam tournaments like Wimbledon, the US Open, the French Open, and the Australian Open. Tennis courts are made of different surfaces like grass, clay, and hard courts.`;

const golfDescription = `Golf is a club-and-ball sport where players use a club to hit a ball into a series of holes in as few strokes as possible. It is one of the few sports where competitors compete individually rather than as teams. Golf courses vary widely, but they typically feature a number of holes ranging from 9 to 18. The aim is to complete each hole in as few strokes as possible, using a variety of clubs. Golf is known for its emphasis on precision, strategy, and etiquette. Major tournaments include the Masters, the U.S. Open, The Open Championship, and the PGA Championship.`;

const App = () => {
  const [sportsData, setSportsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSport, setSelectedSport] = useState("All");

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
            name: "Tennis Tournament",
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

  const handleSportChange = (sport) => {
    setSelectedSport(sport);
  };

  const filteredSportsData =
    selectedSport === "All"
      ? sportsData
      : sportsData.filter((event) => event.category === selectedSport);

  return (
    <div className="app">
      <h1>UK University Sports Dashboard</h1>
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
  {["All", ...Object.keys(sportStyles)].map((sport) => (
    <Button
      key={sport}
      type="default"
      onClick={() => handleSportChange(sport)}
      style={{
        backgroundColor: "transparent", 
        borderColor: selectedSport === sport ? sportStyles[sport]?.color || "#ccc" : "#ccc",
        color: selectedSport === sport ? sportStyles[sport]?.color || "#000" : "#000",
      }}
    >
      {sport}
    </Button>
  ))}
</div>


      {loading ? (
        <Spin size="large" style={{ marginTop: "20px" }} />
      ) : (
        <div className="events-list" style={{ marginTop: 20 }}>
        {selectedSport === "Soccer" && (
      <Card
      style={{
        marginTop: "20px",
        padding: "20px",
        borderRadius: "20px",
     
        backgroundColor: "transparent", 
      }}
    >
      <h2 style={{ color: sportStyles.Soccer.color }}>About Soccer</h2>
      <p>{SoccerDescription}</p>
    </Card>
    
      )}

{selectedSport === "Cricket" && (
        <Card
        style={{
          marginTop: "20px",
          padding: "20px",
          borderRadius: "20px",
       
          backgroundColor: "transparent", 
        }}
        >
          <h2 style={{ color: sportStyles.Cricket.color }}>About Cricket</h2>
          <p>{cricketDescription}</p>
        </Card>
      )}
      {selectedSport === "Rugby" && (
        <Card
        style={{
          marginTop: "20px",
          padding: "20px",
          borderRadius: "20px",
       
          backgroundColor: "transparent", 
        }}
        >
          <h2 style={{ color: sportStyles.Rugby.color }}>About Rugby</h2>
          <p>{rugbyDescription}</p>
        </Card>
      )}
      {selectedSport === "Tennis" && (
        <Card
        style={{
          marginTop: "20px",
          padding: "20px",
          borderRadius: "20px",
       
          backgroundColor: "transparent", 
        }}
        >
          <h2 style={{ color: sportStyles.Tennis.color }}>About Tennis</h2>
          <p>{tennisDescription}</p>
        </Card>
      )}
      {selectedSport === "Golf" && (
        <Card
        style={{
          marginTop: "20px",
          padding: "20px",
          borderRadius: "20px",
       
          backgroundColor: "transparent", 
        }}
        >
          <h2 style={{ color: sportStyles.Golf.color }}>About Golf</h2>
          <p>{golfDescription}</p>
        </Card>
      )}
          {filteredSportsData.map((event, index) => (
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
                        maxHeight: "300px",
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
                        maxHeight: "300px",
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
      <footer
  style={{
    textAlign: "center",
    padding: "10px",
    borderTop: "1px solid #ccc",
    backgroundColor: "#2c3e50", 
    color: "#ecf0f1",         
  }}
>
  <small>
    © 2024 UK University Sports | Terms | Privacy | Security | Status | Docs | Contact | Manage cookies 
  </small>
</footer>

    </div>
  );
};

export default App;
