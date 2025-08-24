import React from "react"
import '../assets/Kim.jpg'

const About = () => {
    return(
        <div id='aboutme' className="max-w-[1040] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">About Me</h1>
            <img className='rounded-full h-auto max-w-xs' src='src\assets\Kim.jpg' />
                <p className=" display-inline text-center py-8">
                    Hi I am Kimberly. I am a full- stack developer. I have always loved learning new skills and challenging myself. I discovered I had a passion for web-development one day just playing around with Code Academy. 
                    <p> Going from a career in the Federal Goverment to a life of coding was a little nerve racking at first. </p> <p> Coding challenges me mentally everyday and I love it.</p>
                </p>  
        </div>
    )
}

export default About