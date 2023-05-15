import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row sm:flex-col">
                    <div className='lg:w-1/2 relative'>
                        <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={parts} className="w-1/2 rounded-lg absolute right-14 top-1/2 border-8 border-white" />
                    </div>
                    <div className='lg:w-1/2 sm:mt-14 space-y-5'>
                        <h1 className='text-[#FF3811] text-3xl mb-3 font-extrabold' >About us</h1>
                        <p className="text-5xl font-semibold">We are qualified & of experience in this field</p>
                        <p className='text-slate-400 ml-10'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br /> <br /> the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <button className="btn mr-5 bg-[#FF3811] border-[#FF3811] hover:bg-[#cf2f0f] hover:border-[#FF3811]">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;