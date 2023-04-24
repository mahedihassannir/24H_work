
import React from 'react';

import Lottie from "lottie-react"

import aname from '../../public/aname.json'


const Home = () => {
    return (
        <div>
            {/* here is banner section */}
            <section className=' '>

                <div className='h-screen px-10 flex items-center'>
                    <div className='w-1/2'>
                        <h1 className='text-7xl font-bold'><span className='text-orange-600'>Hi</span> There</h1>
                        <p className='py-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quod fugiat temporibus reiciendis, adipisci non error repellat est perferendis accusamus.</p>
                        <button className='text-orange-600 hover:bg-pink-200     border-2 py-3 px-7 rounded-md'>
                            Hier us
                        </button>
                    </div>
                    <div className='w-1/2'>
                        <div>

                            <Lottie animationData={aname} />



                        </div>
                    </div>
                </div>


            </section>



        </div>
    );
};

export default Home;