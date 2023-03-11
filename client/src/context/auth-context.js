import { createContext, useContext, useState } from 'react';

const defaultProviderValues = {};

const AuthContext = createContext(defaultProviderValues);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState('');
  const [loading, setLoading] = useState(true);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
