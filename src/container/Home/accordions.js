import { React, Component } from 'react';
import {  Card, Accordion, Row, Col, ProgressBar } from 'react-bootstrap';
import SetupCards from './../../components/UI/input/cards'
import './../../styles/home.css';
import { setupData } from './../../assets/data';

class AccDropdown extends Component {
    render() {
        const setData = setupData.data.envs;
        console.log(setData);
        return(
            <div className="acc-container">
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                        Click me!
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <SetupCards data={setData}/>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                        Click me!
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            {/* <SetupCards key={key} setupName={data.type}/> */}
                            <SetupCards data={setData}/>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}

export default AccDropdown;