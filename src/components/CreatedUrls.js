import React from 'react';

const CreatedUrls = ({urls_count,users_count}) =>{
    return (
        <div className="createdUrls">
            <h3>Created Urls : {urls_count}</h3>
            <h3>User's Count : {users_count}</h3>
        </div>
    );
};

export default CreatedUrls;