import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import './about.css';
import AboutGif from '../../Assets/about.gif';

const about = () => {
    return(
        <Container className="about" >
            <Row>
                <Col>
                    <h2 className="about_title">About Me</h2>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs="12" sm={12} md={6} lg={4} className="d-flex align-items-center justify-content-center">
                    <Image src={AboutGif} alt="About Me Gif"/>
                </Col>
                <Col xs="12" sm={12} md={6} lg={5} className="d-flex justify-content-center align-items-center">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr/>
                </Col>
            </Row>
        </Container>
    )
}

export default about;
