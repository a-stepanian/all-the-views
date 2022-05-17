import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);
  const [locationList, setLocationList] = useState([]);
  const [location, setLocation] = useState(null);
  const [view, setView] = useState(null);

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        currentPage,
        setCurrentPage,
        location,
        setLocation,
        view,
        setView,
        locationList,
        setLocationList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
