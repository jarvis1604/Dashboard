import { React, Component } from 'react';
import {  Card, Accordion, Row, Col, ProgressBar } from 'react-bootstrap';
import SetupCards from './../../components/UI/input/cards'
import './../../styles/home.css';
import { setupData } from './../../assets/data';

class AccDropdown extends Component {
    render() {
        const setData = setupData.data.envs;
        console.log(setData);

        //finding distinct values
        const unique = [...new Set(setData.map(item => item.type))];
        console.log('Unique Setups: ', unique);

        return(
            <div className="acc-container">
                <Accordion defaultActiveKey="0">
                    {
                        unique && unique.map((item, index) => 
                        <Card className="acc-body" key={index}>
                            <Accordion.Toggle as={Card.Header} eventKey={index+1}>
                            {item}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={index+1}>
                                <div style={{padding:'2rem 0'}}>
                                    <SetupCards data={setData.filter(data => data.type == item)} />
                                </div>
                                
                            </Accordion.Collapse>
                        </Card>
                        )
                    }


                    {/* <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                        Click me!
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <SetupCards data={setData}/>
                        </Accordion.Collapse>
                    </Card> */}
                </Accordion>
            </div>
        )
    }
}

export default AccDropdown;