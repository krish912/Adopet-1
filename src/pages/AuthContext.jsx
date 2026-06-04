import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const savedState = localStorage.getItem('isLoggedIn');
        return savedState === 'true';
    });

    useEffect(() => {
        localStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);

    const signOut = () => {
        setIsLoggedIn(false);
         // Redirect to the home page or login page after sign out
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
