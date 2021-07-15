import React from 'react';
import { Helmet } from "react-helmet";

const Gallery = () => {
    return (
        <div>
            <Helmet>
                <meta name="description" content="portfolio website"/>
                <meta name="keywords" content="portfolio, website, open source"/>
            </Helmet>
            <h1>Hello, Gallery</h1>
        </div>
    );
}

export default Gallery;
