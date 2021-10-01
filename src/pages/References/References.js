import React from 'react'
import { Helmet } from 'react-helmet'
import Reference from './Reference'
import ReferencesPageHeader from './ReferencesPageHeader'
import referencesData from './referencesData'
import './References.css'

const References = () => {
    return (
        <div>
            <Helmet>
                <title>John Doe | References</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="free portfolio template,portfolio template, portfolio website template, open source, open sourcing, contributing to open source" />
                <meta name="description" content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world." />
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
                <meta name="AdsBot-Google" content="index,follow" />
                <meta property="og:site_name" content="https://portfolio.smaranjitghose.codes/references.html" />
                <meta property="og:title" content="John Doe | References" />
                <meta property="og:description" content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://portfolio.smaranjitghose.codes/references.html" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="John Doe | References" />
                <meta name="twitter:description" content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world." />
                <meta name="twitter:url" content="https://portfolio.smaranjitghose.codes/references.html" />
                <meta name="application-name" content="John Doe | References" />
                <meta name="apple-mobile-web-app-title" content="John Doe | References" />
                <meta name="summary" content="An open source project aimed at providing free and beautiful templates to everyone for building their portfolio websites and showcase their work to the world." />
            </Helmet>
            <ReferencesPageHeader />
            {referencesData.map((reference, index) => {
                const { name, designation, message, image } = reference

                return <Reference key={`${name}-${designation}`} name={name} designation={designation} message={message} image={image} alt={index % 2 === 1} />
            })}
        </div>
    )
}

export default References
