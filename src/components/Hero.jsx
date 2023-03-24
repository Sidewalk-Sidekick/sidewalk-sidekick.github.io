import HeroHeader from './HeroHeader';
import HeroText from './HeroText';
import HeroNav from './HeroNav';
import '../ui/Hero.css';

const Hero = () => {
  return (
    <section className='sectionHero' id='hero'>
      <div className='hero container'>
        <HeroHeader title='Sidewalk Sidekick' />
        <HeroText />
        <HeroNav />
      </div>
    </section>
  );
};

export default Hero;
