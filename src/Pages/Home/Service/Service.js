import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = ({service}) => {
    const {name,id,price,img, description} =service;
    return (
        <div >
                <Col>
                <Card className="bg-info p-3">
                    <Card.Img variant="top" src={img} className="rounded-3"/>
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>{price}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
         
           
        </div>
    );
};

export default Service;