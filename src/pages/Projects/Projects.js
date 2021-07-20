import React from 'react';
import { Helmet } from "react-helmet";

const Gallery = () => {
    return (
        <div>
            <Helmet>
                <title>John Doe | Projects</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="free portfolio template,portfolio template, portfolio website template, open source and contribution to open source" />
                <meta name="description" content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world." />
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
                <meta name="AdsBot-Google" content="index,follow" />
                <meta property="og:site_name" content="https://portfolio.smaranjitghose.codes/projects.html" />
                <meta property="og:title" content="John Doe | Projects" />
                <meta property="og:description" content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://portfolio.smaranjitghose.codes/projects.html" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="John Doe | Projects" />
                <meta name="twitter:description" content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world." />
                <meta name="twitter:url" content="https://portfolio.smaranjitghose.codes/projects.html" />
                <meta name="application-name" content="John Doe | Projects" />
                <meta name="apple-mobile-web-app-title" content="John Doe | Projects" />
                <meta name="summary" content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world." />
            </Helmet>
            <h1>Hello, Gallery</h1>
        </div>
    );
}

export default Gallery;
