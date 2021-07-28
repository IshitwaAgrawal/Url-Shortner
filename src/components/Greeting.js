import React from 'react';

const Greeting = ({username}) =>{
    return (
        <div className="greeting">
            <h2>Welcome, {username}</h2>
        </div>
    );
};

export default Greeting;