import React from 'react';

const services =[
    {
      name:'ISA-VIT',
      desc:'Core Committee Member'
    },
    {
      name:'AYUDA-VIT',
      desc:'Core Committee Member'
    },
    {
      name:'MFC-VIT',
      desc:'Core Committee Member'
    },
  ]
const Services = () => {
  return(
    <div className='section' id='service'>
      <div className='container justify-center flex-col lg:flex'>
        <div className='mx-auto'>
          <div className='p-12'>
            <h2 className='h2 text-accent'>Experience</h2>
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
        <div>
              <p className='font-secondary text-center text-3xl mt-4 text-purple-300 font-semibold'>Contributor</p>
              <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6 mt-6 text-center'>TSOC '23</h4>
        </div>
      </div>
    </div>
  ) 
};

export default Services;
