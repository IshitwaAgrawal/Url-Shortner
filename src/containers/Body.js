import React from 'react';
import AddUrl from '../components/AddUrl';
import CreatedUrlsList from './CreatedUrlsList';

const Body = () =>{
    return (
        <div className="body">
            <AddUrl />
            <CreatedUrlsList />
        </div>
    );
};

export default Body;