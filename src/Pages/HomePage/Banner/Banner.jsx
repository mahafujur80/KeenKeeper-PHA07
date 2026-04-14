import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div >
            <div className='flex items-center justify-center flex-col space-y-2 py-10'>
                <div className='flex items-center flex-col space-y-2'>
                    <h1 className='font-bold text-3xl text-center'>Friends to keep close in your life</h1>
                    <p className='text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                      <br/>  relationships that matter most.</p>
                </div>
                <div>
                    <button className='btn bg-green-700 text-white'><FaPlus /> Add Friend</button>
                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4  gap-5 pb-10'>
                <div className='flex flex-col items-center justify-center p-5  bg-white rounded-xl'> 
                    <h1 className='font-bold'>8</h1>
                    <p className='text-zinc-500'>Total Friends</p>
                 </div>
                <div className='flex flex-col items-center justify-center p-5 bg-white rounded-xl'> 
                    <h1 className='font-bold'>3</h1>
                    <p className='text-zinc-500'>On Track</p>
                 </div>
                <div className='flex flex-col items-center justify-center p-5 bg-white rounded-xl'>
                    <h1 className='font-bold'>5</h1>
                    <p className='text-zinc-500'>Need Attention</p>
                </div>
                <div className='flex flex-col items-center justify-center p-5 bg-white rounded-xl'>
                    <h1 className='font-bold'>12</h1>
                    <p className='text-zinc-500'>Interaction This Month</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;