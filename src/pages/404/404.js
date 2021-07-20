import React from 'react';
import { Helmet } from "react-helmet";

const NotFound = () => {
    return (
        <div>
            <Helmet>
                <title>John Doe | 404</title>
            </Helmet>
            <h1>Not Found</h1>
        </div>
        
    )
};
export default NotFound;