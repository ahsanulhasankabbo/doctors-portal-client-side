import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppoinmentBanner from './AppoinmentBanner';
import AvailavleAppointment from './AvailavleAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
            <AvailavleAppointment date={date} setDate={setDate}></AvailavleAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;