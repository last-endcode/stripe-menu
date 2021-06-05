import React, { useState, useContext } from 'react';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(true);
  // tambah tuk location be empty object
  const [location, setLocation] = useState({});
  // tambah tuk page
  const [page, setPage] = useState({ page: '', links: [] });

  const openSidebar = () => {
    setIsOpenSidebar(true);
  };

  const closeSidebar = () => {
    setIsOpenSidebar(false);
  };

  // tambah parameter, text, dan coordinates
  const openSubMenu = (text, coordinates) => {
    // const page = sublinks.find((link) => link.page === text.toLowerCase());
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsOpenSubMenu(true);
  };

  const closeSubMenu = () => {
    setIsOpenSubMenu(false);
  };

  return (
    <AppContext.Provider
      value={{
        isOpenSidebar,
        isOpenSubMenu,
        openSidebar,
        openSubMenu,
        closeSidebar,
        closeSubMenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// for useGlobalContext
export const useGlobalContext = () => {
  return useContext(AppContext);
};
