import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './projects.css';

const projects = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <h2 className="projects_title">Projects</h2>
                </Col>
            </Row>
            <Row>
                <Col xs={8}>
                    <h3>Meal Planner</h3>
                    <h4>Grafted Community Church</h4>
                    <p>In August of 2020, I completed a free-lance web designer project for Grafted Community Church based in Minneapolis, MN. I was hired to create a web-based meal planning software for the church to plan large-scale freezer meal shopping and preparation.
                    As the sole developer on the project, I did everything from meet with the client to establish their needs and checked in regularly to ensure progress aligned with their vision, to full design and implementation of the UI & UX.</p>
                    <p>The software is built upon the Angular Framework to create entirely custom templates and components, allowing complex logic to be split up into intuitive and manageable pieces. The newest version of Angular 9 was utilized to take advantage of the Ivy compiler and runtime in order to produce smaller bundle sizes and use Ahead of Time compilation by default - resulting in very fast load times for the client.</p>
                    <p>The application features a robust services architecture used to subscribe to data within the application and communicate between components, as well as bring data in from Google’s Cloud Firestore using RxJS observable sequences. The Angular Router handles swapping of components being rendered to the root page, and prevents unauthorized routing via Route Guards. The application features full user authentication handled through a third-party Firestore-compatible library - <a href="https://ngx-auth-firebaseui.firebaseapp.com/home">NgxAuthFirebaseUI</a>. In addition to utilizing Google's Cloud Firestore to store data, the application also utilizes Local Storage in areas of the application to keep data & shopping cart information saved to individual users</p>
                    <p>The project is currently in CI/CD, with more features to come and be supported as they utilize the application.</p>
                </Col>
                <Col xs="auto">
                    <ul>
                        <h5>Technologies:</h5>
                        <li>HTML 5</li>
                        <li>CSS</li>
                        <li>JavaScript - ES6</li>
                        <li>Angular 9</li>
                        <li>Angular Material</li>
                        <li>Bootstrap 4</li>
                        <li>Google's Cloud Firestore</li>
                        <li>Google's Firebase</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>Landing Page</h3>
                    <h4>Cornerstone Piano School</h4>
                    <p>My most recent project has been creating a landing page and contact form for Cornerstone Piano School, based in Andover, MN. It contains basic information about the piano instructor, as well as information students should be expected to know at different levels of experience, testimonials, and a contact form.</p>
                    <p>The application is built upon the React framework, using both class-based and functional components (using Hooks to manage state) to create a lightweight, responsive UI. The application is fully responsive on all viewports from 280px and up.</p>
                    <p>The contact form on this site is used to email basic contact information to the product owner's email. This is done securely from the client side using a third party library - <a href="https://www.emailjs.com/">EmailJS</a>.</p>
                    <p>The product owner also wanted Google Analytics integrated so they could track user engagement with their site.</p>
                    <ul>
                        <h5>Technologies:</h5>
                        <li>HTML 5</li>
                        <li>CSS</li>
                        <li>JavaScript - ES6</li>
                        <li>React</li>
                        <li>React Hooks</li>
                        <li>Bootstrap 4</li>
                        <li>EmailJS</li>
                        <li>Google Analytics</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default projects;
