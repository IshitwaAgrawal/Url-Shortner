import React from "react";
import { connect } from "react-redux";

const CreatedUrls = ({ urls_count, users_count }) => {
  return (
    <div className="createdUrls">
      <h3>Created Urls : {urls_count}</h3>
      <h3>User's Count : {users_count}</h3>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users_count: state.users_count,
});

export default connect(mapStateToProps, null)(CreatedUrls);
