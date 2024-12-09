import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import './HallOfFame.css';
import Footer from '../Footer/Footer';

const HallOfFame = () => {
    const [activeTab, setActiveTab] = useState("student-achievements");

    const renderStudentAchievements = () => {
        return (
            <div className="student-achievements-content">
                <h2>Outstanding Student Achievements</h2>
                <ul>
                    <li>
                        <strong>John Doe:</strong> Awarded the National Mathematics Championship in 2021.
                    </li>
                    <li>
                        <strong>Jane Smith:</strong> Published groundbreaking research on renewable energy technologies.
                    </li>
                    <li>
                        <strong>Michael Brown:</strong> Gold medalist in the International Physics Olympiad.
                    </li>
                    <li>
                        <strong>Emily White:</strong> Represented the university in the World Debate Championship and secured first place.
                    </li>
                    <li>
                        <strong>Team Innovators:</strong> Developed an award-winning app for mental health awareness, recognized by the Global Tech Forum.
                    </li>
                </ul>
                <p>
                    These are just a few examples of how our students continue to inspire and lead in academics, sports, and extracurricular activities.
                </p>
            </div>
        );
    };

    return (
        <div className="hall-of-fame-container">
            <header className="hall-of-fame-header">
                <h1>University Hall of Fame</h1>
                <p>
                    Honoring the achievements and contributions of our students, faculty, and alumni, 
                    and celebrating the milestones that have shaped our university's legacy of excellence.
                </p>
            </header>

            <Tabs
                defaultActiveKey="student-achievements"
                id="hall-of-fame-tabs"
                className="mb-3"
                onSelect={(k) => setActiveTab(k)}
            >
                <Tab eventKey="student-achievements" title="Student Achievements">
                    <div className="tab-content">
                        {activeTab === "student-achievements" && renderStudentAchievements()}
                    </div>
                </Tab>

                <Tab eventKey="faculty-achievements" title="Faculty Achievements">
                    <div className="tab-content">
                        <h2>Faculty Achievements</h2>
                        <p>
                            Our esteemed faculty members are pioneers in research, thought leaders in their fields, 
                            and passionate educators shaping the future.
                        </p>
                    </div>
                </Tab>


                <Tab eventKey="alumni-success" title="Alumni Success Stories">
                    <div className="tab-content">
                        <h2>Alumni Success Stories</h2>
                        <p>
                            Our alumni are changemakers and leaders, making a lasting impact in their careers and communities worldwide.
                        </p>
                    </div>
                </Tab>

                <Tab eventKey="university-ranking" title="University Rankings & Awards">
                    <div className="tab-content">
                        <h2>University Rankings & Awards</h2>
                        <p>
                            Recognized nationally and globally, our university has earned accolades for excellence in education, research, and innovation.
                        </p>
                    </div>
                </Tab>
            </Tabs>
            <Footer/>
        </div>
    );
};

export default HallOfFame;
