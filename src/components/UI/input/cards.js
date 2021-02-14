import React, { useState } from 'react'
import { Card, Row, Col, ProgressBar } from 'react-bootstrap';
import './../../../styles/home.css';
import moment from 'moment';




const SetupCards = (props) => {
    const data = props.data;
    
    const dateTimeDifference = (datetime) => {
        console.log("Inside Date Time");
        var arr = moment.utc(moment(datetime.endTime, "DD/MM/YYYY HH:mm:ss").diff(moment(datetime.startTime, "DD/MM/YYYY HH:mm:ss"))).format("DD HH:mm:ss").split(" ");
        const DT = arr[0] - 1 + " days, " + arr[1];
        return DT;
    }

    const findMilestone = (milestonesArr) => {
        var index = 0;
        for(let i=0; i < milestonesArr.length; i++){
            if(milestonesArr[i].status == 'not started'){
                index = i;
            } else if(milestonesArr[i].status == 'inprogress'){
                index = i;
                break;
            } else {
                index = i;
            }
        }
        return milestonesArr[index].name;
    }

    const calculatePercent = (milestonesArr) => {
        console.log(milestonesArr);
        var count = 0;
        for(let i=0; i < milestonesArr.length; i++){
            console.log(milestonesArr[i].name);
            if(milestonesArr[i].status == 'completed'){
                count++;
            }
        }
        console.log("Count :", count);
        const progress = (count/milestonesArr.length)*100;
        return progress;
    }

    

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
                            <Col sm={6} className="label">Build No.</Col>
                            <Col sm={6}>{setupData.deployments[0].buildnumber}</Col>
                        </Row>
                        <Row>
                            <Col sm={6} className="label">Date: </Col>
                            <Col sm={6}>{moment(setupData.deployments[0].startTime).format('DD-MM-YYYY')}</Col>
                        </Row>
                        <Row>
                            <Col sm={6} className="label">Installn. Mode: </Col>
                            <Col sm={6}>{setupData.deployments[0].installmode}</Col>
                        </Row>
                        <Row>
                            <Col sm={6} className="label">Time Elasped: </Col>
                            <Col sm={6}>{dateTimeDifference(setupData.deployments[0])}</Col>
                        </Row>
                        <Row>
                            <Col sm={6} className="label">Curr. Milestone: </Col>
                            <Col sm={6}>{findMilestone(setupData.deployments[0].milestones)}</Col>
                        </Row>
                        <Row><Col sm={6} className="label">Progress bar: </Col></Row>
                        <ProgressBar animated now={calculatePercent(setupData.deployments[0].milestones)} />
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


