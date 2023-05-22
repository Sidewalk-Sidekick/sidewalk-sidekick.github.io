import '../ui/SocialNavMenu.css';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaMeetup } from 'react-icons/fa';

const SocialNavMenu = () => {
  return (
    <ul className='socialNavMenu'>
      <li className='socialNavItem'>
        <a
          href='https://www.linkedin.com/company/sidewalk-sidekick'
          target='_blank'
          rel='noreferrer'
          className='socialNavLink'
        >
          <FaLinkedinIn />
        </a>
      </li>
      <li className='socialNavItem'>
        <a
          href='https://www.instagram.com/sidewalk_sidekick/'
          target='_blank'
          rel='noreferrer'
          className='socialNavLink'
        >
          <FaInstagram />
        </a>
      </li>
      <li className='socialNavItem'>
        <a
          href='https://www.twitter.com/sw_sidekick/'
          target='_blank'
          rel='noreferrer'
          className='socialNavLink'
        >
          <FaTwitter />
        </a>
      </li>
      <li className='socialNavItem'>
        <a
          href='https://www.meetup.com/sidewalk-sidekick-community/'
          target='_blank'
          rel='noreferrer'
          className='socialNavLink'
        >
          <FaMeetup />
        </a>
      </li>
      <li className='socialNavItem'>
        <a href='mailto:info@sidewalksidekick.com' className='socialNavLink'>
          <FaEnvelope />
        </a>
      </li>
    </ul>
  );
};

export default SocialNavMenu;
