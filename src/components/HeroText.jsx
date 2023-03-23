import '../ui/HeroText.css';

const HeroText = (props, { className }) => {
  return (
    <>
      <p className={`hero-text ${props.className}`}>
        Discover accessible routes in real-time from a dedicated community.
      </p>
    </>
  );
};

export default HeroText;
