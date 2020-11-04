import React, { useState } from 'react';
import './projectCard.css';
import { Card, Container, Row, Col } from "react-bootstrap";

const ProjectCard = (props) => {
    return (
        <Col className="project_col" sm={12} md={6} lg={4}>
        <Card className={`project_card ${props.className}`}>
            <Card.Body>
                <Container className="card_body" fluid>
                    <Row style={{height: '25%', marginTop: '10px' }}>
                        <Col>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Subtitle className="mb-2">{props.organization}</Card.Subtitle>
                        </Col>
                    </Row>
                    <Row style={{height: '50%' }} className="align-content-center">
                        <Col>
                            <Card.Text>
                                {props.text}
                            </Card.Text>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col>
                            {props.siteUrl &&
                            <a className="card_link" rel="noopener noreferrer" target="_blank" href={props.siteUrl}>Visit Site</a>
                            }
                            <a className="card_link" rel="noopener noreferrer" target="_blank" href={props.githubUrl}>Github</a>
                        </Col>

                    </Row>
                </Container>
            </Card.Body>
       </Card>
        </Col>
    )
}

export default ProjectCard;
