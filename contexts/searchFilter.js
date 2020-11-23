import { createContext, useState, useContext } from 'react';

const searchFilterContext = createContext(null);

export const SearchFilterProvider = ({ children }) => {
  const [searchFilterTerm, setSearchFilterTerm] = useState({
    filter: {},
    search: {},
  });
  return (
    <searchFilterContext.Provider
      value={{ searchFilterTerm, setSearchFilterTerm }}
    >
      {children}
    </searchFilterContext.Provider>
  );
};

export const useSearch = () => useContext(searchFilterContext);
