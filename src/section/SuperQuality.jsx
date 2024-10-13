import React from 'react';
import Button from '../component/button';
// import arrowRight from '../../public/assets/icons/arrow-right.svg';
import shoe8 from '../../public/assets/images/shoe8.svg';

const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container padding'> 
      <div className='flex flex-1 flex-col'>
        <p className= 'text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>We Provide You <span className='text-coral-red'>Super</span> <span className='text-coral-red'>Quality</span> Shoes</h2>
        <p className='mt-4 lg:max-w-lg font-montserrat text-slate-gray text-lg leading-7'>Ensure premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innocation, and a touch of elegance.</p>
        <p className='mt-6 lg:max-w-lg font-montserrat text-slate-gray leadomg-7'>Our dedication to details and excellence ensures your satisfaction</p>

        <div className='mt-11 flex flex-wrap'>
         <Button label="View Details"/>
        </div>
      </div>

        <div className='flex-1 flex justify-center items-center'>
          <img src={shoe8} alt="shoe8" width={570} height={522} className='object-container'/>
        </div>
    </section>
  )
}

export default SuperQuality;