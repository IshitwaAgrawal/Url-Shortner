import React from 'react';
import InputElement from '../components/InputElement';
import Button from '../components/Button';
import { NavLink } from 'react-router-dom';
import * as routes from '../utils/routes';

const ForgetPassword = () => {
    return (
        <div className="register__main">
            <span className="welcome__text">Forget Password</span>
            <h4>Enter the email to send Password</h4>
            <div className="register__main__box">
                <InputElement heading="E-Mail" placeholder="Enter the registered e-mail."/>
                <div className="register__main__box__btn">
                    <Button text="Send Link" />
                    <NavLink to={routes.login}><Button text="Login"/></NavLink>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;