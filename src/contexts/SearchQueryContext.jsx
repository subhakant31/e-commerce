import React from "react";
import { useState, useEffect } from "react";

export const SearchQueryContext = React.createContext();

export function SearchContext(props) {
  const [searchQuery, setSearchQuery] = useState();

  return (
    <SearchQueryContext.Provider value={[searchQuery, setSearchQuery]}>
      {props.children}
    </SearchQueryContext.Provider>
  );
}
