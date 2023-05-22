import '../ui/SecondaryNavMenu.css';
import { Link } from 'react-router-dom';

const SecondaryNavMenu = () => {
  return (
    <ul className='secondary-nav-menu'>
      <li className='secondary-nav-menu-item'>
        <Link to='/' className='secondary-nav-menu-item-link'>
          Back to Homepage
        </Link>
      </li>
    </ul>
  );
};

export default SecondaryNavMenu;
