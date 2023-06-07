
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
    </div>
  )
}

export default LandingPage;