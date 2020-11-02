import React from "react";
import './titleSlide.css';
import { Container, Row, Col } from "react-bootstrap";
import Carousel from '../HeaderCarousel/carousel'

const titleSlide = props => {
    return (
        <Container className="header" fluid>
            <Row>
                <Col>
                    <Carousel className="titleCarousel" />
                </Col>
            </Row>

            <div className="spacer"> </div>
        </Container>
    )
}

export default titleSlide;
