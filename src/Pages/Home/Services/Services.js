import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices] =useState([]);
    useEffect(()=>{
        fetch('Services.json')
            .then(res=>res.json())
            .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h1 className="text-primary my-4">Services</h1>
            <Row xs={1} md={2} xl={3} className="g-4">
            {
                services.map(service=><Service 
                    key={services.id}
                    service={service}
                    ></Service>)
            }
            </Row>
        </div>
    );
};

export default Services;