import React from 'react';

const ServiceCard = ({ service }) => {
    const { title, id, img, price } = service
    return (
        <div className="card bg-base-100 shadow-xl ">
            <figure className='h-72'><img src={img} alt="Shoes" className='object-cover w-full h-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-[#FF3811] text-xl'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-[#FF3811] border-[#FF3811] hover:bg-[#cf2f0f] hover:border-[#FF3811]">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;