import React from 'react';
import AddUrl from '../components/AddUrl';
import CreatedUrlsList from './CreatedUrlsList';

const Body = ({urls,jwt,id}) =>{
    return (
        <div className="body">
            <AddUrl id={id} jwt={jwt} />
            <CreatedUrlsList urls={urls}/>
        </div>
    );
};

export default Body;