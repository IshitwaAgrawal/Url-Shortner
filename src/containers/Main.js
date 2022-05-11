import React from "react";
import App from "./App";
import { withRouter } from "react-router-dom";

const Main = ({ history }) => {
  return <App history={history} />;
};

export default withRouter(Main);
