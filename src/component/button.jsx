import React from 'react';

const button = ({ label, iconURL, backgroundColor, borderColor, textColor, fullWidth }) => {
  return (
    <button className={`border flex flex-row justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg rounded-full leading-none
      
   ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } rounded-full ${fullWidth && "w-full"}`}>


      {label} {iconURL && <img src={iconURL} alt="arrow-right" className='ml-2 rounded-full w-5 h-5'/>} 
    </button>
  )
}

export default button;