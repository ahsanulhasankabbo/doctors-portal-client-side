import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className=" text-xl font-semibold text-secondary">{name}</h2>
                <p>{slots.length } {slots.length> 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                     <label onClick={()=> setTreatment(service)}
                     disabled={slots.length === 0} htmlFor="booking-modal" className="btn bg-gradient-to-r from-secondary to-primary text-white uppercase">Book appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;