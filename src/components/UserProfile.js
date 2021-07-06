import React from 'react';

const UserProfile = () =>{
    return (
        <div className="userProfile">
            <img className="userProfile__avatar" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.w3schools.com%2Fw3images%2Favatar2.png&f=1&nofb=1" alt="I"/>
            <div className="userProfile__profile">
                <h3 className="userProfile__name">Ishitwa Agrawal</h3>
                <button className="userProfile__logout">LOGOUT</button>
            </div>
        </div>
    );
};

export default UserProfile;