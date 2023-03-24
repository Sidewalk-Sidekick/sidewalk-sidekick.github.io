import '../ui/MainNav.css';

const MainNav = (props, { className }) => {
  return (
    <nav className={`main-nav ${props.className}`}>
      <div>
        <span className='site-logo'>Logo Icon</span>
      </div>
      {props.children}
    </nav>
  );
};

export default MainNav;
