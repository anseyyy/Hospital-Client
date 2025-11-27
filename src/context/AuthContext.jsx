import React, { createContext, useContext, useState, useEffect } from 'react';
import serverURL from '../services/serverURL';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = `${serverURL}/api`;

  useEffect(() => {
    // Check if user is already logged in (from localStorage)
    const adminUser = localStorage.getItem('adminUser');
    const adminToken = localStorage.getItem('adminToken');
    
    if (adminUser && adminToken) {
      try {
        const userData = JSON.parse(adminUser);
        setUser(userData);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        localStorage.removeItem('adminUser');
        localStorage.removeItem('adminToken');
      }
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (data.success) {
        const userData = data.data;
        setUser(userData.admin);
        setIsAuthenticated(true);
        
        // Store token and user data
        localStorage.setItem('adminToken', data.data.token);
        localStorage.setItem('adminUser', JSON.stringify(userData.admin));
        
        return { success: true };
      } else {
        return { success: false, error: data.message || 'Login failed' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Network error. Please try again.' };
    }
  };

  const logout = async () => {
    try {
      const adminToken = localStorage.getItem('adminToken');
      
      // Call logout endpoint (optional)
      if (adminToken) {
        await fetch(`${API_BASE_URL}/admin/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${adminToken}`,
            'Content-Type': 'application/json',
          },
        });
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear local state and localStorage
      setUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem('adminUser');
      localStorage.removeItem('adminToken');
    }
  };

  const verifyToken = async () => {
    try {
      const adminToken = localStorage.getItem('adminToken');
      
      if (!adminToken) {
        return false;
      }

      const response = await fetch(`${API_BASE_URL}/admin/profile`, {
        headers: {
          'Authorization': `Bearer ${adminToken}`,
        },
      });

      const data = await response.json();

      if (data.success) {
        return true;
      } else {
        // Token is invalid, clear storage
        localStorage.removeItem('adminUser');
        localStorage.removeItem('adminToken');
        setUser(null);
        setIsAuthenticated(false);
        return false;
      }
    } catch (error) {
      console.error('Token verification error:', error);
      localStorage.removeItem('adminUser');
      localStorage.removeItem('adminToken');
      setUser(null);
      setIsAuthenticated(false);
      return false;
    }
  };

  const value = {
    isAuthenticated,
    user,
    login,
    logout,
    verifyToken,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};