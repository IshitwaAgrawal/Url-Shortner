import React from 'react';
import AppTitle from '../components/AppTitle';
import Greeting from '../components/Greeting';
import Sidebar from './Sidebar';
import Body from './Body';

const Homepage = () =>{
    return (
        <div className="homepage">
            <AppTitle />
            <Greeting />
            <Sidebar />
            <Body />
        </div>
    );
};

export default Homepage;