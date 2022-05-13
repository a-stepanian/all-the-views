import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageSelected, setPageSelected] = useState(null);

  return (
    <AppContext.Provider
      value={{ isSidebarOpen, setIsSidebarOpen, pageSelected, setPageSelected }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
