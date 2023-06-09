
import { CustomerReviews } from '../components/CustomerReviews';
import { Subscribe } from '../components/Subscribe';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Insights from '../components/Insights';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
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



export default LandingPage;