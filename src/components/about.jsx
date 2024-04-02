import React from "react"
import '../assets/Kim.jpg'

const About = () => {
    return(
        <div id='aboutme' className="max-w-[1040] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">About Me</h1>
            <img className='rounded-full h-auto max-w-xs' src='src\assets\Kim.jpg' />
                <p className=" display-inline text-center py-8">
                    I was 31 years old when I decided to make a career change. I studied criminal justice in college and jumped straight into working for the Federal Government as a Security Officer and a Law Enforcement Officer. <p> I discovered coding through my older sister and my husbands brother. I played around on Khan Academy and watch many youtube videos to get my feet wet. </p> <p>I have always loved learning new skills and challenging myself. Coding gives me the mental challenge everyday.</p>
                </p>  
        </div>
    )
}

export default About