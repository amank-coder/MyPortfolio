import React from 'react';
import {SiSolidity, SiExpress, SiSvelte, SiPowerbi} from 'react-icons/si'
import {BiLogoJavascript, BiLogoPython, BiLogoCss3, BiLogoReact, BiLogoTailwindCss, BiLogoNodejs, BiLogoMongodb, BiLogoHtml5} from 'react-icons/bi'
import {TbBrandCpp} from 'react-icons/tb' 

const services =[
    {
      name:'TechTree IT Systems',
      desc:'Java Developer Intern'
    },
    {
      name:'Timechain Labs',
      desc:'SDE Intern'
    },
    {
      name:'Contributor',
      desc:"TSOC '23"
    },
  ]
const Services = () => {
  return(
    <div className='section flex flex-col' id='service'>
      <div className='container justify-center flex-col lg:flex'>
        <div className='mx-auto'>
          <div className='p-12'>
            <h2 className='h2 text-accent text-center'>Experience</h2>
          </div>
        </div>
        <div className='grid grid-cols-3 text-center'>
          {services?.map((item, index)=>{
              return(
                <div key={index}>
                  <div>
                    <p className='font-secondary'>{item.desc}</p>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6 mt-6 text-center'>{item.name}</h4>
                  </div>
                </div>
              )
          })}
        </div>
      </div>
      <div className='mt-16 flex gap-8 flex-wrap mx-auto'>
          <span><BiLogoHtml5 size={36}/> </span>
          <span><BiLogoCss3 size={36}/></span>
          <span><BiLogoTailwindCss size={36}/></span>
          <span><BiLogoJavascript size={36}/></span>
          <span><BiLogoReact size={36}/></span>
          <span><BiLogoNodejs size={36}/></span>
          <span><SiExpress size={36}/></span>
          <span><BiLogoMongodb size={36}/></span>
          <span><SiSvelte size={36} /></span>
          <span><SiSolidity size={36}/></span>
          <span><BiLogoPython size={36}/></span>
          <span><TbBrandCpp size={36}/></span>
          <span><SiPowerbi size={36}/></span>
      </div>
    </div>
  ) 
};

export default Services;
