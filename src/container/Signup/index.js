import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Layout from '../../components/Layout';
import Input from '../../components/UI/input';

const Signup = () => {
    return (
        <Layout>
            <Container>
                <Row style={{marginTop: '50px'}}>
                    <Col md={{span: 6, offset: 3}}>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <Input 
                                        label="First Name"
                                        placeholder="First Name"
                                        value=""
                                        type="text"
                                        onChange={() => {}}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Input 
                                        label="Last Name"
                                        placeholder="Last Name"
                                        value=""
                                        type="text"
                                        onChange={() => {}}
                                    />
                                </Col>
                            </Row>

                            <Input 
                                label="Email"
                                placeholder="Enter Email"
                                value=""
                                type="text"
                                onChange={() => {}}
                                errorMessage="We'll never share your email with anyone else."
                            />

                            <Input 
                                label="Password"
                                placeholder="Enter Password"
                                value=""
                                type="password"
                                onChange={() => {}}
                            />

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Signup;