import support from '../../public/assets/icons/support.svg';
import shieldTick from '../../public/assets/icons/shield-tick.svg';
import truckFast from '../../public/assets/icons/truck-fast.svg';
import ServiceCard from '../component/ServiceCard';

const services = [
  {
      imgURL: truckFast,
      label: "Free shipping",
      subtext: "Enjoy seamless shopping with our complimentary shipping service."
  },
  {
      imgURL: shieldTick,
      label: "Secure Payment",
      subtext: "Experience worry-free transactions with our secure payment options."
  },
  {
      imgURL: support,
      label: "Love to help you",
      subtext: "Our dedicated team is here to assist you every step of the way."
  },
];


const Services = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
        {services.map((service) => (
            <ServiceCard key={service.imgURL} {...service}/>
          
        ))}
    </section>
  )
}

export default Services;