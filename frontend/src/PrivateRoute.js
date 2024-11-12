import React from 'react';
import { Navigate } from 'react-router-dom';
 
const PrivateRoute = ({ children, requiredRole }) => {
  const token = localStorage.getItem("access_token");
  const userType = localStorage.getItem("tipo_usuario");
 
  if (!token) {
    return <Navigate to="/" />;
  }
 
  // Verifica que el tipo de usuario coincida con el rol requerido
  if (userType !== requiredRole) {
    return <Navigate to="/dashboard" />; // Redirige si no es administrador
  }
 
  return children;
};
 
export default PrivateRoute;