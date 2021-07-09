import React from 'react';

const CreatedUrl = () =>{
    return (
        <div className="createdurl">
            <div className="createdurl__info">
                <a className="createdurl__info__shortUrl" target="_blank" href="https://google.com">https://google.com</a>
                <a className="createdurl__info__longUrl" target="_blank" href="https://google.com">https://google.com</a>
            </div>
            <h3 className="createdurl__clicks">10</h3>
        </div>
    );
};

export default CreatedUrl;