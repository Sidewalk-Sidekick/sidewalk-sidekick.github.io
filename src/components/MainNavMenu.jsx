import '../ui/MainNavMenu.css';
import { Link } from 'react-scroll';

const MainNavMenu = () => {
  return (
    <ul className='main-nav-menu'>
      <li className='main-nav-menu-item'>
        <Link
          to='how-it-works'
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className='main-nav-menu-item-link'
        >
          How It Works
        </Link>
      </li>
      <li className='main-nav-menu-item'>
        <Link
          to='our-story'
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className='main-nav-menu-item-link'
        >
          Our Story
        </Link>
      </li>
      <li className='main-nav-menu-item'>
        <Link
          to='meet-the-team'
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className='main-nav-menu-item-link'
        >
          Meet the Team
        </Link>
      </li>
      <li className='main-nav-menu-item'>
        <Link
          to='get-involved'
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className='main-nav-menu-item-link'
        >
          Get Involved
        </Link>
      </li>
      <li className='main-nav-menu-item'>
        <Link
          to='sponsors'
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className='main-nav-menu-item-link'
        >
          Sponsors
        </Link>
      </li>
    </ul>
  );
};

export default MainNavMenu;
