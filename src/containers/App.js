import React from 'react';
import Homepage from './Homepage';
import SignIn from './SignIn';
import Register from './Register';
import ForgetPassword from './ForgetPassword';
import NewPassword from './NewPassword';
import { Switch, Route} from 'react-router-dom';
import * as Routes from '../utils/routes';

const App = () => {
    return (
        <div>
            <Switch>
                <Route path={Routes.homepage}>
                    <Homepage />
                </Route>
                <Route path={Routes.login}>
                    <SignIn />
                </Route>
                <Route path={Routes.signup}>
                    <Register />
                </Route>
                <Route path={Routes.forgot}>
                    <ForgetPassword />
                </Route>
                <Route path={Routes.reset_password} component={NewPassword} />
            </Switch>
        </div>
    );
};

export default App;