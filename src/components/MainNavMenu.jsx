import '../ui/MainNavMenu.css';

const MainNavMenu = () => {
  return (
    <ul className='main-nav-menu container'>
      <li className='main-nav-menu-item'>
        <a href='http://localhost:3000/' className='main-nav-menu-item-link'>
          Home
        </a>
      </li>
      <li className='main-nav-menu-item'>
        <a href='http://localhost:3000/' className='main-nav-menu-item-link'>
          App
        </a>
      </li>
      <li className='main-nav-menu-item'>
        <a href='http://localhost:3000/' className='main-nav-menu-item-link'>
          Team
        </a>
      </li>
      <li className='main-nav-menu-item'>
        <a href='http://localhost:3000/' className='main-nav-menu-item-link'>
          Partnerships
        </a>
      </li>
    </ul>
  );
};

export default MainNavMenu;
