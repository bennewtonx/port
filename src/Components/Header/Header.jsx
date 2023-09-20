import React, { useState, useEffect } from 'react';
import './Header.css';

function Header({ isMenuOpen, toggleMenu }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Check the scroll direction
      if (prevScrollPos > currentScrollPos) {
        setIsVisible(true); // Scrolling up, show the header
      } else {
        setIsVisible(false); // Scrolling down, hide the header
      }

      // Update the previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    // Add a scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={`header-container ${isVisible ? 'visible' : 'hidden'}`}>
          <div className='logo'>
            <img src='src\assets\B.png' alt='Logo' />
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