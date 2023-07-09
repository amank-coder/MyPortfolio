import React from 'react';
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';
import { useState } from 'react';

const Contact = () => {
 
  const [user, setUser] = useState({
    name:"",
    email:"",
    message:"",
  })

  let name, value;
  const getUserData = (e)=> {
    name=e.target.name;
    value=e.target.value;
    setUser({...user, [name]:value})
  }

  const postData=async(e)=>{
    e.preventDefault()
    const {name,email,message} = user;

    if(name&&email&&message){
      const res = await fetch('https://my-portfolio-d45a6-default-rtdb.firebaseio.com/portfolio.json',{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          message,
        })
      })
      if(res){
        setUser({
          name:"",
          email:"",
          message:"",
        })
        alert("Message sent successfully!")
      }
    }else{
      alert("Please fill all the fields!!")
    }
  }

  return(
  <section className='py-16 lg:section mt-72' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row '>
        <motion.div variants={fadeIn('right', 0.3)} initial='hidden' 
                    whileInView={'show'} viewport={{once:false, amount:0.3}} className='flex-1'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Connect with <br />me!</h2>
          </div>
        </motion.div>
        <form className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start' method='POST'>
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' name="name" value={user.name} onChange={getUserData} placeholder='Your name' required />
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' name="email" value={user.email} onChange={getUserData} placeholder='Your email' required/>
          <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' name="message" value={user.message} onChange={getUserData} placeholder='Your message' required></textarea>
          <button className='btn btn-lg' onClick={postData}>Send message</button>
        </form>
      </div>
    </div>
  </section>
  )
};

export default Contact;
