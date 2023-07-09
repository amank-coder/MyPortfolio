import React from 'react';
import Image from '../assets/digitalidphoto.jpg'
import {FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const Banner = () => {
  return(
    <section className='section' id='home'>
      <div className="container mx-auto flex flex-col lg:flex-row w-full">
        <div className='mt-12 lg:ml-8'>
          <div>
            <motion.h1 variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}}>Aman <span>Konchgamey</span></motion.h1>
            <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation sequence={[
                'Developer',
                2000,
                'Designer',
                2000,
                'Coder',
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
                />
            </motion.div>
            <p>MERN stack developer crafting innovative web solutions with precision and passion.</p>
          </div>
          <button className='btn btn-md lg:btn-lg p-2 mr-12 mb-8 mt-4'>Contact me</button>
          <a href='https://drive.google.com/file/d/1eWrFkudPfvppuza8aGoVa63CoUUsz8Vw/view?usp=sharing' className='text-gradient btn-link'>My Portfolio</a>
          <div className='flex text-[20px] gap-x-6 max-w-max ml-2'>
            <a href='#'>
              <FaYoutube />
            </a>
            <a href='https://github.com/amank-coder'>
              <FaGithub />
            </a>
            <a href='#'>
              <FaDribbble />
            </a>
          </div>
          
        </div>
        <div className='mx-auto'>
            <img src={Image} className='rounded-full w-96'/>
          </div>
      </div>
    </section>
  )
};

export default Banner;
