import React from 'react';
import Nav from './component/Nav';
import Hero from './section/Hero';
import PopularProduct from './section/PopularProduct';
import SuperQuality from './section/SuperQuality';
import Service from './section/Service';
import SpecialOffer from './section/SpecialOffer';

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <Hero/>
      <PopularProduct />
      <SuperQuality />
      <Service />
      <SpecialOffer />
    </main>
  )
}

export default App;