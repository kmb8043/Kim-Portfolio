import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineIdcard, AiOutlineProfile, AiOutlineHome } from 'react-icons/ai';
import { GrProjects } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";

const Sidenav = () => {
    const [nav, setNav] = useState(false); 
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden" />

            {nav ? (
                <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                   
                    <a onClick={handleNav} href="/" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in"> 
                        <AiOutlineHome  size={20} />
                        <span className="pl-4">Home</span>
                    </a>

                    <a  onClick={handleNav} href="#aboutme" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in"> 
                        <AiOutlineIdcard size={20} />
                        <span className="pl-4">About Me</span>
                    </a>
                    
                    <a onClick={handleNav} href="#resume" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in"> 
                        <AiOutlineProfile size={20} />
                        <span className="pl-4">Resume</span>
                    </a>

                    <a onClick={handleNav} href="#portfolio" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in"> 
                        <GrProjects size={20} />
                        <span className="pl-4">Portfolio</span>
                    </a>

                    <a onClick={handleNav} href="#contact" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in"> 
                        <MdOutlineEmail size={20} />
                        <span className="pl-4">Contact</span>
                    </a>
                </div>
            ) : (
                <div className='md:block hidden fixed top-[25%] z-10'>
                    <div className='flex flex-col'>

                        <a href="/" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in'>
                            <AiOutlineHome size={20} />
                        </a>
                        <a href="#aboutme" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in'>
                            <AiOutlineIdcard size={20} />
                        </a>

                        <a href="#resume" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in'>
                            <AiOutlineProfile size={20} />
                        </a>

                        <a href="#portfolio" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in'>
                            <GrProjects size={20} />   
                        </a>

                        <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in'>
                            <MdOutlineEmail size={20} />
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidenav;
