import React, { createContext, useContext, useState } from 'react';

// Create a context for user data
const UserContext = createContext();

// Custom hook to access user data
export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to set user data after sign-up
  const setUserDataAfterSignUp = (data) => {
    setUserData(data);
  };

 
  return (
    <UserContext.Provider value={{ userData, setUserDataAfterSignUp }}>
      {children}
    </UserContext.Provider>
  );
};