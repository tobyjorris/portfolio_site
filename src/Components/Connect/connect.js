import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import LinkedInPhoto from '../../Assets/linkedin_logo.jpg'
import GithubPhoto from '../../Assets/GitHub-logo.jpg'

import './connect.css';

const connect = () => {
    return (
        <Container name="connect">
            <Row>
                <Col>
                    <h2>Connect</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Looking to hire? Have a project you would like to collaborate on? Reach out to me via one of the links below:</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="connect_logo" src={LinkedInPhoto} thumbnail />
                    <Image className="connect_logo" src={GithubPhoto} thumbnail />
                </Col>
            </Row>
        </Container>
    )
}

export default connect;
