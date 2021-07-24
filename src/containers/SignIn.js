import React from 'react';
import InputElement from '../components/InputElement';
import Button from '../components/Button';
import { NavLink } from 'react-router-dom';
import * as routes from '../utils/routes';

const SignIn = () => {
    const goToSignUp = () =>{

    }
    return (
        <div className="register__main">
            <span className="welcome__text">Welcome!</span>
            <h4>Login to continue</h4>
            <div className="register__main__box">
                <InputElement heading="Username" placeholder="Enter your username"/>
                <InputElement password heading="Password" placeholder="Enter your password"/>
                <div className="register__main__box__btn">
                    <Button text="Login"/>
                    <NavLink to={routes.signup}><Button text="New User?"/></NavLink>
                </div>
                <NavLink to={routes.forgot}><Button text="Forgot Password" /></NavLink>
            </div>
        </div>
    );
};

export default SignIn;