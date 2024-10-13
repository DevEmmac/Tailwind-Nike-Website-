import React from 'react';
import { Link } from "react-router-dom";
import { headerLogo } from '../../public/assets/images';
import hamburger from '../../public/assets/icons/hamburger.svg';
import { navLinks } from '../constant/index';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <Link to={'/'}>
              <img src={headerLogo} alt="logo" width={130} height={30}/>
            </Link>

            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
              {navLinks.map((item) => (<li key={item.label}>
                    <Link to={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                    {item.label}</Link>
                </li>))}
                
            </ul>
            
            <div className='hidden max-lg:block'>
            <img src={hamburger} alt="Hamburger" className="w-4 h-6 ms:hidden width={25} height={25}"/>
            </div>   
        </nav>
    </header>
  )
};

export default Nav;