import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import { Link } from 'react-router-dom';
import Img1 from '../assets/work1.jpg'
import Img2 from '../assets/work2.jpg'
import Img3 from '../assets/work3.PNG'
import Img4 from '../assets/work4.jpg'

const Work = () => {

  const handleProjectClick = (projectUrl) => {
    // Open the project link in a new tab/window
    window.open(projectUrl, '_blank');
  };
  return(
    <div className='section mt-56' id='work'>
      <div className="container mx-auto">
        <h2 className='h2 text-center text-accent mb-12'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='border-2 rounded-xl overflow-hidden group relative' onClick={() => handleProjectClick('https://github.com/amank-coder/Techkart')}>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer'></div>
                <img src={Img1} className='group-hover:scale-125 transition-all duration-500 h-full'/>
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-2xl font-bold'>TechKart</span>
                </div>
            </div>
            <div className='border-2 rounded-xl overflow-hidden group relative' onClick={() => handleProjectClick('https://aqi-project-rt9u.vercel.app/')}>
           <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer' ></div>
                <img src={Img2} className='group-hover:scale-125 transition-all duration-500 h-full'/>
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-2xl font-bold'>AQI</span>
                </div>
            </div>
            <div className='border-2 rounded-xl overflow-hidden group relative' onClick={() => handleProjectClick('https://google.com')}>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer'></div>
                <img src={Img3} className='group-hover:scale-125 transition-all duration-500 h-full'/>
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-2xl font-bold'>VIT Hostels</span>
                </div>
            </div>
            <div className='border-2 rounded-xl overflow-hidden group relative' onClick={() => handleProjectClick('https://benevolent-biscochitos-0c9321.netlify.app/')}>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer'></div>
                <img src={Img4} className='group-hover:scale-125 transition-all duration-500 h-full'/>
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-2xl font-bold'>Music Player</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  ) 
};

export default Work;
