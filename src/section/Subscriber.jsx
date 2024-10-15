import React from 'react';
import Button from '../component/button';

const Subscriber = () => {
  return (
    <section className='max-container flex justify-between items-center max-lg:flex-col gap-6 padding' id='contacts-us'>
        <h3 className='text-4xl flex flex-col leading-[68px] lg:max-w-full font-palanquin font-bold'>Sign Up from <span className='text-coral-red'>Updates</span> & Newsletter</h3>
          <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col rounded-full gap-5 p-2.5 sm:border sm:border-slate-gray'>
            <input type="text" name='' placeholder='Subscribe@nike.com' className='input'/>
              <div className='flex max-sm:justify-end items-center max-sm:w-full'>
                <Button label='Sign Up' fullWidth/>
              </div>
          </div>
    </section>
  )
}

export default Subscriber;