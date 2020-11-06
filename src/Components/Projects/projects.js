import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard/projectCard";
import './projects.css';

const projects = () => {
    return(
        <Container name="projects" className="projects" >
            <Row className="justify-content-xs-center">
                <Col>
                    <h2 className="project_title">Projects</h2>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <ProjectCard className="piano"
                             title="Landing Page"
                             organization="Cornerstone Piano School"
                             text="React / EmailJS / Google Analytics"
                             siteUrl="http://www.cornerstonepiano.com"
                             githubUrl="https://github.com/tobyjorris/Cornerstone_Piano_School"/>
                <ProjectCard className="meal"
                             title="Meal Planner"
                             organization="Grafted Community Church"
                             text="Angular 9 / Cloud Firestore"
                             siteUrl="http://gccmealplanner.com"
                             githubUrl="https://github.com/tobyjorris/GCC-Meal-Planner"/>
                <ProjectCard className="trip"
                             title="Travel Planner"
                             organization="Capstone - Udacity"
                             text="ES6 / Node / Express"
                             githubUrl="https://github.com/tobyjorris/travel-planner"/>
                <ProjectCard className="weather"
                             title="Weather Journal"
                             organization="Demo Project"
                             text="ES6 / Node / Express"
                             githubUrl="https://github.com/tobyjorris/weather-journal"/>
                <ProjectCard className="burger"
                             title="Burger Builder"
                             organization="Demo Project"
                             text="React / Redux"
                             githubUrl="https://github.com/tobyjorris/Udemy-React"/>
            </Row>
            <Row>
                <Col>
                    <hr className="hr project_hr"/>
                </Col>
            </Row>
        </Container>
    )
}

export default projects;


