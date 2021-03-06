import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id : 1,
            name : 'Wilson Herry',
            article : '',
            location : 'california',
            image : people1,
        },
        {
            _id : 2,
            name : 'Wilson Herry',
            article : '',
            location : 'california',
            image : people2,
        },
        {
            _id : 3,
            name : 'Wilson Herry',
            article : '',
            location : 'california',
            image : people3,
        },
    ]
    return (
        <section className='my-24'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-xl text-primary font-semibold'>Testimonial</h3>
                    <h1 className='text-3xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;