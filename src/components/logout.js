import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/user_context";

const Logout = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(UserContext);

  fetch(`/logout`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: currentUser.id,
    },
    body: JSON.stringify({
      id: currentUser.id,
    }),
  }).then((res) => {
    if (res.status === 200) {
      setCurrentUser(null);
      navigate("/");
    } else {
      console.log("Coluld not logout ");
    }
  });
};

export default Logout;
