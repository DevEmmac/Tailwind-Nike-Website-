import React from 'react';

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-10 m-4'>
        <div className='flex bg-coral-red rounded-full w-11 h-11 justify-center items-center mb-4'>
          <img src={imgURL} alt={'label'} width={24} height={24}/>
        </div>
    
     <h3 className='text-slate-gray font-palanquin text-[1.2rem] font-bold leading-normal'>{label}</h3>
     <p className='font-montserrat text-lg mt-3 leading-normal text-slate-gray'>{subtext}</p>
    </div>
  )
}

export default ServiceCard