import React from 'react';
import CountUp from 'react-countup';
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';

const About = () => {

  return (
  <div className='section' id='about'>
    <div className="container mx-auto">
      <div className='flex flex-col gap-12 lg:flex-row'>
        <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten opacity-60 bg-top rounded-full w-1/3'> </div>
        <div className='flex-1 mt-20'>
          <h2 className='h2 text-accent'>About Me.</h2>
          <h4 className='mb-4'>I'm a third year BTECH- Computer Science student at VIT, Vellore</h4>
          <p>I have a passion for web development. I am also a web3 enthusiast and currently learning about Blockchain.</p>
         <div className='flex gap-x-6 lg:gap-x-10 mb-12 mt-4 '>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              5+
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Projects Completed
            </div>
          </div>  
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
                2
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Certificates Completed
            </div>
          </div>    
        </div>
        <button className='btn btn-md lg:btn-lg p-2 mr-12 mb-8 mt-4'>Contact me</button>
        <a href='#' className='text-gradient btn-link'>My Portfolio</a>
      </div>
      </div>
    </div>
  </div>
  )
}

export default About;
