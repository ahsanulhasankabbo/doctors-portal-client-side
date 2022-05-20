import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            image: fluoride,
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            image: cavity,
        },
        {
            _id: 3,
            name: 'Teeth Whiteing',
            image: whitening,
        },
    ]
    return (
        <div>
            <div className='text-center my-24'>
                <h3 className='text-primary text-2xl font-semibold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;