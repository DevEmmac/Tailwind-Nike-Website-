import React from 'react';
import customer1 from '../../public/assets/images/customer1.jpeg';
import customer2 from '../../public/assets/images/customer2.svg';
import ReviewCard from '../component/ReviewCard';
import star from '../../public/assets/icons/star.svg';

const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


const CustomerReviews = () => {
  return (
    <section className='max-container bg-pale-blue padding'>
       <h3 className='font-palanquin text-4xl font-bold text-center'>What Our <span className='text-coral-red'>Customer</span> Say?</h3>
       <p className='text-center text-slate-gray text-lg font-montserrat leading-7 m-auto mt-4 max-w-lg'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>

       <div className='mt-24 flex flex-1 justify-evenly max-lg:flex-col gap-14'>
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback} star={star}/>
        ))}

       </div>
    </section>
  )
}

export default CustomerReviews;