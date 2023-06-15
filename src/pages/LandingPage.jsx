<<<<<<< HEAD

import { CustomerReviews } from '../components/CustomerReviews';
import { Subscribe } from '../components/Subscribe';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Insights from '../components/Insights';
// import UserNavbar from '../components/UserNavbar';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      {/* <UserNavbar /> */}
      <Hero />
      <Services />
      <Insights />
      <CustomerReviews/>
      <Subscribe/>
      <Contact/>
      <Footer/>
    </div>
  )
}



=======
import React from 'react'

const LandingPage = () => {
  return (
    <div>LandingPage</div>
  )
}

>>>>>>> c09cae44de01ca5d508e95d2fdc0c18075584356
export default LandingPage;