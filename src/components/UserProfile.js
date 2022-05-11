import React from "react";
import * as routes from "../utils/routes";

const UserProfile = ({ firstname, lastname, history }) => {
  const logout = () => {
    history.goBack();
  };

  return (
    <div className="userProfile">
      <img
        className="userProfile__image"
        src={"https://ui-avatars.com/api/?name=" + firstname + "+" + lastname}
        alt="Avatar"
      />
      <div className="userProfile__main">
        <h3>
          {firstname + " "}
          {lastname}
        </h3>
        <button className="userProfile__main__button" onClick={logout}>
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
