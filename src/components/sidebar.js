import React, { useState, useEffect, useRef } from 'react';
import { Menu, Layout } from 'antd';
import {
  MenuOutlined,
  AppstoreOutlined,
  TeamOutlined,
  NotificationOutlined,
  StarOutlined,
  VerifiedOutlined,
  FileProtectOutlined,
  InfoCircleOutlined,
  MailOutlined,
  LogoutOutlined,
  ReadOutlined,
  BankOutlined,
  AppstoreAddOutlined, 
} from '@ant-design/icons'; 
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false); 
  const navigate = useNavigate();
  const sidebarRef = useRef(null); 
  const menuContainerRef = useRef(null); 

  const menuItems = [
    { key: '/Sports', icon: <AppstoreOutlined />, label: 'Sports' },
    { key: '/college-map', icon: <ReadOutlined />, label: 'College Map' },
    { key: '/faculty-info', icon: <TeamOutlined />, label: 'Faculty Info' },
    { key: '/announcements', icon: <NotificationOutlined />, label: 'Announcements' },
    { key: '/hall-of-fame', icon: <StarOutlined />, label: 'Hall of Fame' },
    { key: '/verification-screen', icon: <VerifiedOutlined />, label: 'Verification Screen' },
    { key: '/rules-and-regulations', icon: <FileProtectOutlined />, label: 'Rules & Regulations' },
    // { key: '/about-us', icon: <InfoCircleOutlined />, label: 'About Us' },
    // { key: '/contact-us', icon: <MailOutlined />, label: 'Contact Us' },
    { key: '/study', icon: <ReadOutlined />, label: 'Study' },
    { key: '/scholarship', icon: <BankOutlined />, label: 'Scholarship' },
    { key: '/jobs', icon: <BankOutlined />, label: 'Jobs' },

    { key: '/online-courses', icon: <ReadOutlined />, label: 'Online Courses' },

  ];

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) && 
      menuContainerRef.current && 
      !menuContainerRef.current.contains(event.target)
    ) {
      setExpanded(false); 
    }
  };

  const handleMenuItemClick = (item) => {
    navigate(item.key);
    setExpanded(false); 
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside); 
    };
  }, []);

  return (
    <Sider
      ref={sidebarRef}
      width={expanded ? 260 : 50}  
      style={{
        height: expanded ? '95vh' : '50px',  
        position: 'absolute', 
        top: 0,
        right: 0,  
        background: '#f5f5dc', 
        color: '#000', 
        zIndex: 1000,
        transition: 'width 0.3s ease, height 0.3s ease', 
      }}
    >
      <div
        style={{
          height: '60px',  
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#000', 
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
        onClick={toggleMenu}
      >
        <MenuOutlined style={{ fontSize: '24px' }} />
      </div>
      {expanded && (
        <div ref={menuContainerRef}>
          <Menu
            theme="light" 
            mode="inline"
            items={menuItems}
            onClick={handleMenuItemClick} 
            style={{
              background: '#f5f5dc', 
              color: '#000', 
              marginTop: '16px',
              maxHeight: 'calc(100vh - 70px)', 
              overflow: 'auto', 
            }}
          />
        </div>
      )}
    </Sider>
  );
};

export default Sidebar;
