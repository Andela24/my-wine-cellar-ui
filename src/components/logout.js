import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/user_context";

const Logout = () => {
  const navigate = useNavigate();
  const {currentUser, setCurrentUser } = useContext(UserContext)

  fetch(`http://localhost:3000/logout/${currentUser.id}`,
    {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
    .then(() => {
      setCurrentUser(null)
      navigate('/')
    })
};

export default Logout;
