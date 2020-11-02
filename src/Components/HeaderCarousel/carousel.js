import React from 'react';
import { Container, Col, Row } from "react-bootstrap";
import './carousel.css'

const carousel = () => {
    return(
        <Container className="wordCarousel">
            <Row className="carouselRow justify-content-start">
                <Col className="carouselCol" xs={12} sm={4} md={3} lg={3} xl={{span: 3, offset: 2}}>
                    <span>Hi, I'm Toby: </span>
                </Col>
                <Col className="secondCol" xs={12} sm="auto" md="auto" lg="auto" xl="auto">
                    <div className="wordCarouselDiv">
                        <ul className="flip4">
                            <li>Developer</li>
                            <li>Self Learning</li>
                            <li>Driven</li>
                            <li>Personable</li>
                        </ul>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default carousel;
