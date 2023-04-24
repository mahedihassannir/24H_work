import React from 'react';

const Single = ({ data }) => {

    return (
        <div>
            <div className='w-[400px] h-[500px] rounded-lg shadow-lg border-2'>
                <div>
                    <img className='h-[250px] w-full' src={data.img} alt="" />
                    <div className='mt-5 ml-3'>
                        <p className='py-1'>name : {data.name}</p>
                        <p className='py-1'>$: {data.price}</p>
                        <p className='py-1'>seller: {data.seller}</p>
                        <p className='py-1'>stock : {data.stock}</p>
                        <p className='py-1'>ratings : {data.ratings}</p>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Single;