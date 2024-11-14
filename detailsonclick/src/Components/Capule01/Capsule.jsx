import React, { useState } from "react";
import DATABASE from '../DATAB/capsules.json'
import { Button, CardBody, Col, Row, Card, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Capsule.css';


export default function Capsule() {
    const [data] = useState(DATABASE)
    return (
        <>
            <Container fluid>
                <Row>
                    <Link to="/" className='mt-5'>
                        <Button className='back_btn'>
                            <FontAwesomeIcon icon="fa-solid fa-arrow-right"
                                flip="horizontal" style={{ color: "#d6931f", }} className='me-1' />
                            Go Back</Button>
                    </Link>
                    {
                        data.map((product) => (
                            <Col lg={3} key={product.id}>
                                <Card className="my-2">
                                    <CardBody>
                                        <Row>
                                            <Col className="col-8">
                                                {product.serial}
                                            </Col>
                                            <Col className="col-4">
                                                <button className="btn btn-sm btn-primary mb-2 view_btn">
                                                    <Link
                                                        to={`/view/${product.id}`}
                                                        className="text-dark text-decoration-none"
                                                    >
                                                        View
                                                    </Link>
                                                </button>

                                            </Col>
                                        </Row>
                                        <div className='org_bg mt-5 px-1'>
                                            {product.type}
                                        </div>

                                    </CardBody>
                                </Card>

                            </Col>
                        ))}

                </Row>
            </Container>
        </>
    );
}