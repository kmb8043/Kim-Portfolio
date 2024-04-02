import React from 'react'
import PortfolioItem from './portfolioItem'
import WeatherImg from '../../src/assets/weather.png'
import PasswordImg from '../../src/assets/password_gen.png'
import CodeVerseImg from '../../src/assets/codeverse.png'

const Portfolio = () => {
    return(
        <div id='portfolio' className='max-w-[1040] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'> Portfolio </h1>

            <p className='text-center py-8'> 
                Just few of the projects I have done throughout coding journey. <p>
                    Click on the project to take you to that projects Github. 
                </p>
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <a href='https://github.com/kmb8043/weatherAPI'  target="_blank" rel="noopener noreferrer">
                    <PortfolioItem img={WeatherImg} title='Weather API' />
                </a>
                <a href='https://github.com/kmb8043/Password-Generator'  target="_blank" rel="noopener noreferrer">
                    <PortfolioItem img={PasswordImg} title='Password Generator'/>
                </a>
                <a href='https://github.com/kmb8043/tech_blog'  target="_blank" rel="noopener noreferrer">
                    <PortfolioItem img={CodeVerseImg} title='CodeVerse'/>
                </a>
                
                
            </div>
        </div>
    )
}
export default Portfolio