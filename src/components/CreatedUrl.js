import React from 'react';

const CreatedUrl = ({long_url,short_url,clicks}) =>{

    const server_url = "http://localhost:80/api1/url/";

    return (
        <div className="createdurl">
            <div className="createdurl__info">
                <a className="createdurl__info__shortUrl" target="_blank" href={server_url+short_url}>{server_url+short_url}</a>
                <a className="createdurl__info__longUrl" target="_blank" href={long_url}>{long_url}</a>
            </div>
            <h3 className="createdurl__clicks">{clicks}</h3>
        </div>
    );
};

export default CreatedUrl;