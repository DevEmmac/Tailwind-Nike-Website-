import React from 'react';
import { products } from '../constant/index';
// import shoe4 from '../../public/assets/images/shoe4.svg';
// import shoe5 from '../../public/assets/images/shoe5.svg';
// import shoe6 from '../../public/assets/images/shoe6.svg';
// import shoe7 from '../../public/assets/images/shoe7.svg';
// import shoe8 from '../../public/assets/images/shoe8.svg';
import PopularProductCard from '../component/PopularProductCard';


const PopularProduct = () => {
  return (
    <section id='products' className='padding max-container max-sm:mt-12'>
        <h1 className='text-4xl font-palanquin font-bold'>Our<span className='text-coral-red'> Popular</span> Products</h1>
        <p className='text-slate-gray-500 lg:max-w-lg mt-2 font-montserrat'>Experience top-notch quality and style with our sought-after <br /> selection. Discover a world of comfort, design, and value</p>
        <p></p>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 mt-16 cursor-pointer'>
          {products.map((product) => (
            <PopularProductCard key={product.name} {...product}/>
          ))}
        </div>
    </section>
  )
} 

export default PopularProduct;