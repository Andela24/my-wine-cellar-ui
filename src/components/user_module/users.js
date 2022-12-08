import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user_context";

export default function Users() {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="w-50 mx-auto">
      <h1 className="text-center my-3">Profile</h1>
      <table className="table">
        <tbody>
          <tr>
            <td><b>Username: </b></td>
            <td>{currentUser.username}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
