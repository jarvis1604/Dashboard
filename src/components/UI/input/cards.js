import React from 'react'
import { Card, Row, Col, ProgressBar } from 'react-bootstrap';
import './../../../styles/home.css';
import moment from 'moment';

const dateDifference = (startTime, endTime) => {
    console.log("Inside function");
    //const difference = moment(endTime, "DD/MM/YYYY HH:mm:ss").diff(moment(startTime, "DD/MM/YYYY HH:mm:ss"));
    //const diff = moment.utc(difference).format("HH:mm:ss");
    const diff = endTime - startTime;
    console.log(diff);
    return diff;
}


const SetupCards = (props) => {
    const data = props.data;
    console.log("Data : ",data);

    // if(data){
    //     const difference = moment(data.deployments[0].endTime, "DD/MM/YYYY HH:mm:ss").diff(moment(data.deployments[0].startTime, "DD/MM/YYYY HH:mm:ss"));
    //     const diff = moment.utc(difference).format("HH:mm:ss");
    //     console.log(diff);
    //     return diff;
    // }
    return (
        <div>
            <Row>
            {
                data && data.map((setupData, index) => 
                <div>
                    <Col sm={3} key={index}>
                    <Card border="secondary" style={{ width: '20rem', margin:'0.5rem' }} >
                    <Card.Header><h5>{setupData.type}</h5></Card.Header>
                    <Card.Body>
                        <Row>
                            <Col sm={7}>Build No.</Col>
                            <Col sm={5}>{setupData.deployments[0].buildnumber}</Col>
                        </Row>
                        <Row>
                            <Col sm={7}>Date: </Col>
                            <Col sm={5}>{setupData.deployments[0].startTime}</Col>
                        </Row>
                        <Row>
                            <Col sm={7}>Installation Mode: </Col>
                            <Col sm={5}>{setupData.deployments[0].installmode}</Col>
                        </Row>
                        <Row>
                            <Col sm={7}>Time Elasped: </Col>
                            {/* <Col sm={5}>{this.dateDifference(setupData.deployments[0].startTime, setupData.deployments[0].endTime)}</Col> */}
                            <Col sm={5}>2021-01-11</Col>
                        </Row>
                        <Row>
                            <Col sm={7}>Current Milestone: </Col>
                            <Col sm={5}>postinstall</Col>
                        </Row>
                        <Row><Col sm={7}>Progress bar: </Col></Row>
                        <ProgressBar animated now={75} />
                    </Card.Body>
                </Card>
                </Col>
                </div>
                )
            }
            </Row>
        </div>
    )
}

export default SetupCards;


