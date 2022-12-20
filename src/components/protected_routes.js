import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/user_context";

const ProtectedRoutes = ({ children }) => {
  const {currentUser, loading} = useContext(UserContext)
  if(loading) {
    return;
  }
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
 
  return children;
  
};

export default ProtectedRoutes;
