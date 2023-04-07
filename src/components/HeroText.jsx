import '../ui/HeroText.css';
import HeroStatus from './HeroStatus';

const HeroText = (props, { className }) => {
  return (
    <>
      <p className={`hero-text ${props.className}`}>
        Discover accessible routes in real-time from a dedicated community.
      </p>
      {/* <HeroStatus /> */}
    </>
  );
};

export default HeroText;
