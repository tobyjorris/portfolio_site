import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import './about.css';
import AboutGif from '../../Assets/about.gif';

const about = () => {
    return(
        <Container name="about" className="about" >
            <Row>
                <Col>
                    <h2 className="about_title">About Me</h2>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs="12" sm={12} md={6} lg={4} className="d-flex align-items-center justify-content-center">
                    <Image className="gif" src={AboutGif} alt="About Me Gif"/>
                </Col>
                <Col xs="12" sm={12} md={6} lg={5} className="d-flex justify-content-center align-items-center">
                    <p className="about_text">I'm a driven, proven, self-motivated web developer and experienced retail manager with more than nine years of management
                        experience and excellent communication and people skills looking to leverage a rich background in logical and outside-the-box problem solving into a web development position. I'm passionate about building high quality front-end components, and love the challenge of handling complex data manipulation. </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr className="hr hr-about"/>
                </Col>
            </Row>
        </Container>
    )
}

export default about;
