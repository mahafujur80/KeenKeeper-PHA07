import React from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { IoMdTime } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';
import { TfiStatsUp } from 'react-icons/tfi';
import { NavLink } from 'react-router';

const NavBar = () => {
    return (
        <div>
            <div className='container mx-auto px-4 md:px-0 shadow-b-xl h-15 flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-3xl'>Keen<span className='text-green-700'>Keeper</span></h1>
                </div>
                <div className='flex items-center'>
                    <div className='flex items-center gap-1 max-md:hidden'>
                        <NavLink to={'/'} className={({ isActive }) => `${isActive ? "btn text-white bg-green-700" : " btn btn-ghost"}`}><IoHomeOutline /> Home</NavLink>
                        <NavLink to={'/timeline'} className={({ isActive }) => `${isActive ? "btn text-white bg-green-700" : " btn btn-ghost"}`}  ><IoMdTime /> Timeline</NavLink>
                        <NavLink to={'/stats'} className={({ isActive }) => `${isActive ? "btn text-white bg-green-700" : " btn btn-ghost"}`} ><TfiStatsUp /> Stats</NavLink>
                    </div>
                    <div>
                        <div className="dropdown dropdown-left">
                            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow">
                                <li><NavLink to={'/'} className={({ isActive }) => `${isActive ? "btn text-white bg-green-700" : " btn btn-ghost"}`}><IoHomeOutline /> Home</NavLink></li>
                                <li><NavLink to={'/timeline'} className={({ isActive }) => `${isActive ? "btn text-white bg-green-700" : " btn btn-ghost"}`}  ><IoMdTime /> Timeline</NavLink></li>
                                <li><NavLink to={'/stats'} className={({ isActive }) => `${isActive ? "btn text-white bg-green-700" : " btn btn-ghost"}`} ><TfiStatsUp /> Stats</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;