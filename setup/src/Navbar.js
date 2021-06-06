import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar, openSubMenu, closeSidebar } = useGlobalContext();

  // ini untuk mouseOver si link-btn
  const displayMenu = (e) => {
    // ini untuk menggunakan textContent agar hanya
    //memperoleh target saja jdi tidak dgn element htmlnya : company, developer, etc
    const page = e.target.textContent;
    // memperoleh center, bottom use boundingrect sprti left, right, dsb akan terlihat nilainya
    const tempBtn = e.target.getBoundingClientRect();
    // center
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    // masukan kedalam function
    openSubMenu(page, { center, bottom });
  };
  return (
    <>
      <nav className='nav'>
        <div className='nav-center'>
          {/* nav-header */}
          <div className='nav-header'>
            <img src={logo} alt='logo' className='nav-logo' />
            <button className='btn toggle-btn' onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          {/* nav-links */}
          <ul className='nav-links'>
            <li>
              <button className='link-btn' onMouseOver={displayMenu}>
                products
              </button>
            </li>
            <li>
              <button className='link-btn' onMouseOver={displayMenu}>
                developers
              </button>
            </li>
            <li>
              <button className='link-btn' onMouseOver={displayMenu}>
                company
              </button>
            </li>
          </ul>
          <button className='btn signin-btn'>sign in</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
