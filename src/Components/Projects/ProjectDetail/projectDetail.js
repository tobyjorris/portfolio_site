import React from 'react';
import './projectDetail.css';
import {Carousel, Col, Container, Row} from "react-bootstrap";
import MealPlannerPhoto from "../../Assets/meal_planner.png";

const projectDetail = () => {
    return (
        <Container>
        <Container>
            <Row>
                <Col>
                    <h2>Connect With Me</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Please connect with me at on Linked In or my Github</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Carousel className="slider">
                        <Carousel.Item>
                            <Container className="slide">
                                <Row>
                                    <Col>
                                        <Carousel.Caption>
                                            <h3>Grafted Community Church</h3>
                                            <h4>Meal Planner</h4>
                                        </Carousel.Caption>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <img
                                            className="project_photo"
                                            src={MealPlannerPhoto}
                                            alt="First slide"
                                        />
                                    </Col>
                                </Row>
                            </Container>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={MealPlannerPhoto}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={MealPlannerPhoto}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    <Container>
        <Row>
            <Col>
                <h2 className="projects_title">Projects</h2>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <h3>Meal Planner</h3>
                <h4>Grafted Community Church</h4>
            </Col>
        </Row>
        <Row>
            <Col xs={8}>
                <p>In August of 2020, I completed a free-lance web designer project for Grafted Community Church based in Minneapolis, MN. I was hired to create a web-based meal planning software for the church to plan large-scale freezer meal shopping and preparation.
                    As the sole developer on the project, I did everything from meet with the client to establish their needs and checked in regularly to ensure progress aligned with their vision, to full design and implementation of the UI & UX.</p>
                <p>The software is built upon the Angular Framework to create entirely custom templates and components, allowing complex logic to be split up into intuitive and manageable pieces. The newest version of Angular 9 was utilized to take advantage of the Ivy compiler and runtime in order to produce smaller bundle sizes and use Ahead of Time compilation by default - resulting in very fast load times for the client.</p>
                <p>The application features a robust services architecture used to subscribe to data within the application and communicate between components, as well as bring data in from Google’s Cloud Firestore using RxJS observable sequences. The Angular Router handles swapping of components being rendered to the root page, and prevents unauthorized routing via Route Guards. The application features full user authentication handled through a third-party Firestore-compatible library - <a href="https://ngx-auth-firebaseui.firebaseapp.com/home">NgxAuthFirebaseUI</a>. In addition to utilizing Google's Cloud Firestore to store data, the application also utilizes Local Storage in areas of the application to keep data & shopping cart information saved to individual users</p>
                <p>The project is currently in CI/CD, with more features to come and be supported as they utilize the application.</p>
            </Col>
            <Col xs="auto" className="tech_list align-content-center justify-content-center align-self-center">
                <ul className="tech_ul">
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
            </Col>
        </Row>
        <Row>
            <Col xs="auto" className="tech_list align-content-center justify-content-center align-self-center">
                <ul className="tech_ul">
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
            <Col xs={8}>
                <p>My most recent project has been creating a landing page and contact form for Cornerstone Piano School, based in Andover, MN. It contains basic information about the piano instructor, as well as information students should be expected to know at different levels of experience, testimonials, and a contact form.</p>
                <p>The application is built upon the React framework, using both class-based and functional components (using Hooks to manage state) to create a lightweight, responsive UI. The application is fully responsive on all viewports from 280px and up.</p>
                <p>The contact form on this site is used to email basic contact information to the product owner's email. This is done securely from the client side using a third party library - <a href="https://www.emailjs.com/">EmailJS</a>.</p>
                <p>The product owner also wanted Google Analytics integrated so they could track user engagement with their site.</p>
            </Col>
        </Row>
    </Container>
    </Container>
    )
}

export default projectDetail;
