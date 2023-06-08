import React from 'react'
import { CustomerReviews } from '../components/CustomerReviews';
import { Subscribe } from '../components/Subscribe';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import Hero from '../components/Hero';
import Insight from '../components/Insight';
import InsightTwo from '../components/InsightTwo';
import Navbar from '../components/Navbar'
import Services from '../components/Services';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Insight />
      <InsightTwo />
      <CustomerReviews/>
      <Subscribe/>
      <Contact/>
      <Footer/>
    </div>
  )
}



export default LandingPage;