import React, { useContext } from "react";
import { UserContext } from "../../context/user_context";
import { Link} from 'react-router-dom'

function Profile() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="w-50 mx-auto">
      <h1 className="text-center my-3">Welcome to your wine collection {currentUser.username}</h1>
      <Link to="/bottles"> Viewing my Wine Collection </Link>
      <table className="table">
        <tbody>
          <tr>
            <td>
              {/* <b>Welcome to your wine collection {currentUser.username}</b> */}
            </td>
            {/* <td>{currentUser.username}</td> */}
          </tr>
        </tbody>
      </table>
      
    </div>
  );
}
export default Profile