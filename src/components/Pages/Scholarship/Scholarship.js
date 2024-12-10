import React from "react";
import Footer from '../Footer/Footer';

import './Scholarship.css';

import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import { Carousel } from "react-bootstrap";  // Import Carousel from react-bootstrap


const scholarships = [
  {
    id: 1,
    title: "Merit-Based Scholarship",
    benefits:
      "Awarded to students with exceptional academic performance. Covers up to 50% of tuition fees.",
    eligibility: "GPA above 3.8",
    deadline: "December 31, 2024",
    applyLink: '#',
  },
  {
    id: 2,
    title: "Need-Based Scholarship",
    benefits:
      "Designed for students who demonstrate financial need. Covers tuition and living expenses.",
    eligibility: "Family income below $50,000/year",
    deadline: "January 15, 2025",
    applyLink: "#",
  },
  {
    id: 3,
    title: "Sports Excellence Scholarship",
    benefits:
      "For students excelling in sports at national or state levels stage participation. Includes a monthly stipend.",
    eligibility: "Participation in national-level events",
    deadline: "November 30, 2024",
    applyLink: "#",
  },
  {
    id: 4,
    title: "International Student Scholarship",
    benefits:
      "Available to international students showing outstanding achievements and leadership skills.",
    eligibility: "Valid international student visa",
    deadline: "February 28, 2025",
    applyLink: "#",
  },
  {
    id: 5,
    title: "Financial Aid Program",
    benefits: "Partial tuition coverage and also covering living expenses until the course completion to the eligible students.",
    eligibility: "Undergraduate / Postgraduate",
    deadline: "December 15, 2024",
    applyLink: "#"
  },
  {
    id: 6,
    title: "Department-Specific Grant",
    benefits: "Full tuition coverage and course-specific funding provided by university to the eligible students.",
    eligibility: "Undergraduate",
    deadline: "March 21, 2025",
    applyLink: "#"
  },
];

const Scholarship = () => {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate("/Login"); 
  };

  return (
    <div>
     
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Scholarships Page!
        </Typography>
      </div>

     
      <div style={{ width: "100%", marginBottom: "20px" }}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/id/1387459837/photo/be-like-a-seed-grow-everyday-inspirational-words-with-nature-background.jpg?s=612x612&w=0&k=20&c=fJSSV9BMhPGuDrQeck0HMV3jWsi1FrgL_R9pOrBoC4I="
              alt="Inspiring Quote 1"
              style={{ width: "80%", height: "500px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.shopify.com/s/files/1/0070/7032/files/einstein.png?v=1706739683"
              alt="Inspiring Quote 2"
              style={{ width: "80%", height: "500px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://static.vecteezy.com/system/resources/previews/008/940/891/non_2x/motivational-and-inspiration-quote-start-each-day-with-a-grateful-heart-free-photo.jpg"
              alt="Inspiring Quote 3"
              style={{ width: "80%", height: "500px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://thumbs.dreamstime.com/z/inspirational-quotes-wallpaper-poster-containing-short-powerful-motivational-words-to-boost-your-day-inspirational-quotes-212187378.jpg"
              alt="Inspiring Quote 4"
              style={{ width: "80%", height: "500px" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div style={{ padding: "20px", backgroundColor: "#f8f9fa", minHeight: "100vh", textAlign: 'center'}}>
        <h1 variant="h4" align="center" gutterBottom>
          Scholarships at Our University
        </h1>

        <p variant="subtitle1"  gutterBottom textAlign="center" align="center">
          Explore various scholarships to support your academic journey.
        </p>
        <Grid container spacing={3} style={{ marginTop: "20px" }}>
          {scholarships.map((scholarship) => (
            <Grid item xs={12} sm={6} md={4} key={scholarship.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {scholarship.title}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {scholarship.benefits}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                    Eligibility: {scholarship.eligibility}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                    Deadline: {scholarship.deadline}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={handleApplyNow} // Trigger handleApplyNow on button click
                    style={{ marginTop: "10px" }}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer/>
    </div>
  );
};

export default Scholarship;
