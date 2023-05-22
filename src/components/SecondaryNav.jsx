import React, { useState } from 'react';
import { IoMenuSharp, IoCloseSharp } from 'react-icons/io5';
import '../ui/SecondaryNav.css';

const SecondaryNav = (props, { className }) => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  return (
    <nav className={`secondary-nav ${props.className}`}>
      <img className='site-logo' src='sidewalk-sidekick-icon.png' alt='' />
      <span
        className='hamburger'
        onClick={() => setNavMenuOpen((prev) => !prev)}
      >
        {navMenuOpen ? <IoCloseSharp /> : <IoMenuSharp />}
      </span>
      <div className={`secondary-nav-children${navMenuOpen ? ' active' : ''}`}>
        {props.children}
      </div>
    </nav>
  );
};

export default SecondaryNav;
