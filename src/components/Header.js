import React from 'react';
import Logo from '../assets/logo.svg'

const Header = () => {
  return(
    <header className=' py-8'>
      <div className='container mx-auto flex'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <h1 className='text-purple-500 text-3xl font-bold'>Aman</h1>
            <h1 className='text-2xl font-bold'>Konchgamey</h1>
          </a>
        </div>
        <div className='absolute right-0'><button className='btn btn-md lg:btn-lg p-2 mr-8'>Work with me</button></div>
      </div>
    </header>
  )
};

export default Header;
