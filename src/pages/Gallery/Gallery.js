import React from 'react';
import { Helmet } from "react-helmet";

const Gallery = () => {
    return (
        <div>
            <Helmet>
                <title>John Doe | Gallery</title>
                <meta name="keywords" content="free portfolio template,portfolio template, portfolio website template, open source, open sourcing, contributing to open source" />
                <meta name="description" content="This project serves free and beautiful portfolio template for everyone. Anyone can showcase their work including moocs, education, projects, experience,etc. to the world." />
            </Helmet>
            <h1>Hello, Gallery</h1>
        </div>
    );
}

export default Gallery;
