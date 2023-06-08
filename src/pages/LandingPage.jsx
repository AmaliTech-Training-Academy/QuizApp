import React from 'react'
import { CustomerReviews } from '../components/CustomerReviews';
import { Subscribe } from '../components/Subscribe';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const LandingPage = () => {
  return (
    <div>
    <div>LandingPage</div>
    <CustomerReviews/>
    <Subscribe/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default LandingPage;