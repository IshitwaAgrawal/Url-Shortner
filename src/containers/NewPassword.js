import React from 'react';
import InputElement from '../components/InputElement';
import Button from '../components/Button';

const NewPassword = () => {
    return (
        <div className="register__main">
            <span className="welcome__text">Reset Password</span>
            <h4>Enter New Password to continue</h4>
            <div className="register__main__box">
                <InputElement password heading="New Password" placeholder="Enter the new password."/>
                <InputElement password heading="Confirm Password" placeholder="Enter password again to confirm."/>
                <Button text="Change Password"/>
            </div>
        </div>
    );
};

export default NewPassword;