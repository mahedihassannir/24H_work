import React from 'react';
import moment from 'moment';


import Marquee from "react-fast-marquee";
const About = () => {
    return (
        <div>
            <h1 className='text-center mt-5 text-7xl font-bold'>{moment().format('MMMM Do YYYY, h:mm a')}</h1>

            <Marquee className="text-5xl mt-40 h-20">
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default About;