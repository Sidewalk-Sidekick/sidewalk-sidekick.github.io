import HeroHeader from './HeroHeader';
import HeroText from './HeroText';
import '../ui/Hero.css';
import HeroNav from './HeroNav';

const Hero = () => {
  return (
    <section className='sectionHero'>
      <div className='hero container'>
        <HeroHeader title='Sidewalk Sidekick' />
        <HeroText />
        <HeroNav />
      </div>
    </section>
  );
};

export default Hero;
