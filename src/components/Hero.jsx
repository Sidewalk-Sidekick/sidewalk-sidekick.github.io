import HeroHeader from './HeroHeader';
import HeroText from './HeroText';
import '../ui/Hero.css';

const Hero = () => {
  return (
    <section className='sectionHero'>
      <div className='hero container'>
        <HeroHeader title='Sidewalk Sidekick' />
        <HeroText />
      </div>
    </section>
  );
};

export default Hero;
