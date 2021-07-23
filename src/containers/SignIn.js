import React from 'react';
import InputElement from '../components/InputElement';
import Button from '../components/Button';

const SignIn = () => {
    return (
        <div className="register__main">
            <h1>Welcome!</h1>
            <h4>Login to continue</h4>
            <div className="register__main__box">
                <InputElement heading="Username" placeholder="Enter your username"/>
                <InputElement password heading="Password" placeholder="Enter your password"/>
                <Button text="Login"/>
                <Button text="Forgot Password" />
            </div>
        </div>
    );
};

export default SignIn;