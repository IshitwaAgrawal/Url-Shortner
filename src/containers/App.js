import React, { useEffect } from "react";
import Homepage from "./Homepage";
import SignIn from "./SignIn";
import Register from "./Register";
import ForgetPassword from "./ForgetPassword";
import NewPassword from "./NewPassword";
import { Switch, Route } from "react-router-dom";
import * as Routes from "../utils/routes";
import * as endpoints from "../utils/endpoints";
import * as actions from "../utils/actions";
import axios from "../utils/axios";
import { connect } from "react-redux";

const App = ({ changeUserCount, history }) => {
  useEffect(() => {
    axios
      .get(endpoints.userCount)
      .then((res) => {
        console.log(res);
        changeUserCount(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <Switch>
        <Route path={Routes.login} exact component={SignIn} />
        <Route path={Routes.homepage} exact>
          <Homepage history={history} />
        </Route>
        <Route path={Routes.signup} exact component={Register} />
        <Route path={Routes.forgot} component={ForgetPassword} exact />
        <Route path={Routes.reset_password} component={NewPassword} exact />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeUserCount: (count) =>
    dispatch({ type: actions.change_users_count, payload: count }),
});

export default connect(null, mapDispatchToProps)(App);
