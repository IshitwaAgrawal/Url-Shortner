import React from "react";
import AppTitle from "../components/AppTitle";
import Greeting from "../components/Greeting";
import Sidebar from "./Sidebar";
import Body from "./Body";
import { connect } from "react-redux";

const Homepage = ({ user, urls, jwt, history }) => {
  return (
    <div className="homepage">
      <AppTitle />
      <Greeting username={user?.username} />
      <Sidebar
        firstname={user?.first_name}
        lastname={user?.last_name}
        urls_count={user?.createdUrls}
        users_count={5}
        history={history}
      />
      <Body id={user?.id} urls={urls} jwt={jwt} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  urls: state.urls,
  jwt: state.jwt,
});

export default connect(mapStateToProps, null)(Homepage);
