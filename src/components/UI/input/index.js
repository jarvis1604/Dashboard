import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Input = (props) => {
    return (
        <Form.Group controlId="formBasicEmail">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
            <Form.Text className="text-muted">
                {props.errorMessage}
            </Form.Text>
        </Form.Group>
    )
}

export default Input;