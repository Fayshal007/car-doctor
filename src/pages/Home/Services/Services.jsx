import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const  fetchData = async() => {
            const data = await fetch('services.json');
            const res = await data.json();
            setServices(res)
        }
        fetchData()
    }, [])
    return (
        <div>
            <div className='text-center w-1/2 space-y-5 mx-auto mt-5'>
                <h3 className='text-[#FF3811] text-2xl  font-extrabold'>Services</h3>
                <h2 className='text-5xl'>Our Service Area</h2>
                <p className='text-slate-400'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div>
        <h1>s</h1>
                {
                    services.map(service => <ServiceCard
                        key={service.service_id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;