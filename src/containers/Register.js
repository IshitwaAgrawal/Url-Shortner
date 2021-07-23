import React from 'react';
import InputElement from '../components/InputElement';
import Button from '../components/Button';

const Register = () => {
    return (
        <div className="register__main">
            <h1>Welcome!</h1>
            <h4>Register to continue</h4>
            <div className="register__main__box">
                <InputElement heading="E-Mail" placeholder="Enter your email"/>
                <InputElement heading="First Name" placeholder="Enter your first name"/>
                <InputElement heading="Last Name" placeholder="Enter your last name"/>
                <InputElement heading="Username" placeholder="Enter your username"/>
                <InputElement password heading="Password" placeholder="Enter your password"/>
                <Button text="Register"/>
            </div>
        </div>
    );
};

export default Register;