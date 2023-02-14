import '../ui/HeroHeader.css';

const HeroHeader = ({ title }) => {
  return (
    <header className='hero-header'>
      <h1 className='hero-heading'>{title}</h1>
    </header>
  );
};

export default HeroHeader;
