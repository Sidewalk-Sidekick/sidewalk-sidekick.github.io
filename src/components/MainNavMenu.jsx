import '../ui/MainNavMenu.css';

const MainNavMenu = () => {
  return (
    <ul className='main-nav-menu'>
      <li className='main-nav-menu-item'>
        <a href='http://localhost:3000/' className='main-nav-menu-item-link'>
          How It Works
        </a>
      </li>
      <li className='main-nav-menu-item'>
        <a href='http://localhost:3000/' className='main-nav-menu-item-link'>
          Our Story
        </a>
      </li>
      <li className='main-nav-menu-item'>
        <a href='http://localhost:3000/' className='main-nav-menu-item-link'>
          Meet the Team
        </a>
      </li>
      <li className='main-nav-menu-item'>
        <a href='http://localhost:3000/' className='main-nav-menu-item-link'>
          Get Involved
        </a>
      </li>
      <li className='main-nav-menu-item'>
        <a href='http://localhost:3000/' className='main-nav-menu-item-link'>
          Sponsors
        </a>
      </li>
    </ul>
  );
};

export default MainNavMenu;
