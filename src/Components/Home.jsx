
import React, { useEffect, useState } from 'react';

import Lottie from "lottie-react"

import aname from '../../public/aname.json'
import Single from './single';


const Home = () => {

    let [data1, setData2] = useState([])


    useEffect(() => {
        fetch('http://localhost:7000/catagorism')
        // fetch('https://dulcet-gumdrop-c7ddd1.netlify.app/')
            .then(res => res.json())
            .then(data => setData2(data))

            .catch(err => console.error(err))
    }, [])




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

                <div className=' w-11/12 mx-auto grid grid-cols-3 gap-3'>


                    {data1 &&


                        data1.slice(0,9).map(res => <Single
                            data={res}
                            key={res.id}

                        >

                        </Single>)
                    }

                </div>


            </section>



        </div >
    );
};

export default Home;