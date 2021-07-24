import React from 'react';
import InputElement from '../components/InputElement';
import Button from '../components/Button';
import { NavLink } from 'react-router-dom';
import * as routes from '../utils/routes';

const Register = () => {
    return (
        <div className="register__main">
            <span className="welcome__text">Welcome!</span>
            <h4>Register to continue</h4>
            <div className="register__main__box">
                <InputElement heading="E-Mail" placeholder="Enter your email"/>
                <InputElement heading="First Name" placeholder="Enter your first name"/>
                <InputElement heading="Last Name" placeholder="Enter your last name"/>
                <InputElement heading="Username" placeholder="Enter your username"/>
                <InputElement password heading="Password" placeholder="Enter your password"/>
                <div className="register__main__box__btn">
                    <NavLink to={routes.login}><Button text="Login"/></NavLink>
                    <Button text="Register"/>
                </div>
            </div>
        </div>
    );
};

export default Register;