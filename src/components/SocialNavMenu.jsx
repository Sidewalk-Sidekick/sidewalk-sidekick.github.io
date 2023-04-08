import '../ui/SocialNavMenu.css';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const SocialNavMenu = () => {
  return (
    <ul className='socialNavMenu'>
      <li className='socialNavItem'>
        <a
          href='https://www.linkedin.com/company/sidewalk-sidekick'
          target='_blank'
          className='socialNavLink'
        >
          <FaLinkedinIn />
        </a>
      </li>
      <li className='socialNavItem'>
        <a
          href='https://www.instagram.com/sidewalk_sidekick/'
          target='_blank'
          className='socialNavLink'
        >
          <FaInstagram />
        </a>
      </li>
      <li className='socialNavItem'>
        <a
          href='https://www.twitter.com/sw_sidekick/'
          target='_blank'
          className='socialNavLink'
        >
          <FaTwitter />
        </a>
      </li>
      <li className='socialNavItem'>
        <a href='mailto:sidewalksidekickhq@gmail.com' className='socialNavLink'>
          <FaEnvelope />
        </a>
      </li>
    </ul>
  );
};

export default SocialNavMenu;
