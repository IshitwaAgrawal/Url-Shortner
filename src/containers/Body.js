import React from 'react';
import TitleBar from '../components/TitleBar';
import MainBody from './MainBody';

const Body = () =>(
    <div className="body">
        {/* 
            Body 
                Title Bar
                    Welcome, Username
                Main Body
                    Search Bar
                    Created Urls list

        */}
        <TitleBar body />
        <MainBody />
    </div>
);

export default Body;