import React from 'react';
import { Row, Col, Card, Form, FloatingLabel, InputGroup, Button } from 'react-bootstrap';

// components
import PageTitle from '../../components/PageTitle';

const BasicInputElements = () => {
    return (
        <Card>
            <Card.Body>
                <Form className="form-horizontal">
                    <Row>
                        <Col md={6}>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="simpleinput">
                                    Organization Name
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="text" id="simpleinput" defaultValue="Some text value..." />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                    Cause
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Select>
                                        <option>Dummy Option 1</option>
                                        <option>Dummy Option 2</option>
                                        <option>Dummy Option 3</option>
                                        <option>Dummy Option 4</option>
                                        <option>Dummy Option 5</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="simpleinput">
                                   Facebook Page
                                </Form.Label>
                                <Col lg={10}>
                                     <Form.Control type="url" name="url" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="simpleinput">
                                    Instagram Page
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="url" name="url" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="simpleinput">
                                    Website
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="url" name="url" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-email">
                                    Email
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control
                                        type="email"
                                        id="example-email"
                                        name="example-email"
                                        placeholder="Email"
                                    />
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="simpleinput">
                                    POC Name
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="text" id="simpleinput" defaultValue="Some text value..." />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                    POC Number
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="tel" name="tel" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                    Type of Org
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Select>
                                        <option>Dummy Option 1</option>
                                        <option>Dummy Option 2</option>
                                        <option>Dummy Option 3</option>
                                        <option>Dummy Option 4</option>
                                        <option>Dummy Option 5</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-password">
                                    Password
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="password" id="example-password" defaultValue="password" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-password">
                                    Confirm Password
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="password" id="example-password" defaultValue="password" />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="secondary" type="submit">
                        Clear
                    </Button>
                    {' '}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

const BasicForms = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Forms', path: '/' },
                    { label: 'NGO Registration Page', path: '/forms/basic', active: true },
                ]}
                title={'NGO Registration Page'}
            />

            <Row>
                <Col xs={12}>
                    <BasicInputElements />
                </Col>
            </Row>
        </React.Fragment>
    );
};
export default BasicForms;
