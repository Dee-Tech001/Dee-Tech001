// PrivateRoute.js
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ element }) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!auth.user) {
      navigate('log', { state: { from: location.pathname } });
    }
    
  }, [auth, navigate, location]);

  return auth.user ? element : null;
};

export default PrivateRoute;
