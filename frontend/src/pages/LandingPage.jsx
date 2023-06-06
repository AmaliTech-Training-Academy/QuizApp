import React from 'react'
import { CustomerReviews } from '../components/CustomerReviews';
import { Subscribe } from '../components/Subscribe';
import { Contact } from '../components/Contact';

const LandingPage = () => {
  return (
    <div>
    <div>LandingPage</div>
    <CustomerReviews/>
    <Subscribe/>
    <Contact/>
    </div>
  )
}

export default LandingPage;