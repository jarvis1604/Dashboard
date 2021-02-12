import React from 'react'
import Layout from '../../components/Layout';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import Input from './../../components/UI/input/index';
// import {login} from './../../actions';
// import {useDispatch} from 'react-redux';

const Signin = () => {

    return (
        <Layout>
            <Container>
                <Row style={{marginTop: '50px'}}>
                    <Col md={{span: 6, offset: 3}}>
                        <Form>
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

export default Signin;
