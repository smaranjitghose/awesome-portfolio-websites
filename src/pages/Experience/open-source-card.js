import { Card } from "@material-ui/core";
import React from "react";

function OpenSourceCard(props){
   const {card}=props;

    return (
    <div style={{padding:'10px',marginTop:'200px'}}>
        <Card>
            <div className="card volunteerCard" style={{height: "550px",width:"400px"}}>
            
            <img src={card.cardImage} height="250" width="100%" className="card-img" style={{borderRadius:'10px'}} alt="card" />
            <div class="content">
                <h2 className="volunteerTitle">{card.title}</h2><br />
                <p className="copy">{card.description}</p>
            </div>
            
            </div>
        
        </Card>
    </div>
    )

}

export default OpenSourceCard;