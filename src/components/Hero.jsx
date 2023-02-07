import HeroHeader from './HeroHeader';
import HeroText from './HeroText';
import HeroNav from './HeroNav';
import '../ui/Hero.css';
import SignUp from './SignUp';

const Hero = () => {
  return (
    <section className='sectionHero'>
      <div className='hero container'>
        <HeroHeader title='Sidewalk Sidekick' />
        <HeroText />
        {/* <SignUp title='User Testing Sign Up' /> */}
        <HeroNav />
      </div>
    </section>
  );
};

export default Hero;
