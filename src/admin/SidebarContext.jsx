import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

export const SidebarProvider = ({ children }) => {
  const [hideSidebar, setHideSidebar] = useState(false);

  return (
    <SidebarContext.Provider value={{ hideSidebar, setHideSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
