import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const {
    isOpenSubMenu,
    location,
    page: { page, links },
  } = useGlobalContext();

  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    // update
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);
  return (
    <>
      <aside
        className={`${isOpenSubMenu ? 'submenu show' : 'submenu'}`}
        ref={container}
      >
        <h4>{page}</h4>
      </aside>
    </>
  );
};

export default Submenu;
