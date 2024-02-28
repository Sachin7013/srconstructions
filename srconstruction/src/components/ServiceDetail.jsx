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
        <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{service.title}</h2>
            <p className="mt-4 text-gray-500">
              {service.details}
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {service.subtopics.map((feature) => (
                <div key={feature.title} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.title}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="">
            <img
              src={service.image}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100 h-full"
            />
          </div>
        </div>
      </div>
    );
}

export default ServiceDetails;
