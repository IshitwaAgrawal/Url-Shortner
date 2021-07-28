import React from 'react';
import CreatedUrl from '../components/CreatedUrl';

const CreatedUrlsList = ({urls}) =>{
    return (
        <div className="createdUrlsList">
            {
                urls?.map(url => {
                    return <CreatedUrl key={url?.id} short_url={url?.short_url} long_url={url?.long_url} clicks={url?.clicks} />
                })
            }
        </div>
    );
};

export default CreatedUrlsList;