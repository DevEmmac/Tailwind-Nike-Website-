import React from 'react';

const ReviewCard = ({imgURL, customerName, rating, feedback, star}) => {
  return (
    <div className='text-center'>
      {/* <div className='items-center justify-center'> */}
         <img src={imgURL} alt="Customer" className='w-[150px] h-[150px] rounded-full ml-auto mr-auto mb-7'/>
      {/* </div> */}
       
         <p className='text-slate-gray max-w-lg'>{feedback}</p>
           
           <div className='flex flex-1 gap-2 items-center justify-center mt-2'>
             <img src={star} alt="rating" /> 
             <h3 className='text-slate-gray'>{rating}</h3>    
           </div>
         
         <h2 className='font-bold text-3xl font-palanquin'>{customerName}</h2>
    </div>

  )
}

export default ReviewCard;