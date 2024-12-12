import React from "react";
import { Typography, Link, Container, Box, Grid } from "@mui/material";
import { Facebook, Twitter, LinkedIn, LocationOn, Email, Phone } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <Box className="footer-container" py={3} color="white">
      <Container maxWidth="lg">

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="footer-heading" gutterBottom>
              University of Dayton
            </Typography>
            <Typography variant="body2" className="footer-item">
              <Phone sx={{ marginRight: 1 }} /> +1 234 567 890
            </Typography>
            <Typography variant="body2" className="footer-item">
              <Email sx={{ marginRight: 1 }} /> contact@universityofdayton.com
            </Typography>
            <Typography variant="body2" className="footer-item">
              <LocationOn sx={{ marginRight: 1 }} /> 300 College Park, Dayton, OH 45469
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="footer-heading" gutterBottom>
              Quick Links
            </Typography>

            <Box>
              <Link
                component={RouterLink}
                to="/about-us"
                color="inherit"
                className="footer-link"
              >
                About Us
              </Link>
              <Link
                component={RouterLink}
                to="/"
                color="inherit"
                className="footer-link"
              >
                Home Page
              </Link>
              <Link
                component={RouterLink}
                to="/college-map"
                color="inherit"
                className="footer-link"
              >
                Campus Life
              </Link>
              <Link
                component={RouterLink}
                to="/announcements"
                color="inherit"
                className="footer-link"
              >
                Events Calendar
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="footer-heading" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <Link href="https://www.facebook.com" color="inherit" className="footer-social-icon">
                <Facebook sx={{ marginRight: 1 }} /> Facebook
              </Link>
              <Link href="https://twitter.com" color="inherit" className="footer-social-icon">
                <Twitter sx={{ marginRight: 1 }} /> Twitter
              </Link>
              <Link href="https://www.linkedin.com" color="inherit" className="footer-social-icon">
                <LinkedIn sx={{ marginRight: 1 }} /> LinkedIn
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Box textAlign="center" mt={4}>
          <Typography variant="body2" color="inherit">
            © {new Date().getFullYear()} University of Dayton. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
