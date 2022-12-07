import { useNavigate } from "react-router-dom";

const Logout = () => {
  const user_id = localStorage.getItem("user_id")
  const navigate = useNavigate();

  fetch(`http://localhost:3000/logout/${user_id}`,
    {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
    .then(() => {
      localStorage.removeItem('user_id');
      navigate('/')
    })
};

export default Logout;
