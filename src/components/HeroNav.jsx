import SocialNavMenu from './SocialNavMenu';

const HeroNav = (props, { className }) => {
  return (
    <nav className={`hero-nav ${props.className}`}>
      <SocialNavMenu />
    </nav>
  );
};

export default HeroNav;
