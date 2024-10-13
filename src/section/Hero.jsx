import React from 'react';
import Button from '../component/button';
import arrowRight from '../../public/assets/icons/arrow-right.svg';
import { shoes, statistics } from '../constant';
import { bigShoe1 } from '../../public/assets/images';
import ShoeCard from '../component/ShoesCard';
import { useState } from 'react';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section id='home' 
       className='w-full flex border-2 border-red-500 p-2 xl:flex-row flex-col justify-center min-h-screen gap-1 max-container pl-10'>

      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
      <p className= 'text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
      <h1 className='mt-10 font-palanquin text-[5.5rem] font-bold max-sm:text-[72px] max-sm:leading-[1] leading-tight'>The New Arrival<br/><span className='text-coral-red inline-block pr-4'>Nike</span>Shoes</h1>
      <p className='text-slate-500 text-lg leading-8 mt-6 mb-14'>Discover Stylist Nike arrivals, quality comfort and innovation for your active life.</p>
      
      <Button label="Shop now" iconURL={arrowRight}/>

      <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
        {statistics.map((stat) => (
          <div key={stat.label}>
            <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
            <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
          </div>
        ))}
      </div>
      </div>

       <div className='relative flex-1 flex-col justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary pt-40'>
        <img src={bigShoeImg}
        alt="Shoe Collection"
        width={610}
        height={500}
        className='object-contain relative z-10'
        /> 

        <div className='flex flex-row justify-center items-center gap-3 mt-20'>
          {shoes.map((shoe) => (
            <div key= {shoe}>
              {/* <ShoeCard imgURL={shoe}/> */}
              <ShoeCard imgURL={shoe} changeBigShoeImage={(shoe) => setBigShoeImg(shoe)} bigShoeImg={bigShoeImg}/>
            </div>
          ))}
        </div>  
       </div>
    </section>
  )
}

export default Hero;