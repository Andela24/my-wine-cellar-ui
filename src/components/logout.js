import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/user_context";
import {headers} from '../Globals'

const Logout = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(UserContext);

  fetch(`/logout`, {
    method: "DELETE",
    headers: headers
  }).then((res) => {
    if (res.status === 200) {
      setCurrentUser(null);
      navigate("/");
    } else {
      window.alert("Could not logout ");
    }
  });
};

export default Logout;
