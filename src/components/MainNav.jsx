import '../ui/MainNav.css';

const MainNav = () => {
  return (
    <nav className='main-nav'>
      <ul className='main-nav-menu'>
        <li className='main-nav-menu-item'>
          <a href='#' className='main-nav-menu-item-link'>
            Home
          </a>
        </li>
        <li className='main-nav-menu-item'>
          <a href='#app' className='main-nav-menu-item-link'>
            App
          </a>
        </li>
        <li className='main-nav-menu-item'>
          <a href='#team' className='main-nav-menu-item-link'>
            Team
          </a>
        </li>
        <li className='main-nav-menu-item'>
          <a href='#partnerships' className='main-nav-menu-item-link'>
            Partnerships
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
