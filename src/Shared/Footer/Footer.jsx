import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='bg-green-800 py-10'>
            <div className=' max-w-[80%] mx-auto flex flex-col justify-center items-center space-y-3'>
              <div className='flex flex-col  items-center space-y-2'>
              <div>
                  <h1 className=' text-white font-bold text-4xl'>KeenKeeper</h1>
              </div>
                <p className='text-zinc-300 text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
              </div>
              <div className='flex flex-col items-center space-y-2 mb-5'>
                <h2 className='font-bold text-white text-2xl'>Social Links</h2>
                <div className='flex text-white items-center gap-4'>
                    <a className='text-xl hover:scale-110 p-1 bg-white rounded-full text-black'><FaFacebook/></a>
                    <a className='text-xl hover:scale-110 p-1 bg-white rounded-full text-black'><FaInstagram/></a>
                    <a className='text-xl hover:scale-110 p-1 bg-white rounded-full text-black'><FaXTwitter/></a>
                </div>
              </div>
            </div>  
            <div className='max-w-[80%] mx-auto h-px bg-gray-500 my-5'></div>
            <div className=' max-w-[80%] mx-auto flex max-md:flex-col items-center justify-between'>
              <div>
                <p className='text-zinc-300'>&copy;{new Date().getFullYear()} KeenKeeper All rights reserved.</p>
              </div>
              <div className='flex items-center  gap-3'>
                <a className='text-zinc-300 hover:link-hover hover:text-zinc-100'>Privacy Policy</a>
                <a className='text-zinc-300 hover:link-hover hover:text-zinc-100'>Terms of Service</a>
                <a className='text-zinc-300 hover:link-hover hover:text-zinc-100'>Cookies</a>
              </div>
            </div>
        </div>
    );
};

export default Footer;