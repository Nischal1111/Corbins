import React from 'react'
import HeroSection from '../Contacts/HeroSection';
import MainSection from './MainSection';
import ContactForm from './ContactForm.jsx';

const Contacts = () => {
  return (
    <div className='text-white lg:px-16 px-1'>
      <HeroSection/>
      <MainSection/>
      <ContactForm/>
    </div>
  )
}

export default Contacts
