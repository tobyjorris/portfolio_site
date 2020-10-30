import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './about.css';

const about = () => {
    return(
        <Container className="about" fluid>
            <Row>
                <Col>This will be</Col>
                <Col>The About Me Section</Col>
            </Row>
            <Row>
                <Col>This will be</Col>
                <Col>The About Me Section</Col>
            </Row>
        </Container>
    )
}

export default about;
