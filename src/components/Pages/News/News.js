import React from 'react';
import { Link } from 'react-router-dom';
import './News.css'; 

const newsItems = [
  {
    image: "https://uknow.uky.edu/sites/default/files/styles/uknow_story_image/public/181214Graduation655%20%281%29.JPG",
    date: "01 Jan 2023",
    event: "Annual Day",
    passage: "This is a brief passage about the event. The graduation ceremony was a momentous occasion, celebrating the achievements of students.",
    link: "/annual-day",
  },
  {
    image: "https://media.istockphoto.com/id/1420057741/photo/victory-is-ours.jpg?s=612x612&w=0&k=20&c=-RI_q9aFxEW4B0aBOgmN0qpt4AW2BJ3MVzhELZdir6I=",
    date: "02 Feb 2022",
    event: "Celebrating Women in Sports",
    passage: "This event focused on celebrating the incredible achievements of women in sports.",
    link: "/celebrating-women-in-sports",
  },
  {
    image: "https://www.onrec.com/sites/onrec/directory/files/Picture1_29.jpg", 
    date: "03 Mar 2022",
    event: "Sports and Wellness",
    passage: "The Sports and Wellness event promoted healthy living and physical fitness. Participants enjoyed a variety of activities.",
    link: "/sports-and-wellness",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO2SjjhGNdqTv5C-6ALOAdle_WrXq8e3qCVg&s",
    date: "04 Apr 2023",
    event: "Gym Opening",
    passage: "The grand opening of the new gym facility was celebrated with much enthusiasm. The gym offers a wide range of equipment and amenities to cater to fitness enthusiasts of all levels.",
    link: "/gym-opening",
  },
];

const News = () => {
  return (
    <div className="news-section">
      <hr className="dim-line" />
  
      {newsItems.map((item, index) => (
        <div key={index} className="news-container">
          <div className="news-item">
            <img src={item.image} alt="News" className="news-image" />
            <div className="news-content">
              <p className="news-date">{item.date}</p>
              <p className="news-event">
                <Link to={item.link} className="event-link">{item.event}</Link>
              </p>
              <p className="news-passage">{item.passage}</p>
            </div>
          </div>
          <hr className="dim-line" />
        </div>
      ))}

    </div>
  );
};

export default News;
