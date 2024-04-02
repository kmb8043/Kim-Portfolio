import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaLinkedinIn, FaGithub} from 'react-icons/fa'


const Header = () => {
    return (
        <div id='main'>
            <img className="w-full h-screen object-cover object-left scale-x-[-1]" src="https://images.unsplash.com/photo-1711354216650-49c4ca01d45c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/40">
                <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center">
                    <h1 className="sm:text-4xl text-3xl text-gray-800">I am Kimberly Benoit</h1>
                    <h2> 
                    I'm a 
                    <TypeAnimation
                    sequence={[
                        'coder',
                        1000, 
                        'web developer',
                        1000,
                        'dog mom',
                        1000,
                    ]}
                    wrapper="div"
                    speed={50}
                    style={{ fontSize: '1em', paddingLeft: '5px'}}
                    repeat={Infinity}
                    />
                    </h2>
                    <a href='https://twitter.com/kimb8043' target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="cursor-pointer" size={20}/>
                    </a>
                    <a href='https://www.linkedin.com/in/kimberly-benoit-2a3bb3140/' target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="cursor-pointer" size={20} />
                    </a>
                    <a href='https://github.com/kmb8043' target="_blank" rel="noopener noreferrer">
                    <FaGithub className="cursor-pointer" size={20} />
                    </a>
                    
                </div>    
                </div>
        </div>
        
    )
}

export default Header