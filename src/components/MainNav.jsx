import '../ui/MainNav.css';

const MainNav = (props, { className }) => {
  return <nav className={`main-nav ${props.className}`}>{props.children}</nav>;
};

export default MainNav;
