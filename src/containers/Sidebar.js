import React from 'react';
import TitleBar from '../components/TitleBar';
import CreatedUrls from '../components/CreatedUrls';
import UserProfile from '../components/UserProfile';

const Sidebar = () => (
    <div className="sidebar">
        <TitleBar />
        <CreatedUrls />
        <UserProfile />
    </div>
);

export default Sidebar;