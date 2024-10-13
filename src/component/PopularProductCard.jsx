import React from 'react';
import star from '../../public/assets/icons/star.svg';

const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
         <img src={imgURL} alt="" width={280} height={280}/>
         
         <div className='mt-2 flex justify-start gap-2.5 px-2 cursor-pointer'>  
            <img src={star} alt="rating" width={24} height={24}/>
               <p className='font-montserrat text-xl leading-normal text-slate-gray'>{4.5}</p>
         </div>
        
         <h2 className='font-palanquin text-sm mt-2 pl-2  leading-normal font-semibold'>{name}</h2>  
         <p className='px-2 text-coral-red leading-normal font-montserrat font-semibold text-2xl'>{price}</p>
    </div>
  )
}

export default PopularProductCard;