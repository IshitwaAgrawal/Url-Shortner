import React from 'react';
import CreatedUrls from '../components/CreatedUrls';
import UserProfile from '../components/UserProfile';

const Sidebar = ({firstname,lastname,users_count,urls_count}) =>{
    return (
        <div className="sidebar">
            <CreatedUrls urls_count={urls_count} users_count={users_count} />
            <UserProfile firstname={firstname} lastname={lastname} />
        </div>
    );
};
export default Sidebar;