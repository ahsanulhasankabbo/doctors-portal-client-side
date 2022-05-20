import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailavleAppointment = ({ date }) => {
    // const [services, setSetvices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');

    const {data : services , isLoading , refetch} = useQuery(['available', formattedDate],()=> fetch(`http://localhost:5000/available?date=${formattedDate}`)
    .then(res => res.json()) )
    
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-xl text-secondary text-center'>Available appointment on : {format(date, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal refetch={refetch} setTreatment={setTreatment} date={date} treatment={treatment}></BookingModal>}
        </div>
    );
};

export default AvailavleAppointment;