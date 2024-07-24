import React, { useState, createContext, useContext } from 'react';

// Create context for managing favorites
export const FavoritesContext = createContext();

// Custom hook to consume FavoritesContext
export const useFavorites = () => useContext(FavoritesContext);

// Provider component to manage favorites state
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Function to toggle favorite status
  const toggleFavorite = (cardTitle) => {
    if (favorites.includes(cardTitle)) {
      setFavorites(favorites.filter(title => title !== cardTitle));
    } else {
      setFavorites([...favorites, cardTitle]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};