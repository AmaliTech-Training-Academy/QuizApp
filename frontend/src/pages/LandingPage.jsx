import React from 'react'
import { CustomerReviews } from '../components/CustomerReviews';
import { Subscribe } from '../components/Subscribe';
import { Contact } from '../components/Contact';
import { CustomerReviews } from '../components/CustomerReviews';

const LandingPage = () => {
  return (
    <div>
    <div>LandingPage</div>
    <CustomerReviews/>
    <Subscribe/>
    <Contact/>
    </div>
    <CustomerReviews/>
    </div>
  )
}

export default LandingPage;