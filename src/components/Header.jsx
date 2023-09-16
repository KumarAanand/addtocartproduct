
import React, { useState, useEffect } from 'react';
import { FaSearch, FaShoppingCart, FaUser, FaBars } from 'react-icons/fa';
import '../styles/Header.scss';

const Header = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767); // Set mobile breakpoint

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="left">
        <span className="company-name">MY COMPANY.COM</span>
      </div>
      {!isMobile &&
        <div className="center">
          <ul className="product-tabs">
            <li className="tab">The EDIT</li>
            <li className="tab">NEW ARRIVALS</li>
            <li className="tab">DESIGNER</li>
            <li className="tab">CLOTHING</li>
            <li className="tab">SHOES</li>
            <li className="tab">BAGS</li>
            <li className="tab">ACCESSORIES</li>
            <li className="tab gapstyles">JEWELRY</li>
            <li className="tab">BEAUTY</li>
            <li className="tab">HOME</li>
          </ul>
        </div>}
      <div className="right">
        <span className="icon">
          <FaSearch />
        </span>
        <span className="icon">
          <FaShoppingCart />
        </span>
        <span className="icon">
          <FaUser />
        </span>
        {isMobile && <span className="icon menu-icon">
          <FaBars />
        </span>}
      </div>
    </header>
  );
};

export default Header;
