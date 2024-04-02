import React from "react"
import ResumeItem from './resumeItem'

const data = [
    {
        title: 'Front-End Development',
        details: 'HTML, CSS, JavaScript, JQuery, Bootstrap, React, Progressive Web Applications, GraphQL, Server-Side API'
        
    }, 
    {
        title: 'Back-End Development',
        details: 'Node.js, Express, Web APIs, MySQL, MonoDB, '
        
    }, 

]


const Resume = () => {
    return(
        <div id='resume' className="max-w-[1040] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Resume</h1>
            {data.map((item, idx) => (
                <ResumeItem 
                key={idx} 
                title={item.title} 
                details={item.details}
                />
            ))}
        </div>
    )
}

export default Resume