import React from 'react';
import {BiBriefcase, BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsClipboardData, BsBriefcase, BsChatSquareText} from 'react-icons/bs'
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className="container mx-auto">
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto p-5 flex justify-between place-items-center text-2xl text-white/50'>
          <Link  to='home' className='cursor-pointer flex justify-center items-center w-[60px] h-[60px]' activeClass='active' smooth={true} spy={true} offset={-200}>
            <BiHomeAlt />
          </Link>
          <Link  to='about' className='cursor-pointer flex justify-center items-center w-[60px] h-[60px]' activeClass='active' smooth={true} spy={true}>
            <BiUser />
          </Link>
          <Link to='service'  className='cursor-pointer flex justify-center items-center w-[60px] h-[60px]' activeClass='active' smooth={true} spy={true}>
            <BsClipboardData />
          </Link>
          <Link  to='work' className='cursor-pointer flex justify-center items-center w-[60px] h-[60px]' activeClass='active' smooth={true} spy={true}>
            <BiBriefcase />
          </Link>
          <Link  to='contact' className='cursor-pointer flex justify-center items-center w-[60px] h-[60px]' activeClass='active' smooth={true} spy={true}>
            <BsChatSquareText />
          </Link>
        </div>
      </div>  
    </nav>
  )
};

export default Nav;
