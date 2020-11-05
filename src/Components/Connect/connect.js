import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import LinkedInPhoto from '../../Assets/linkedin_logo.jpg'
import GithubPhoto from '../../Assets/GitHub-logo.jpg'

import './connect.css';

const connect = () => {
    return (
        <Container name="connect" className="connect">
            <Row>
                <Col>
                    <h2>Connect</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="connect_text">Looking to hire? Have a project you would like to collaborate on? Reach out to me via one of the links below:</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/toby-jorris/"><Image className="connect_logo" src={LinkedInPhoto} thumbnail /></a>
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/tobyjorris"><Image className="connect_logo" src={GithubPhoto} thumbnail /></a>
                </Col>
            </Row>
        </Container>
    )
}

export default connect;
