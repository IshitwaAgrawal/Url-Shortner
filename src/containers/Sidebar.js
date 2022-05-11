import React from "react";
import CreatedUrls from "../components/CreatedUrls";
import UserProfile from "../components/UserProfile";

const Sidebar = ({ firstname, lastname, urls_count, history }) => {
  return (
    <div className="sidebar">
      <CreatedUrls urls_count={urls_count} />
      <UserProfile
        firstname={firstname}
        lastname={lastname}
        history={history}
      />
    </div>
  );
};
export default Sidebar;
