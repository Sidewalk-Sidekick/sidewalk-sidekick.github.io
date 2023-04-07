import MainHeader from '../components/MainHeader';
import HeroHeader from './HeroHeader';
import HeroText from './HeroText';
import '../ui/Hero.css';
import HeroNav from '../components/HeroNav';

const Hero = () => {
  return (
    <section className='sectionHero' id='hero'>
      <MainHeader />
      <div className='hero container'>
        <HeroHeader title='Sidewalk Sidekick' />
        <HeroText />
        {/* <HeroNav /> */}
      </div>
    </section>
  );
};

export default Hero;
