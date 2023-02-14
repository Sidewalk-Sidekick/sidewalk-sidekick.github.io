import '../ui/HeroText.css';
import HeroStatus from './HeroStatus';

const HeroText = () => {
  return (
    <>
      <p className='hero-text'>
        Discover accessible routes in real-time from a dedicated community.
      </p>
      <HeroStatus />
    </>
  );
};

export default HeroText;
