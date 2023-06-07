
import Hero from '../components/Hero';
import Insight from '../components/Insight';
import Navbar from '../components/Navbar'
import Services from '../components/Services';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Insight />
    </div>
  )
}

export default LandingPage;