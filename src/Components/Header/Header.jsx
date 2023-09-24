import React, { useState, useEffect } from 'react';
import './Header.css';

function Header({ isMenuOpen, toggleMenu }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setIsVisible(true); 
      } else {
        setIsVisible(false); 
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={`header-container ${isVisible ? 'visible' : 'hidden'}`}>
          <div className='logo'>
            <img src='/B.png' alt='Logo' />
          </div>
          <div className='header-hr'>
            <hr className='header-bottom' />
          </div>
          <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`}>
            <div className='burger-button' onClick={toggleMenu}>
              <span className='material-symbols-outlined'>{isMenuOpen ? 'close' : 'menu'}</span>
            </div>
          </div>
        </div>
      );
    }
    
    export default Header;