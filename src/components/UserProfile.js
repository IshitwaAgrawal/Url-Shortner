import React from "react";

const UserProfile = ({ firstname, lastname }) => {
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
        <button className="userProfile__main__button">LOGOUT</button>
      </div>
    </div>
  );
};

export default UserProfile;
