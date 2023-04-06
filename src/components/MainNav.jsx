import React, { useState } from 'react';
import {IoMenuSharp, IoCloseSharp} from 'react-icons/io5'
import '../ui/MainNav.css';

const MainNav = (props, { className }) => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  return (
    <nav className={`main-nav ${props.className}`}>
      <span className='site-logo'>
        Logo Icon
      </span>
      <span
        className="hamburger"
        onClick={() => setNavMenuOpen((prev) => !prev)}
      >
        {navMenuOpen ? <IoCloseSharp /> : <IoMenuSharp />}
      </span>
      <div className={`main-nav-children${navMenuOpen ? ' active' : ''}`}>
       {props.children}
      </div>
    </nav>
  );
};

export default MainNav;
