import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../../public/assets/images/footer-logo.svg';
import facebook from '../../public/assets/icons/facebook.svg';
import twitter from '../../public/assets/icons/twitter.svg';
import instagram from '../../public/assets/icons/instagram.svg';
import copyright from '../../public/assets/icons/copyright-sign.svg';

const Footer = () => {

const footerLinks = [
    {
       title: "Products",
       links: [
          { name: "Air Force 1", link: "/" },
           { name: "Air Max 1", link: "/" },
          { name: "Air Jordan 1", link: "/" },
             { name: "Air Force 2", link: "/" },
             { name: "Nike Waffle Racer", link: "/" },
          { name: "Nike Cortez", link: "/" },
        ],
   },
  {
      title: "Help",
     links: [
           { name: "About us", link: "/" },
             { name: "FAQs", link: "/" },
             { name: "How it works", link: "/" },
             { name: "Privacy policy", link: "/" },
             { name: "Payment policy", link: "/" },
         ],
    },
    {
        title: "Get in touch",
        links: [
          { name: "customer@nike.com", link: "mailto:customer@nike.com" },
           { name: "+92554862354", link: "tel:+92554862354" },
         ],
    },
 ];

const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];

  return (
    <footer className='max-container bg-black padding-x padding-t pb-8'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <Link to="./">
            <img src={footerLogo} alt="footerlogo" width={150} height={46} />
          </Link> 
          <p className='mt-6 text-base leading-7 font-montserrat text-slate-gray sm:max-w-sm'>
            Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store, Get Rewards.
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((socialmedia) => (
              <div key={socialmedia} className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                <img src={socialmedia.src} alt={socialmedia.alt} width={24} height={24} className=''/>
              </div>
            ))}   
          </div>
        </div>
          <div className='flex flex-1 w-full justify-between text-white max-sm:flex-col gap-4'>
            {footerLinks.map((footer) => (
              <div key={footer} className=''>
                  <h2 className='font-montserrat 3xl font-bold leading-normal'>{footer.title}</h2>

                  <ul>{footer.links.map((link) => (
                    <li key={link} className='text-white-400 pt-2 font-montserrat hover:text-slate-gray cursor-pointer'>
                      <Link to={'./'}>{link.name}</Link></li>
                  ))}</ul>
              </div>
            ))}
            
          </div>
      </div>
       <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img src={copyright} alt="copyright-sign" width={20} height={20} className='rounded-full m-0'/>
          <p>Copyright. All rights reserved.</p>
        </div>
          <p className='cursor-pointer font-montserrat'>Terms & Conditions</p>
       </div>
    </footer>
  )
}

export default Footer;