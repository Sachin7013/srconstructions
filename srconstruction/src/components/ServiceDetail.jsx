import React from 'react';
import { useParams } from 'react-router-dom';
import Services from '../utils/Services';

function ServiceDetails({ title, details }) {
    const { name } = useParams(); // Assuming the parameter is 'name' in the route
    const service = Services.find(service => service.title.toLowerCase() === name.toLowerCase());

    if (!service) {
        return <div>Service not found</div>;
    }

    return (
        <div>
            <h2>{service.title}</h2>
            <p>{service.details}</p>
        </div>
    );
}

export default ServiceDetails;
