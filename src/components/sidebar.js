import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import GroupIcon from '@mui/icons-material/Group';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import StarIcon from '@mui/icons-material/Star';
import RuleIcon from '@mui/icons-material/Gavel';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LoginIcon from '@mui/icons-material/Login';
import SchoolIcon from '@mui/icons-material/School';

const Sidebar = () => {
  const menuItems = [
    { text: 'College Map', icon: <MapIcon />, path: '/college-map' },
    { text: 'Faculty Info', icon: <GroupIcon />, path: '/faculty-info' },
    { text: 'Announcements', icon: <AnnouncementIcon />, path: '/announcements' },
    { text: 'Hall of Fame', icon: <StarIcon />, path: '/hall-of-fame' },
    { text: 'Rules & Regulations', icon: <RuleIcon />, path: '/rules-and-regulations' },
    { text: 'About Us', icon: <InfoIcon />, path: '/about-us' },
    { text: 'Contact Us', icon: <ContactMailIcon />, path: '/contact-us' },
    { text: 'LogOut', icon: <LoginIcon />, path: '/logout' },
    { text: 'Study', icon: <SchoolIcon />, path: '/study' },
    { text: 'Scholarship', icon: <SchoolIcon />, path: '/scholarship'},
  ];

  return (
    <Box
      sx={{
        width: 240,
        height: '100vh',
        backgroundColor: '#121212',
        color: '#fff',
        position: 'fixed',
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={NavLink}
            to={item.path}
            style={{ textDecoration: 'none', color: '#fff' }}
          >
            <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  
  );
};

export default Sidebar;
