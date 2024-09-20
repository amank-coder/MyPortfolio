import React from 'react';
import Img1 from '../assets/work1.jpg'
import Img2 from '../assets/p2.png'
import Img3 from '../assets/p3.png'
import Img4 from '../assets/metanet.png'

const Work = () => {

  const handleProjectClick = (projectUrl) => {
    // Open the project link in a new tab/window
    window.open(projectUrl, '_blank');
  };
  return(
    <div className='section mt-16 md:mt-72' id='work'>
      <div className="container mx-auto">
        <h2 className='h2 text-center text-accent mb-12'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='border-2 rounded-xl overflow-hidden group relative' onClick={() => handleProjectClick('https://github.com/amank-coder/TechKart-next-customer')}>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer'></div>
                <img src={Img1} className='group-hover:scale-125 transition-all duration-500 h-full'/>
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-2xl font-bold'>TechKart</span>
                </div>
            </div>
            <div className='border-2 rounded-xl overflow-hidden group relative' onClick={() => handleProjectClick('https://github.com/amank-coder/yantra-hack')}>
           <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer' ></div>
                <img src={Img2} className='group-hover:scale-125 transition-all duration-500 h-full'/>
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-2xl font-bold'>Vidya Mandir</span>
                </div>
            </div>
            <div className='border-2 rounded-xl overflow-hidden group relative' onClick={() => handleProjectClick('https://github.com/amank-coder/hostel-connect-latest')}>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer'></div>
                <img src={Img3} className='group-hover:scale-125 transition-all duration-500 h-full'/>
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-2xl font-bold'>HostelConnect</span>
                </div>
            </div>
            <div className='border-2 rounded-xl overflow-hidden group relative' onClick={() => handleProjectClick('https://metanet-dev-con.vercel.app/')}>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer'></div>
                <img src={Img4} className='group-hover:scale-125 transition-all duration-500 h-full'/>
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-2xl font-bold'>Metanet DevCon</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  ) 
};

export default Work;
