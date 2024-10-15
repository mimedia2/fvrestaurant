// src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    // Function to log in the user and store the token in localStorage
    const login = (token) => {
        localStorage.setItem('token', token);
        setCurrentUser({ token });
    };

    const logout = () => {
        localStorage.removeItem('token');
        setCurrentUser(null);
    };

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        const userId = localStorage.getItem('userId');
      
        if (token && userId) {
          login(token);  // Call login if the token is already stored
        }
      }, []);
      

    const value = {
        currentUser,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
