import React from 'react';

const ReviewCard = ({imgURL, customerName, rating, feedback, star}) => {
  return (
    <div className='flex justify-center items-center flex-col' >
         <img src={imgURL} alt="Customer" className='object-cover w-[150px] h-[150px] rounded-full ml-auto mr-auto mb-7'/>
       
         <p className='text-slate-gray max-w-sm text-center info-text'>{feedback}</p>
            
           <div className='flex flex-1 gap-2.5 items-center justify-center'>
             <img src={star} alt="rating" className='object-contain m-0' width={20} height={20}/> 
             <h3 className='text-slate-gray text-xl font-montserrat'>({rating})</h3>    
           </div>
         
         <h2 className='font-bold text-3xl font-palanquin mt-1 text-center'>{customerName}</h2>
    </div>

  )
}

export default ReviewCard;