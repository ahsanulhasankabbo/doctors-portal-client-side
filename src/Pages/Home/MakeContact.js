import React from 'react';
import appointment from '../../assets/images/appointment.png'

const MakeContact = () => {
    return (
        <section className='py-16' style={{
            backgroundImage: `url(${appointment})`
        }}>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-semibold'>Contact Us</h3>
                <h1 className='text-3xl text-white mb-5'>Stay connected with us</h1>
            </div>
            <div className='text-center'>
                <input type="text" placeholder="Email Address" className="input input-bordered w-full max-w-xs mb-3" /> <br />
                <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs mb-3" /> <br />
                <input type="text" placeholder="Your Message" className="input input-bordered w-full max-w-xs" />
            </div>
        </section>
    );
};

export default MakeContact;