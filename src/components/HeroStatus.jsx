import '../ui/HeroStatus.css';

const HeroStatus = (props, { className }) => {
  return (
    <p className={`hero-status ${props.className}`}>
      User Testing Starting April 2023
    </p>
  );
};

export default HeroStatus;
