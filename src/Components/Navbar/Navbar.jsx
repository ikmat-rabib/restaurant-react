import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className="navbar  fixed top-0 left-0 right-0 max-w-[1320px] mx-auto py-4">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>Clients</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    
                    <a href='' className='flex items-center justify-center text-white'>
                        <img src="/public/restaurant_favcon.png" className='w-[50px] pr-2' alt="" srcset="" />
                        <div className=" text-[28px] font-poppins font-semibold ">Restau<span className='font-poppins font-normal '>rant</span></div>
                       
                    </a>
                </div>

                <div className="navbar-center w-7/12  hidden lg:flex">
                    <ul className="menu menu-horizontal text-white font-raleway font-medium px-1">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>Clients</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>

                <div className="navbar-end">
                    <a className="btn w-[157px] h-[44px] rounded-none font-roboto font-bold text-base uppercase bg-button ">Book a table</a>
                </div>

            </div>
        </>
    );
};

export default Navbar;