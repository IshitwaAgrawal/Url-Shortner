import React from 'react';

const UserProfile = ({firstname,lastname}) =>{
    return (
        <div className="userProfile">
            <img className="userProfile__image" src="https://image.flaticon.com/icons/png/512/2922/2922506.png" alt="Avatar"/>
            <div className="userProfile__main">
                <h3>{firstname+" "}{lastname}</h3>
                <button className="userProfile__main__button">LOGOUT</button>
            </div>
        </div>
    );
};

export default UserProfile;