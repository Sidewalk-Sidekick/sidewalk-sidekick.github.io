import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Sponsors from '../components/Sponsors';
import TeamHistory from '../components/TeamHistory';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='page-container'>
      <Hero />
      <HowItWorks />
      <Sponsors />
      <TeamHistory />
      <Footer />
    </div>
  );
};

export default Home;
