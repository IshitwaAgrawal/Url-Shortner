import React from "react";
import Homepage from "./Homepage";
import SignIn from "./SignIn";
import Register from "./Register";
import ForgetPassword from "./ForgetPassword";
import NewPassword from "./NewPassword";
import { Switch, Route } from "react-router-dom";
import * as Routes from "../utils/routes";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path={Routes.login} exact component={SignIn} />
        <Route path={Routes.homepage} exact component={Homepage} />
        <Route path={Routes.signup} exact component={Register} />
        <Route path={Routes.forgot} component={ForgetPassword} exact />
        <Route path={Routes.reset_password} component={NewPassword} exact />
      </Switch>
    </div>
  );
};

export default App;
