import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";  // Import useNavigate

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
      "For students excelling in sports at national or state levels. Includes a monthly stipend.",
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
    benefits: "Partial tuition coverage and also covering living expenses until the course completion.",
    eligibility: "Undergraduate / Postgraduate",
    deadline: "December 15, 2024",
    applyLink: "#"
  },
  {
    id: 6,
    title: "Department-Specific Grant",
    benefits: "Full tuition coverage and course-specific funding provided by university.",
    eligibility: "Undergraduate",
    deadline: "March 21, 2025",
    applyLink: "#"
  },
];

const Scholarship = () => {
  const navigate = useNavigate(); // Hook to use navigation


  const handleApplyNow = () => {
    navigate("/Login"); // Redirects to the Login page
  };

  return (
    <div>
      <div>
        <h2>Inspiring Quotes</h2>
        <p>
          “Education is the passport to the future, for tomorrow belongs to
          those who prepare for it today.” Malcolm X
        </p>
        <p>
          “An investment in knowledge pays the best interest.” Benjamin Franklin
        </p>
      </div>

      {/* Footer Section */}
      <footer className="scholarship-footer">
        <p>Don't miss the chance to apply. Deadlines are approaching!</p>
      </footer>

      <div style={{ padding: "20px", backgroundColor: "#f8f9fa", minHeight: "100vh", textAlign: 'center' }}>
        <h1 variant="h4" align="center" gutterBottom>
          Scholarships at Our University
        </h1>

        <p variant="subtitle1" align="center" gutterBottom>
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
    </div>
  );
};

export default Scholarship;
