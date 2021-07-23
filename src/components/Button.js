import React from 'react';

const Button = (props) =>{
    return (
        <div className="button__main">
            <button>{props.text}</button>
        </div>
    );
};
export default Button;