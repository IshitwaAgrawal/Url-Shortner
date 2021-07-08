import React from 'react';
import CreatedUrls from '../components/CreatedUrls';
import UserProfile from '../components/UserProfile';

const Sidebar = () =>{
    return (
        <div className="sidebar">
            <CreatedUrls />
            <UserProfile />
        </div>
    );
};
export default Sidebar;