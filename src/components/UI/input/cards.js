import React from 'react'
import { Card, Row, Col, ProgressBar } from 'react-bootstrap';
import './../../../styles/home.css';

const SetupCards = (props) => {
    const data = props.data;
    console.log("Data : ",data);
    return (
        <div>
            <Row>
            {
                data && data.map((setupData, index) => 
                <Col sm={4} key={index}>
                    <Card border="secondary" style={{ width: '20rem', margin:'2rem' }} >
                    <Card.Header><h5>{setupData.type}</h5></Card.Header>
                    <Card.Body>
                        <Row>
                            <Col sm={7}>Build No.</Col>
                            <Col sm={5}>12</Col>
                        </Row>
                        <Row>
                            <Col sm={7}>Date: </Col>
                            <Col sm={5}>2021-01-11</Col>
                        </Row>
                        <Row>
                            <Col sm={7}>Installation Mode: </Col>
                            <Col sm={5}>refresh_cd</Col>
                        </Row>
                        <Row>
                            <Col sm={7}>Time Elasped: </Col>
                            <Col sm={5}>11:47:03</Col>
                        </Row>
                        <Row>
                            <Col sm={7}>Current Milestone: </Col>
                            <Col sm={5}>postinstall</Col>
                        </Row>
                        <Row><Col sm={7}>Progress bar: </Col></Row>
                        <ProgressBar animated now={45} />
                    </Card.Body>
                </Card>
                </Col>
                )
            }
            </Row>
        </div>
    )
}

export default SetupCards;


