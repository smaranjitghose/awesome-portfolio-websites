import React from 'react';
import { ProjCard } from './Card';

const Cardlist=({projects})=>{
    const cardComponet  = projects.map((user,i)=>{
        return <ProjCard title={projects[i].title} cardImage={projects[i].cardImage}  
                        Previewlink={projects[i].Previewlink} Githublink={projects[i].Githublink}/>
    })
    return(
        <>
            {cardComponet};
        </>
    )

}

export default Cardlist;